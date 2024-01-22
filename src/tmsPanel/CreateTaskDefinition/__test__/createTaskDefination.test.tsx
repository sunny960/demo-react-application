import { fireEvent, render, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { createUpdateTaskDefinition } from 'services/api/tms/createUpdateTaskDefinition';
import { getTaskDefinitionDetail } from 'services/api/tms/getTaskDefinitionDetail';
import { getTmsPanelConfig } from 'services/api/tms/getTmsPanelConfig';
import { getTmsPanelLayout } from 'services/api/tms/getTmsPanelLayout';
import CreateTaskDefinition from '../index';
import { PanelLayoutRes, configRes, createDataRes } from './mockData';

jest.mock('services/api/tms/getTmsPanelConfig');
jest.mock('services/api/tms/getTaskDefinitionDetail');
jest.mock('services/api/tms/createUpdateTaskDefinition');
jest.mock('services/api/tms/updateTaskDefinitionWorkflow');
jest.mock('react-router-dom', () => ({
  useHistory: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn(),
  }),
  useLocation: () => ({
    pathname: '/testPath',
    search: '',
    hash: '',
    state: null,
  }),
}));

jest.mock('services/api/tms/getTmsPanelLayout', () => ({
  getTmsPanelLayout: jest.fn(),
}));

const history = createMemoryHistory();

