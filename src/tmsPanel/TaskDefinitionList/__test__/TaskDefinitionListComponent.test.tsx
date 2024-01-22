import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TaskDefinitionListComponent from '../TaskDefinitionListComponent';
import { UtilityContextProvider } from 'contexts/utility-context/utility-context';
import { cloneTaskDefinitionById } from 'services/api/tms/cloneTaskDefinitionById';
import { GLOBAL_CONTEXT_MOCK } from 'testSetup/mock/globalContextMock';
import { UTILITY_CONTEXT_MOCK } from 'testSetup/mock/utilityContextMock';
import { renderWithProviders } from 'testSetup/testSetup';
import { GlobalContext } from 'contexts/global-context/global-context';
import LoaderComponent from 'components/loaderComponent/LoaderComponent';
import ToastComponent from 'components/toastComponent/ToastComponent';
import BottomSheetComponent from 'components/BottomSheetComponent/BottomSheetComponent';
import CommonModalComponent from 'components/CommonModalComponent';
import { taskListMockProp } from '../mocks/taskLIstMockProp';
import { waitFor } from '@testing-library/dom';

jest.mock('services/api/tms/cloneTaskDefinitionById');

const mockAfterCloneHandler = jest.fn();
const mockOnNextPage = jest.fn();
const mockOnPrevPage = jest.fn();
const mockToggleBackgroundOverlay = jest.fn();

// Mock data for testing
const mockProps = {
  pageNumber: undefined,
  taskList: taskListMockProp,
  afterCloneHandler: mockAfterCloneHandler,
  onNextPage: mockOnNextPage,
  onPrevPage: mockOnPrevPage,
  toggleBackgroundOverlay: mockToggleBackgroundOverlay,
};

// Mock useHistory
const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({ push: mockHistoryPush }),
}));

const getComponent = (
  props = mockProps,
  globalContext = GLOBAL_CONTEXT_MOCK,
  utilityContext = UTILITY_CONTEXT_MOCK,
) =>
  renderWithProviders(
    <GlobalContext.Provider value={globalContext}>
      <UtilityContextProvider>
        <TaskDefinitionListComponent {...props} />
        <LoaderComponent />
        <ToastComponent />
        <BottomSheetComponent />
        <CommonModalComponent />
      </UtilityContextProvider>
    </GlobalContext.Provider>,
  );

describe('TaskDefinitionListComponent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders component with task list and paginator ~ undefined props', () => {
    cloneTaskDefinitionById.mockResolvedValue({ status: 'SUCCESS' });
    getComponent({ ...mockProps, taskList: undefined });

    const prevPageButton = screen.queryByTestId('prevPageButton');
    expect(prevPageButton).not.toBeInTheDocument();
    const nextPageButton = screen.queryByTestId('nextPageButton');
    expect(nextPageButton).not.toBeInTheDocument();
  });

  it('renders component with task list and clone / view a task', async () => {
    getComponent(mockProps);

    const taskRow = screen.getByText('Txn Dropper_Vintage2_21Dec');
    expect(taskRow).toBeInTheDocument();

    const prevPageButton = screen.getByTestId('prevPageButton');
    expect(prevPageButton).toBeInTheDocument();
    const nextPageButton = screen.getByTestId('nextPageButton');
    expect(nextPageButton).toBeInTheDocument();

    // cancelling the duplicate task
    fireEvent.click(screen.getByTestId('actions-0'));
    await waitFor(() => {
      expect(screen.getByText('Duplicate task')).toBeInTheDocument();
    });
    fireEvent.click(screen.getByText('Duplicate task'));
    await waitFor(() => {
      expect(
        screen.getByTestId('confirmationModalSecondBtn'),
      ).toBeInTheDocument();
    });
    fireEvent.click(screen.getByTestId('confirmationModalSecondBtn'));

    // proceeding the duplicate task
    fireEvent.click(screen.getByTestId('actions-0'));
    await waitFor(() => {
      expect(screen.getByText('Duplicate task')).toBeInTheDocument();
    });
    fireEvent.click(screen.getByText('Duplicate task'));
    await waitFor(() => {
      expect(
        screen.getByTestId('confirmationModalFirstBtn'),
      ).toBeInTheDocument();
    });
    fireEvent.click(screen.getByTestId('confirmationModalFirstBtn'));

    // proceeding the view task
    fireEvent.click(screen.getByTestId('actions-0'));
    await waitFor(() => {
      expect(screen.getByText('View Task')).toBeInTheDocument();
    });
    fireEvent.click(screen.getByText('View Task'));
  });

  it('renders component with undefined taskDefinitionId and taskDefinitionName and clone a task', async () => {
    getComponent({
      ...mockProps,
      taskList: { ...mockProps.taskList, searchCount: undefined },
    });

    // proceeding the duplicate task
    fireEvent.click(screen.getByTestId('actions-5'));
    await waitFor(() => {
      expect(screen.getByText('Duplicate task')).toBeInTheDocument();
    });
    fireEvent.click(screen.getByText('Duplicate task'));
    await waitFor(() => {
      expect(
        screen.queryByTestId('confirmationModalFirstBtn'),
      ).not.toBeInTheDocument();
    });
  });

  it('renders component with task list and Edit a task', async () => {
    getComponent(mockProps);

    // proceeding the edit task
    fireEvent.click(screen.getByTestId('actions-0'));
    await waitFor(() => {
      expect(screen.getByText('Edit Task')).toBeInTheDocument();
    });
    fireEvent.click(screen.getByText('Edit Task'));
  });
});
