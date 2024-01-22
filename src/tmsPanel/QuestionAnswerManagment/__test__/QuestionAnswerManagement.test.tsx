import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuestionAnswerManagment from '../index';
import { waitFor } from '@testing-library/react';

jest.mock('services/api/tms/addConfig', () => ({
  addConfig: jest.fn().mockImplementation((payload) => {
    if (payload.value === 'SpecialOption') {
      return Promise.resolve('FAILURE');
    } else {
      return Promise.resolve('SUCCESS');
    }
  }),
}));

describe('QuestionAnswerManagment', () => {
  const mockProps = {
    keyValue: 'someKey',
    tmsPanelConfig: {
      someKey: ['Option1', 'Option2'],
    },
    questionInformation: {
      fieldType: 'select',
      label: 'Select Field',
      mandatory: true,
      editable: true,
      addFieldAllowed: true,
    },
    questionAnswerHandler: jest.fn(),
    selectedValues: [],
    getTmsPanelConfigData: jest.fn(),
    havingEditPermission: true,
    allowInvalidInput: true,
  };
  const mockProps2 = {
    ...mockProps,
    keyValue: 'someKey.someOtherKey',
    tmsPanelConfig: {
      someOtherKey: ['Option1', 'Option2'],
    },
  };
  const mockProps3 = {
    ...mockProps,
    keyValue: 'someKey.someOtherKey',
    tmsPanelConfig: undefined,
  };
  const mockProps4 = {
    ...mockProps,
    keyValue: 'someKey.someOtherKey',
    tmsPanelConfig: {
      someOtherKey: false,
    },
  };

  it('renders CustomMultiSelect for fieldType multiselect ~ no label', async () => {
    const { container } = render(
      <QuestionAnswerManagment
        {...mockProps}
        questionInformation={{ fieldType: 'multiselect', label: undefined }}
      />,
    );
    expect(container).toBeDefined();
  });

  it('renders CustomMultiSelect for fieldType multiselect ~ false selectedValue', async () => {
    const { container } = render(
      <QuestionAnswerManagment
        {...mockProps}
        questionInformation={{ fieldType: 'multiselect', label: undefined }}
        selectedValues={false}
      />,
    );
    expect(container).toBeDefined();
  });

  it('renders CustomMultiSelect for fieldType multiselect', async () => {
    const { getByText } = render(
      <QuestionAnswerManagment
        {...mockProps}
        questionInformation={{
          fieldType: 'multiselect',
          label: 'MultiSelect Field',
        }}
      />,
    );
    expect(getByText('MultiSelect Field')).toBeInTheDocument();
    fireEvent.click(getByText('MultiSelect Field'));
    await waitFor(() => {
      expect(getByText('Option1')).toBeInTheDocument();
      expect(getByText('Option2')).toBeInTheDocument();
    });
    fireEvent.click(getByText('Option1'));
  });

  it('renders CustomSelect for fieldType select ~ no label', async () => {
    const { container } = render(
      <QuestionAnswerManagment
        {...mockProps}
        questionInformation={{ fieldType: 'select', label: undefined }}
      />,
    );
    expect(container).toBeDefined();
  });

  it('renders CustomSelect for fieldType select ~ with childKey', async () => {
    const { container } = render(
      <QuestionAnswerManagment
        {...mockProps2}
        questionInformation={{ fieldType: 'select', label: undefined }}
      />,
    );
    expect(container).toBeDefined();
  });

  it('renders CustomSelect for fieldType select ~ false getSelectionOptionList', async () => {
    const { container } = render(
      <QuestionAnswerManagment
        {...mockProps4}
        questionInformation={{ fieldType: 'select', label: undefined }}
      />,
    );
    expect(container).toBeDefined();
  });

  it('renders CustomSelect for fieldType select ~ no TMS panel config', async () => {
    const { container } = render(
      <QuestionAnswerManagment
        {...mockProps3}
        questionInformation={{ fieldType: 'select', label: undefined }}
      />,
    );
    expect(container).toBeDefined();
  });

  it('renders CustomSelect for fieldType select', async () => {
    const { getByText, getByTestId } = render(
      <QuestionAnswerManagment
        {...mockProps}
        questionInformation={{
          ...mockProps.questionInformation,
          fieldType: 'select',
          label: 'Select Field',
        }}
      />,
    );
    expect(getByText('Select Field *')).toBeInTheDocument();
    fireEvent.click(getByText('Select Field *'));
    await waitFor(() => {
      expect(getByText('Option1')).toBeInTheDocument();
      expect(getByText('Option2')).toBeInTheDocument();
    });
    fireEvent.click(getByText('Option1'));

    //adding new option
    fireEvent.click(getByText('Select Field *'));
    fireEvent.click(getByTestId('addNewOptionIconDiv'));
    fireEvent.change(getByTestId('singleSelectAddOptionInput'), {
      target: { value: 'Some New Option' },
    });
    fireEvent.click(getByTestId('Add New Select Field_Button'));
  });

  it('renders CustomSelect for fieldType select ~ Failure adding new option', async () => {
    const { getByText, getByTestId } = render(
      <QuestionAnswerManagment
        {...mockProps}
        questionInformation={{
          ...mockProps.questionInformation,
          fieldType: 'select',
          label: 'Select Field',
        }}
      />,
    );

    //adding new option
    fireEvent.click(getByText('Select Field *'));
    fireEvent.click(getByTestId('addNewOptionIconDiv'));
    fireEvent.change(getByTestId('singleSelectAddOptionInput'), {
      target: { value: 'SpecialOption' },
    });
    fireEvent.click(getByTestId('Add New Select Field_Button'));
  });

  it('renders TMSInput for fieldType text ~ no label', () => {
    const { container } = render(
      <QuestionAnswerManagment
        {...mockProps}
        questionInformation={{ fieldType: 'text', label: undefined }}
      />,
    );
    expect(container).toBeDefined();
  });

  it('renders TMSInput for fieldType text', () => {
    const { getByText } = render(
      <QuestionAnswerManagment
        {...mockProps}
        questionInformation={{ fieldType: 'text', label: 'Text Field' }}
        selectedValues={false}
      />,
    );
    expect(getByText('Text Field')).toBeInTheDocument();
    fireEvent.change(getByText('Text Field').parentElement.children[0], {
      target: { value: 'Some Text Field' },
    });
  });

  it('renders CustomCheckBox for fieldType boolean ~ no label', () => {
    const { container } = render(
      <QuestionAnswerManagment
        {...mockProps}
        questionInformation={{ fieldType: 'boolean', label: undefined }}
      />,
    );
    expect(container).toBeDefined();
  });

  it('renders CustomCheckBox for fieldType boolean', () => {
    const { getByText } = render(
      <QuestionAnswerManagment
        {...mockProps}
        questionInformation={{ fieldType: 'boolean', label: 'Boolean Field' }}
      />,
    );
    expect(getByText('Boolean Field')).toBeInTheDocument();
  });

  it('renders null for unknown fieldType', () => {
    const { container } = render(
      <QuestionAnswerManagment
        {...mockProps}
        questionInformation={{ fieldType: 'unknown', label: 'Unknown Field' }}
      />,
    );
    expect(container.firstChild).toBeNull();
  });

  it('renders when some props are missing', () => {
    const { container } = render(
      <QuestionAnswerManagment
        {...mockProps}
        havingEditPermission={undefined}
        allowInvalidInput={undefined}
        selectedValues={undefined}
        questionInformation={{ fieldType: undefined, label: undefined }}
      />,
    );
    expect(container.firstChild).toBeNull();
  });
});