const mockSessionStorage = (() => {
  let store: { [key: string]: string } = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'sessionStorage', {
  value: mockSessionStorage,
});

describe('CreateTaskDefinition', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    (getTmsPanelLayout as jest.Mock).mockImplementation(
      (type = 'create_screen') => {
        return Promise.resolve(PanelLayoutRes);
      },
    );
    (getTmsPanelConfig as jest.Mock).mockResolvedValue(configRes);
    render(<CreateTaskDefinition />);
  });

  it('calls getTmsPanelLayout and getTmsPanelConfig on initial render', async () => {
    (getTmsPanelLayout as jest.Mock).mockImplementation(
      (type = 'create_screen') => {
        return Promise.resolve(PanelLayoutRes);
      },
    );
    sessionStorage.clear();
    (getTmsPanelConfig as jest.Mock).mockImplementation(() => {
      return Promise.resolve(configRes);
    });

    render(<CreateTaskDefinition />);
    await waitFor(() => {
      expect(getTmsPanelLayout).toHaveBeenCalled();
      expect(getTmsPanelConfig).toHaveBeenCalled();
      expect(sessionStorage.getItem('tmsPanelConfig')).toEqual(
        JSON.stringify(configRes),
      );
    });
  });

  it('retrieves data from session storage on subsequent renders', async () => {
    sessionStorage.setItem('tmsPanelConfig', JSON.stringify(configRes));

    render(<CreateTaskDefinition />);
    await waitFor(() => {
      expect(getTmsPanelLayout).toHaveBeenCalled();
      expect(getTmsPanelConfig).not.toHaveBeenCalled();
    });
  });

  it('Task Definition Name is required', async () => {
    (getTmsPanelLayout as jest.Mock).mockImplementation(
      (type = 'create_screen') => {
        return Promise.resolve(PanelLayoutRes);
      },
    );
    sessionStorage.clear();

    (getTmsPanelConfig as jest.Mock).mockImplementation(() => {
      return Promise.resolve(configRes);
    });
    const { getByTestId } = render(<CreateTaskDefinition />);

    await waitFor(() => {
      expect(getTmsPanelLayout).toHaveBeenCalled();
      expect(getTmsPanelConfig).toHaveBeenCalled();
    });
    const taskDefName = await getByTestId('taskDefinitionName');
    const taskDefInput = taskDefName.children[0].children[0].children[0];
    fireEvent.change(taskDefInput, { target: { value: 'test' } });
    await waitFor(() => {
      expect(taskDefInput).toHaveValue('test');
    });
  });

  it('Required fields data is entered properly', async () => {
    (getTmsPanelLayout as jest.Mock).mockImplementation(
      (type = 'create_screen') => {
        return Promise.resolve(PanelLayoutRes);
      },
    );
    sessionStorage.clear();
    (getTmsPanelConfig as jest.Mock).mockResolvedValue(configRes);
    (getTaskDefinitionDetail as jest.Mock).mockImplementation((id = '357') => {
      return Promise.resolve(createDataRes);
    });
    (createUpdateTaskDefinition as jest.Mock).mockImplementation(
      (payload = createDataRes) => {
        return Promise.resolve({
          updatedTaskDefinitionId: 357,
          status: 'DRAFT',
        });
      },
    );
    const { getByTestId, getByText, getByRole, getAllByText } = render(
      <CreateTaskDefinition />,
    );

    await waitFor(() => {
      expect(getTmsPanelLayout).toHaveBeenCalled();
      expect(getTmsPanelConfig).toHaveBeenCalled();
    });

    const taskDefName = await getByTestId('taskDefinitionName');
    const taskDefInput = taskDefName.children[0].children[0].children[0];
    fireEvent.change(taskDefInput, { target: { value: 'test' } });
    const taskDisplayName = await getByTestId('displayName');
    const taskDisplayNameInput =
      taskDisplayName.children[0].children[0].children[0];
    fireEvent.change(taskDisplayNameInput, { target: { value: 'Test' } });

    const Team = await getByTestId('team');
    fireEvent.click(Team);
    const teamOption = await getByText('EDC Online Sales');
    fireEvent.click(teamOption);

    const subTeam = await getByTestId('subTeam');
    fireEvent.click(subTeam);
    const subTeamOption = await getAllByText('EDC Online Sales');
    fireEvent.click(subTeamOption[1]);

    const source = await getByTestId('source');
    fireEvent.click(source);
    const sourceOption = await getByText('FSM');
    fireEvent.click(sourceOption);

    const sla = await getByTestId('sla');
    const slaInput = sla.children[0].children[0].children[0];
    fireEvent.click(slaInput);
    fireEvent.change(slaInput, { target: { value: '5' } });

    const inputSuccess = await getByTestId('inputSuccessCriteria');
    fireEvent.click(inputSuccess);
    const inputSuccessCriteriaOption = await getByText('Winback');
    fireEvent.click(inputSuccessCriteriaOption);

    const DoneBtn = await getByRole('button', {
      name: 'Done',
    });
    fireEvent.click(DoneBtn);

    const incentivePoints = await getByTestId('incentivePoints').children[0]
      .children[0].children[0];
    fireEvent.change(incentivePoints, { target: { value: '6' } });

    const incentiveValue = await getByTestId('incentiveValue').children[0]
      .children[0].children[0];
    fireEvent.change(incentiveValue, { target: { value: '7' } });

    const maxAttempt = await getByTestId('maxAttempt').children[0].children[0]
      .children[0];
    fireEvent.change(maxAttempt, { target: { value: '3' } });

    const saveAndProceed = await getByRole('button', {
      name: 'Save and Proceed',
    });
    expect(saveAndProceed).toBeDisabled();

    const fseSkillSource = await getByTestId('skillSetList.0.sourceSkill');
    fireEvent.click(fseSkillSource);
    const fseSkillSourceOption = await getByText('Business Skill');
    fireEvent.click(fseSkillSourceOption);

    expect(getByText('Business Skill')).toBeInTheDocument();
    expect(getAllByText('EDC Online Sales').length).toBeGreaterThanOrEqual(1);
    expect(getByText('FSM')).toBeInTheDocument();
    expect(getByText('Winback')).toBeInTheDocument();

    expect(saveAndProceed).toBeEnabled();

    fireEvent.click(saveAndProceed);

    await waitFor(() => {
      expect(getTaskDefinitionDetail).toHaveBeenCalled();
      expect(createUpdateTaskDefinition).toHaveBeenCalled();
    });
    const ViewSummary = await getByRole('button', {
      name: 'View Summary',
    });

    fireEvent.click(ViewSummary);
    await waitFor(() => {
      expect(history.location.pathname).toBe('/');
    });
  });
});
