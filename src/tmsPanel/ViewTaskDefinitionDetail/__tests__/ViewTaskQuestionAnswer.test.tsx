import { render, screen } from '@testing-library/react';
import { TaskFieldType } from 'modules/tmsPanel/interfaces';
import ViewTaskQuestionAnswer from '../ViewTaskQuestionAnswer';

describe('ViewTaskQuestionAnswer', () => {
  const props = {
    question: 'Test Question',
    answer: 'Test Answer',
    keyValue: 'test.key',
    childList: [],
    answeredQuestionResponse: {},
    originalTaskLayoutResponse: {},
    classCssForQuestion: '',
  };

  it('renders question and answer correctly', () => {
    render(<ViewTaskQuestionAnswer {...props} />);
    const questionElement = screen.getByText('Test Question');
    const answerElement = screen.getByText('Test Answer');
    expect(questionElement).toBeInTheDocument();
    expect(answerElement).toBeInTheDocument();
  });

  it('renders "-" when answer is not provided', () => {
    const propsWithoutAnswer = { ...props, answer: undefined };
    render(<ViewTaskQuestionAnswer {...propsWithoutAnswer} />);
    const answerElement = screen.getByText('-');
    expect(answerElement).toBeInTheDocument();
  });
  it('renders when answer is Array of string provided', () => {
    const propsWithAnswer = { ...props, answer: ['test'] };
    render(<ViewTaskQuestionAnswer {...propsWithAnswer} />);
    const answerElement = screen.getByText('test');
    expect(answerElement).toBeInTheDocument();
  });

  it('renders when answer is true boolean value provided', () => {
    const propsWithAnswer = {
      ...props,
      keyValue: 'testing',
      originalTaskLayoutResponse: {
        testing: { fieldType: TaskFieldType.boolean },
      },
      answer: true,
    };
    render(<ViewTaskQuestionAnswer {...propsWithAnswer} />);
    const answerElement = screen.getByText('Yes');
    expect(answerElement).toBeInTheDocument();
  });
  it('renders when answer is false boolean value provided', () => {
    const propsWithAnswer = {
      ...props,
      keyValue: 'testing',
      originalTaskLayoutResponse: {
        testing: { fieldType: TaskFieldType.boolean },
      },
      answer: false,
    };
    render(<ViewTaskQuestionAnswer {...propsWithAnswer} />);
    const answerElement = screen.getByText('No');
    expect(answerElement).toBeInTheDocument();
  });
  it('renders when answer is string value provided', () => {
    const propsWithAnswer = { ...props, answer: 'test' };
    render(<ViewTaskQuestionAnswer {...propsWithAnswer} />);
    const answerElement = screen.getByText('test');
    expect(answerElement).toBeInTheDocument();
  });
  it('renders nested question and answer correctly', () => {
    const propsWithNested = {
      ...props,
      fieldType: 'nested',
      childList: [
        { parentKey: 'test.key', keyName: 'nestedKey', label: 'Nested Label' },
      ],
      answeredQuestionResponse: {
        'test.key': { nestedKey: 'Nested Answer' },
      },
      originalTaskLayoutResponse: {
        'test.key': { fieldType: TaskFieldType.nested },
      },
    };
    render(<ViewTaskQuestionAnswer {...propsWithNested} />);
    const nestedQuestionElement = screen.getByText('Nested Label -');
    const nestedAnswerElement = screen.getByText('Nested Answer');
    expect(nestedQuestionElement).toBeInTheDocument();
    expect(nestedAnswerElement).toBeInTheDocument();
  });
});
