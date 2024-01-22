import { screen, waitFor, fireEvent } from '@testing-library/react';
import { UtilityContextProvider } from 'contexts/utility-context/utility-context';
import { getTaskDefinitionDetail } from 'services/api/tms/getTaskDefinitionDetail';
import { getTmsPanelLayout } from 'services/api/tms/getTmsPanelLayout';
import ViewTaskDefinitionDetail from '..';
import useQueryParams from 'hooks/useQueryParams';
import { constants } from 'constants/constants';
import { taskDefinitionDetailMockRes } from '../__mocks__/taskDefinitionDetailMock';
import * as sessionStorageUtils from 'utils/sessionStorage';
import { renderWithProviders } from 'testSetup/testSetup';
import { GLOBAL_CONTEXT_MOCK } from 'testSetup/mock/globalContextMock';
import { UTILITY_CONTEXT_MOCK } from 'testSetup/mock/utilityContextMock';
import { GlobalContext } from 'contexts/global-context/global-context';
import CommonModalComponent from 'components/CommonModalComponent';
import LoaderComponent from 'components/loaderComponent/LoaderComponent';
import ToastComponent from 'components/toastComponent/ToastComponent';
import BottomSheetComponent from 'components/BottomSheetComponent/BottomSheetComponent';
import { updateTaskDefinitionWorkflow } from 'services/api/tms/updateTaskDefinitionWorkflow';
import { getTmsPanelLayoutRes } from 'services/mockApi/tms/getTmsPanelLayout';
import { parseLayoutApiResponse } from 'modules/tmsPanel/utils';
import { getTmsPanelConfigRes } from 'services/mockApi/tms/getTmsPanelConfig';

const getComponent = (
  props = {},
  globalContext = GLOBAL_CONTEXT_MOCK,
  utilityContext = UTILITY_CONTEXT_MOCK,
) =>
  renderWithProviders(
    <GlobalContext.Provider value={globalContext}>
      <UtilityContextProvider>
        <ViewTaskDefinitionDetail {...props} />
        <LoaderComponent />
        <ToastComponent />
        <BottomSheetComponent />
        <CommonModalComponent />
      </UtilityContextProvider>
    </GlobalContext.Provider>,
  );

jest.mock('utils/sessionStorage');

sessionStorageUtils.getItem.mockReturnValueOnce(getTmsPanelConfigRes);

const mockUseLocation = jest.fn(() => ({ search: '' }));
const mockHistoryPush = jest.fn();

jest.mock('hooks/useQueryParams', () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockUseQueryParams = useQueryParams as jest.MockedFunction<any>;
mockUseQueryParams.mockReturnValue({
  get: (str) => 12345,
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => mockUseLocation(),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

jest.mock('services/api/tms/getTaskDefinitionDetail', () => ({
  getTaskDefinitionDetail: jest.fn(),
}));

jest.mock('services/api/tms/getTmsPanelLayout', () => ({
  getTmsPanelLayout: jest.fn(),
}));

jest.mock('services/api/tms/updateTaskDefinitionWorkflow', () => ({
  updateTaskDefinitionWorkflow: jest.fn(),
}));

describe('ViewTaskDefinitionDetail', () => {
  let originalGetItem;

  beforeAll(() => {
    originalGetItem = global.localStorage.getItem;
    global.localStorage.getItem = jest.fn(() => JSON.stringify({}));
  });

  afterAll(() => {
    global.localStorage.getItem = originalGetItem;
  });

  it('renders ViewTaskDefinitionDetail component correctly', async () => {
    updateTaskDefinitionWorkflow.mockResolvedValue({
      message: 'Task Definition Detail updated successfully',
    });

    getTmsPanelLayout.mockResolvedValue(
      parseLayoutApiResponse(getTmsPanelLayoutRes()),
    );

    getTaskDefinitionDetail.mockResolvedValue(taskDefinitionDetailMockRes);

    getComponent();

    await waitFor(() => {
      expect(screen.getByText('Task Definition Name')).toBeInTheDocument();
      expect(screen.getByText('Task Display Name')).toBeInTheDocument();
    });
    expect(screen.getByText(constants.VIEW_TASK)).toBeInTheDocument();
    expect(screen.getByText(constants.VIEW_DETAIL_TASK)).toBeInTheDocument();

    // cancelling the deactivate confirmation modal
    fireEvent.click(screen.getByTestId('update'));
    await waitFor(() => {
      expect(
        screen.getByText('Enter Task Definition Reason'),
      ).toBeInTheDocument();
    });
    fireEvent.change(screen.getByTestId('confirmationModalInput'), {
      target: { value: 'test' },
    });
    fireEvent.click(screen.getByTestId('confirmationModalSecondBtn'));

    // cancelling the submit confirmation modal
    fireEvent.click(screen.getByTestId('submit'));
    await waitFor(() => {
      expect(
        screen.getByText('Enter Task Definition Reason'),
      ).toBeInTheDocument();
    });
    fireEvent.change(screen.getByTestId('confirmationModalInput'), {
      target: { value: 'test' },
    });
    fireEvent.click(screen.getByTestId('confirmationModalSecondBtn'));

    // confirming the deactivate confirmation modal
    fireEvent.click(screen.getByTestId('update'));
    await waitFor(() => {
      expect(
        screen.getByText('Enter Task Definition Reason'),
      ).toBeInTheDocument();
    });
    fireEvent.change(screen.getByTestId('confirmationModalInput'), {
      target: { value: 'test' },
    });
    fireEvent.click(screen.getByTestId('confirmationModalFirstBtn'));

    // confirming the submit confirmation modal
    fireEvent.click(screen.getByTestId('submit'));
    await waitFor(() => {
      expect(
        screen.getByText('Enter Task Definition Reason'),
      ).toBeInTheDocument();
    });
    fireEvent.change(screen.getByTestId('confirmationModalInput'), {
      target: { value: 'test' },
    });
    fireEvent.click(screen.getByTestId('confirmationModalFirstBtn'));
  });
});
