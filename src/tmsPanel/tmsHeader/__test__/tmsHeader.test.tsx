import { act, fireEvent, render, screen } from '@testing-library/react';
import useQueryParams from 'hooks/useQueryParams';
import TmsHeader from '../index';

const mockUseLocation = jest.fn(() => ({ search: '' }));
const mockHistoryPush = jest.fn();

jest.mock('hooks/useQueryParams', () => ({
  __esModule: true,
  default: jest.fn(),
}));
const mockUseQueryParams = useQueryParams as jest.MockedFunction<any>;
mockUseQueryParams.mockReturnValue({
  get: (str) => null,
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => mockUseLocation(),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));
describe('TmsHeader', () => {
  const mockCreateDefinitionHandler = jest.fn();
  const mockShowModal = jest.fn();
  const mockHideModal = jest.fn();
  const mockShowToast = jest.fn();

  const mockTaskData = {
    taskDefinitionId: 1,
    taskDefinitionName: 'Task 1',
    actions: ['edit', 'clone'],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component with the correct label and sub-label text', () => {
    render(<TmsHeader labelText="Test Label" subLabelText="Test Sub-Label" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('Test Sub-Label')).toBeInTheDocument();
  });

  it('renders the "Add New Task" button when showCreateTaskBtn is true', () => {
    render(
      <TmsHeader
        showCreateTaskBtn
        createDefinitionHandler={mockCreateDefinitionHandler}
      />,
    );
    expect(screen.getByText('Add New Task')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Add New Task'));
    expect(mockCreateDefinitionHandler).toHaveBeenCalledTimes(1);
  });

  it('renders the "View All Tasks" button when showViewAllTaskBtn is true and taskDefinitionIdInURL is not present', () => {
    render(<TmsHeader showViewAllTaskBtn />);
    act(() => {
      expect(screen.getByText('View All Tasks')).toBeInTheDocument();
      fireEvent.click(screen.getByText('View All Tasks'));
    });
  });

  it('does not render the "View All Tasks" button when taskDefinitionIdInURL is present', () => {
    render(<TmsHeader taskData={mockTaskData} />);
    expect(screen.queryByText('View All Tasks')).not.toBeInTheDocument();
  });

  it('renders the "Edit" button when showCredBtn and edit permission are present', () => {
    render(<TmsHeader showCredBtn taskData={mockTaskData} />);
    expect(screen.getByText('Edit')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Edit'));
  });

  it('renders the "Duplicate" button when showCredBtn and clone permission are present', () => {
    render(<TmsHeader showCredBtn taskData={mockTaskData} />);
    expect(screen.getByText('Duplicate')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Duplicate'));
  });
});
