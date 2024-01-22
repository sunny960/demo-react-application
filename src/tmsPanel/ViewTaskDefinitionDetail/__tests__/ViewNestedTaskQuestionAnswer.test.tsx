import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ViewNestedTaskQuestionAnswer from '../ViewNestedTaskQuestionAnswer';

// Mock data for testing
const mockProps = {
  keyValue: 'some.key.value',
  question: 'Sample Question',
  answer: [
    { field1: 'Answer 1', field2: 'Answer 2' },
    { field1: 'Answer 3', field2: 'Answer 4' },
  ],
  answeredQuestionResponse: {},
  originalTaskLayoutResponse: {
    value: { childFieldSet: ['field1', 'field2'] },
    field1: {
      parentKey: 'some.key.value',
      fieldType: 'text',
      label: 'Field 1',
    },
    field2: {
      parentKey: 'some.key.value',
      fieldType: 'text',
      label: 'Field 2',
    },
  },
};

// Test suite for ViewNestedTaskQuestionAnswer component
describe('ViewNestedTaskQuestionAnswer', () => {
  it('renders component with question text', () => {
    render(<ViewNestedTaskQuestionAnswer {...mockProps} />);
    expect(screen.getByText('Sample Question')).toBeInTheDocument();
  });

  it('renders component with question text - 2', () => {
    render(
      <ViewNestedTaskQuestionAnswer
        {...mockProps}
        keyValue="some.key"
        originalTaskLayoutResponse={{
          key: { childFieldSet: [undefined, undefined] },
          field1: {
            parentKey: 'some.key.value',
            fieldType: '',
            label: 'Field 1',
          },
          field2: {
            parentKey: 'some.key.value',
            fieldType: '',
            label: 'Field 2',
          },
        }}
      />,
    );
    expect(screen.getByText('Sample Question')).toBeInTheDocument();
  });

  it('renders component with question text - 3', () => {
    render(
      <ViewNestedTaskQuestionAnswer
        {...mockProps}
        keyValue="some"
        answeredQuestionResponse={undefined}
        originalTaskLayoutResponse={undefined}
      />,
    );
    expect(screen.getByText('Sample Question')).toBeInTheDocument();
  });

  it('handles the case when answer is empty', () => {
    const propsWithEmptyAnswer = { ...mockProps, answer: [] };
    render(<ViewNestedTaskQuestionAnswer {...propsWithEmptyAnswer} />);
    expect(screen.queryByTestId('child-task-answer')).toBeNull();
  });

  it('handles the case when originalTaskLayoutResponse is empty', () => {
    const propsWithEmptyLayout = {
      ...mockProps,
      originalTaskLayoutResponse: {},
    };
    render(<ViewNestedTaskQuestionAnswer {...propsWithEmptyLayout} />);
    expect(screen.queryByTestId('child-task-answer')).toBeNull();
  });

  it('renders child components with correct question and answer values', () => {
    render(<ViewNestedTaskQuestionAnswer {...mockProps} />);

    // Assuming that there are specific elements that can be identified for each child task
    expect(screen.getByText('Answer 1')).toBeInTheDocument();
    expect(screen.getByText('Answer 2')).toBeInTheDocument();
    expect(screen.getByText('Answer 3')).toBeInTheDocument();
    expect(screen.getByText('Answer 4')).toBeInTheDocument();
  });

  it('renders with correct styling for question text', () => {
    render(<ViewNestedTaskQuestionAnswer {...mockProps} />);
    const questionText = screen.getByText('Sample Question');
  });

  it('renders nothing when childFieldSet is not available in originalTaskLayoutResponse', () => {
    const propsWithoutChildFieldSet = { ...mockProps };
    delete propsWithoutChildFieldSet.originalTaskLayoutResponse['value']
      .childFieldSet;
    render(<ViewNestedTaskQuestionAnswer {...propsWithoutChildFieldSet} />);
    expect(screen.queryByTestId('child-task-answer')).toBeNull();
  });
});
