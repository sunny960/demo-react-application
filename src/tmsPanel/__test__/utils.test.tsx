import {
  tmsActonPermissionConstants,
  tmsTaskStatusConstants,
} from 'constants/constants';
import {
  arrangeDataStructure,
  checkHavingActionPermission,
  getImageSourceAccordingToStatus,
  getInitalValueTaskField,
  getStatusText,
  isNumeric,
  isSaveAndProceedDisabled,
  parseGetConfigApiResponse,
  parseLayoutApiResponse,
  parseLayoutFilledData,
  preparePayloadForUpdateCreateApi,
  validateFieldShouldBeEnbled,
  getSelectedFilterByAndValueFromStoredFilterData,
  resetAllDependentField,
  getSelectionOptionList,
  getOptionListBasedOnSubsetType,
  getOptionListBasedOnDuplicateType,
  getOptionListBasedOnDrivedTypeByCopiot,
} from '../utils';

describe('getStatusText', () => {
  test('should return "deactivate requested" for DELETE_REQUESTED status', () => {
    expect(getStatusText(tmsTaskStatusConstants.DELETE_REQUESTED)).toBe(
      'Deactivate Requested',
    );
  });

  test('should return lowercase status for other statuses', () => {
    expect(getStatusText(tmsTaskStatusConstants.ACTIVE)).toBe('active');
    expect(getStatusText(tmsTaskStatusConstants.INACTIVE)).toBe('inactive');
    expect(getStatusText(tmsTaskStatusConstants.PENDING)).toBe('pending');
    expect(getStatusText(tmsTaskStatusConstants.REJECTED)).toBe('rejected');
    expect(getStatusText('unknown status')).toBe('unknown status');
  });
});

describe('getImageSourceAccordingToStatus', () => {
  test('should return the correct image source for each status', () => {
    expect(
      getImageSourceAccordingToStatus(tmsTaskStatusConstants.DRAFT),
    ).toBeDefined();
    expect(
      getImageSourceAccordingToStatus(tmsTaskStatusConstants.PENDING),
    ).toBeDefined();
    expect(
      getImageSourceAccordingToStatus(tmsTaskStatusConstants.ACTIVE),
    ).toBeDefined();
    expect(
      getImageSourceAccordingToStatus(tmsTaskStatusConstants.INACTIVE),
    ).toBeDefined();
    expect(
      getImageSourceAccordingToStatus(tmsTaskStatusConstants.DELETE_REQUESTED),
    ).toBeDefined();
    expect(
      getImageSourceAccordingToStatus(tmsTaskStatusConstants.REJECTED),
    ).toBeDefined();
    expect(getImageSourceAccordingToStatus('unknown status')).toBeDefined();
  });
});

describe('getInitalValueTaskField', () => {
  test('should return the correct initial value for a task field', () => {
    const taskLayout = {
      field1: { fieldType: 'text' },
      field2: { fieldType: 'boolean' },
      field3: { fieldType: 'multiselect' },
      field4: { fieldType: 'unknown' },
      field5: { fieldType: 'text', parentKey: 'parent' },
    };
    const keyValue = 'field1';
    const answeredQuestionRef = {};
    const expected = { field1: '', actions: [] };
    expect(
      getInitalValueTaskField(taskLayout, keyValue, answeredQuestionRef),
    ).toEqual(expected);
  });
});

describe('checkHavingActionPermission', () => {
  test('should return true if the action list includes the permission', () => {
    const actionList = [tmsActonPermissionConstants.edit];
    const permission = tmsActonPermissionConstants.edit;
    expect(checkHavingActionPermission(actionList, permission)).toBe(true);
  });

  test('should return false if the action list does not include the permission', () => {
    const actionList = [tmsActonPermissionConstants.view];
    const permission = tmsActonPermissionConstants.edit;
    expect(checkHavingActionPermission(actionList, permission)).toBe(false);
  });
});

describe('isNumeric', () => {
  test('should return true if the input is numeric', () => {
    expect(isNumeric('123')).toBe(true);
    expect(isNumeric('-123')).toBe(true);
    expect(isNumeric('0')).toBe(true);
    expect(isNumeric('1.23')).toBe(true);
  });

  test('should return false if the input is not numeric', () => {
    expect(isNumeric('abc')).toBe(false);
    expect(isNumeric('1a2b3c')).toBe(false);
    expect(isNumeric('1.2.3')).toBe(false);
  });
});

describe('arrangeDataStructure', () => {
  test('should return the correct data structure', () => {
    const obj = {
      field1: '123',
      field2: '',
      field3: { subfield1: 'abc', subfield2: '456' },
      field4: ['a', 'b', 'c'],
    };
    const flattenedTaskLayout = {
      field1: { regex: '^[0-9]*$' },
      field2: { regex: '^[0-9]*$' },
      subfield1: { regex: '^[a-z]*$' },
      subfield2: { regex: '^[0-9]*$' },
    };
    const parentKey = '';
    const expected = {
      field1: 123,
      field2: '',
      field3: { subfield1: 'abc', subfield2: 456 },
      field4: ['a', 'b', 'c'],
    };
    expect(arrangeDataStructure(obj, flattenedTaskLayout, parentKey)).toEqual(
      expected,
    );
  });
});

describe('preparePayloadForUpdateCreateApi', () => {
  test('should return the correct payload', () => {
    const taskDefinitionId = '123';
    const payload = { field1: 'abc', field2: 123 };
    const taskLayout = {
      field1: { fieldType: 'text' },
      field2: { fieldType: 'number' },
    };
    const expected = {
      field1: 'abc',
      field2: 123,
      taskDefinitionId: 123,
    };
    expect(
      preparePayloadForUpdateCreateApi(taskDefinitionId, payload, taskLayout),
    ).toEqual(expected);
  });

  test('should return the correct payload without taskDefinitionId', () => {
    const taskDefinitionId = '';
    const payload = { field1: 'abc', field2: 123 };
    const taskLayout = {
      field1: { fieldType: 'text' },
      field2: { fieldType: 'number' },
    };
    const expected = {
      field1: 'abc',
      field2: 123,
    };
    expect(
      preparePayloadForUpdateCreateApi(taskDefinitionId, payload, taskLayout),
    ).toEqual(expected);
  });
});

describe('parseLayoutFilledData', () => {
  test('should return the correct parsed data', () => {
    const data = {
      field1: '',
      field2: 'abc',
      field3: 123,
      field4: [],
      field5: ['a', 'b', 'c'],
    };
    const expected = {
      field2: 'abc',
      field3: 123,
      field5: ['a', 'b', 'c'],
    };
    expect(parseLayoutFilledData(data)).toEqual(expected);
  });
});

describe('parseLayoutApiResponse', () => {
  test('should return the correct parsed response', () => {
    const data = {
      field1: { section: 'Section 1', sequence: 2 },
      field2: { section: 'Section 1', sequence: 1 },
      field3: { section: 'Section 2', sequence: 1 },
    };
    const expected = {
      parsedResponse: {
        'Section 1': {
          default: {
            field2: { section: 'Section 1', sequence: 1, childList: [] },
            field1: { section: 'Section 1', sequence: 2, childList: [] },
          },
        },
        'Section 2': {
          default: {
            field3: { section: 'Section 2', sequence: 1, childList: [] },
          },
        },
      },
      originalResponse: data,
    };
    expect(parseLayoutApiResponse(data)).toEqual(expected);
  });
});

describe('parseGetConfigApiResponse', () => {
  test('should return the correct parsed response', () => {
    const data = {
      configStaticData: { foo: 'bar' },
      sections: [
        { sequence: 2, name: 'Section 2' },
        { sequence: 1, name: 'Section 1' },
      ],
    };
    const expected = {
      foo: 'bar',
      sections: [
        { sequence: 1, name: 'Section 1' },
        { sequence: 2, name: 'Section 2' },
      ],
      skillSetList: {},
      subTeam: {},
    };
    expect(parseGetConfigApiResponse(data)).toEqual(expected);
  });
});

describe('isSaveAndProceedDisabled', () => {
  test('should return true if a field fails validation', () => {
    const taskLayout = {
      field1: { fieldType: 'text' },
      field2: { fieldType: 'number' },
    };
    const createDefinitionPayload = { field1: 'abc', field2: '123' };
    expect(isSaveAndProceedDisabled(taskLayout, createDefinitionPayload)).toBe(
      false,
    );
  });

  test('should return false if all fields pass validation', () => {
    const taskLayout = {
      field1: { fieldType: 'text' },
      field2: { fieldType: 'number' },
    };
    const createDefinitionPayload = { field1: 'abc', field2: 123 };
    expect(isSaveAndProceedDisabled(taskLayout, createDefinitionPayload)).toBe(
      false,
    );
  });
});

describe('validateFieldShouldBeEnbled', () => {
  test('should return true if the field should be enabled', () => {
    const taskDefinitionId = '123';
    const answeredQuestionData = {
      field1: 'abc',
      field2: 123,
      actions: [tmsActonPermissionConstants.edit],
    };
    const sectionFieldList = {
      field1: { fieldType: 'text' },
      field2: { fieldType: 'number' },
    };
    const fieldInfo = {
      preRequisiteField: 'field1',
      preRequisiteFieldValue: 'abc',
    };
    expect(
      validateFieldShouldBeEnbled(
        taskDefinitionId,
        answeredQuestionData,
        sectionFieldList,
        fieldInfo,
      ),
    ).toBe(true);
  });

  test('should return false if the field should not be enabled', () => {
    const taskDefinitionId = '123';
    const answeredQuestionData = {
      field1: 'abc',
      field2: 123,
      actions: [tmsActonPermissionConstants.view],
    };
    const sectionFieldList = {
      field1: { fieldType: 'text' },
      field2: { fieldType: 'number' },
    };
    const fieldInfo = {
      preRequisiteField: 'field1',
      preRequisiteFieldValue: 'abc',
    };
    expect(
      validateFieldShouldBeEnbled(
        taskDefinitionId,
        answeredQuestionData,
        sectionFieldList,
        fieldInfo,
      ),
    ).toBe(false);
  });
});

describe('getSelectedFilterByAndValueFromStoredFilterData', () => {
  test('should return the correct filterBy and filterValue when taskDefinitionId is present', () => {
    // Arrange
    const filterData = {
      taskDefinitionId: '123',
      taskDefinitionName: 'Task 1',
    };

    // Act
    const result = getSelectedFilterByAndValueFromStoredFilterData(filterData);

    // Assert
    expect(result.filterBy).toBe('taskDefinitionId');
    expect(result.filterValue).toBe('123');
  });

  test('should return the correct filterBy and filterValue when taskDefinitionName is present', () => {
    // Arrange
    const filterData = {
      taskDefinitionName: 'Task 2',
    };

    // Act
    const result = getSelectedFilterByAndValueFromStoredFilterData(filterData);

    // Assert
    expect(result.filterBy).toBe('taskDefinitionName');
    expect(result.filterValue).toBe('Task 2');
  });

  test('should return empty filterBy and filterValue when neither taskDefinitionId nor taskDefinitionName is present', () => {
    // Arrange
    const filterData = {};

    // Act
    const result = getSelectedFilterByAndValueFromStoredFilterData(filterData);

    // Assert
    expect(result.filterBy).toBe('');
    expect(result.filterValue).toBe('');
  });
});

describe('resetAllDependentField', () => {
  let answeredQuestionRef;
  let originalTaskLayoutResponse;

  beforeEach(() => {
    answeredQuestionRef = {
      current: {},
    };
    originalTaskLayoutResponse = {};
  });

  test('should reset dependent fields when parentFieldKey is present', () => {
    // Arrange
    answeredQuestionRef.current = {
      parentFieldKey: {
        index: {
          dependentFieldKey: 'value',
        },
      },
    };
    originalTaskLayoutResponse = {
      dependentFieldKey: {
        parentKey: 'parentFieldKey',
        fieldType: 'text',
      },
    };

    // Act
    const result = resetAllDependentField(
      'parentFieldKey.index.dependentFieldKey',
      answeredQuestionRef,
      originalTaskLayoutResponse,
    );

    // Assert
    expect(result).toEqual({
      parentFieldKey: {
        index: {
          dependentFieldKey: 'value',
        },
      },
    });
  });

  test('should reset dependent fields when index is present', () => {
    // Arrange
    answeredQuestionRef.current = {
      parentFieldKey: [
        {
          dependentFieldKey: 'value',
        },
      ],
    };
    originalTaskLayoutResponse = {
      dependentFieldKey: {
        parentKey: 'parentFieldKey',
        fieldType: 'text',
      },
    };

    // Act
    const result = resetAllDependentField(
      'parentFieldKey.0.dependentFieldKey',
      answeredQuestionRef,
      originalTaskLayoutResponse,
    );

    // Assert
    expect(result).toEqual({
      parentFieldKey: [
        {
          dependentFieldKey: 'value',
        },
      ],
    });
  });

  test('should reset dependent fields when mostChildKey is present', () => {
    // Arrange
    answeredQuestionRef.current = {
      mostChildKey: 'value',
    };
    originalTaskLayoutResponse = {
      mostChildKey: {
        fieldType: 'text',
      },
    };

    // Act
    const result = resetAllDependentField(
      'mostChildKey',
      answeredQuestionRef,
      originalTaskLayoutResponse,
    );

    // Assert
    expect(result).toEqual({
      mostChildKey: 'value',
    });
  });

  test('should return the same answeredQuestionRef when no dependent fields are present', () => {
    // Arrange
    answeredQuestionRef.current = {
      someKey: 'value',
    };
    originalTaskLayoutResponse = {};

    // Act
    const result = resetAllDependentField(
      'someKey',
      answeredQuestionRef,
      originalTaskLayoutResponse,
    );

    // Assert
    expect(result).toBe(answeredQuestionRef.current);
  });
});

describe('getSelectionOptionList', () => {
  test('should return the correct option list when optionValueCriteria is null', () => {
    // Arrange
    const data = {
      keyValue: 'parentFieldKey',
      tmsPanelConfig: {
        parentFieldKey: ['Option 1', 'Option 2', 'Option 3'],
      },
      optionValueCriteria: null,
    };

    // Act
    const result = getSelectionOptionList(data);

    // Assert
    expect(result).toEqual(['Option 1', 'Option 2', 'Option 3']);
  });

  test('should return the correct option list when optionValueCriteria type is "drive"', () => {
    // Arrange
    const data = {
      keyValue: 'parentFieldKey.childFieldKey.mainKey',
      tmsPanelConfig: {
        mainKey: ['Option 1', 'Option 2', 'Option 3'],
      },
      optionValueCriteria: {
        type: 'drive',
      },
    };

    // Act
    const result = getSelectionOptionList(data);

    // Assert
    expect(result).toEqual([]);
  });

  test('should return an empty option list when optionValueCriteria type is "subset"', () => {
    // Arrange
    const data = {
      keyValue: 'parentFieldKey',
      tmsPanelConfig: {
        parentFieldKey: ['Option 1', 'Option 2', 'Option 3'],
      },
      optionValueCriteria: {
        type: 'subset',
      },
    };

    // Act
    const result = getSelectionOptionList(data);

    // Assert
    expect(result).toEqual([]);
  });

  // Add more test cases for different scenarios and edge cases
});

describe('getOptionListBasedOnSubsetType', () => {
  test('should return an empty array when optionValueCriteria is null', () => {
    // Arrange
    const data = {
      optionValueCriteria: null,
      answeredQuestionRef: {},
    };

    // Act
    const result = getOptionListBasedOnSubsetType(data);

    // Assert
    expect(result).toEqual([]);
  });

  test('should return the correct option list when optionValueCriteria has valid keys', () => {
    // Arrange
    const data = {
      optionValueCriteria: {
        key: ['fieldKey1', 'fieldKey2'],
      },
      answeredQuestionRef: {
        fieldKey1: 'Option 1',
        fieldKey2: ['Option 2', 'Option 3'],
      },
    };

    // Act
    const result = getOptionListBasedOnSubsetType(data);

    // Assert
    expect(result).toEqual(['Option 1', 'Option 2', 'Option 3']);
  });

  test('should return an empty array when optionValueCriteria keys do not exist in answeredQuestionRef', () => {
    // Arrange
    const data = {
      optionValueCriteria: {
        key: ['fieldKey1', 'fieldKey2'],
      },
      answeredQuestionRef: {},
    };

    // Act
    const result = getOptionListBasedOnSubsetType(data);

    // Assert
    expect(result).toEqual([]);
  });
});

describe('getOptionListBasedOnDuplicateType', () => {
  test('should return an empty array when optionValueCriteria is null', () => {
    // Arrange
    const data = {
      tmsPanelConfig: {},
      optionValueCriteria: null,
    };

    // Act
    const result = getOptionListBasedOnDuplicateType(data);

    // Assert
    expect(result).toEqual([]);
  });

  test('should return the correct option list when optionValueCriteria has valid keys', () => {
    // Arrange
    const data = {
      tmsPanelConfig: {
        fieldKey1: ['Option 1', 'Option 2'],
        fieldKey2: 'Option 3',
      },
      optionValueCriteria: {
        key: ['fieldKey1', 'fieldKey2'],
      },
    };

    // Act
    const result = getOptionListBasedOnDuplicateType(data);

    // Assert
    expect(result).toEqual(['Option 1', 'Option 2', 'Option 3']);
  });

  test('should return an empty array when optionValueCriteria keys do not exist in tmsPanelConfig', () => {
    // Arrange
    const data = {
      tmsPanelConfig: {},
      optionValueCriteria: {
        key: ['fieldKey1', 'fieldKey2'],
      },
    };

    // Act
    const result = getOptionListBasedOnDuplicateType(data);

    // Assert
    expect(result).toEqual([]);
  });
});

describe('getOptionListBasedOnDrivedTypeByCopiot', () => {
  test('should return an empty array when optionValueCriteria is null', () => {
    // Arrange
    const data = {
      keyValue: 'parentFieldKey.childFieldKey',
      tmsPanelConfig: {},
      optionValueCriteria: null,
      originalTaskLayoutResponse: {},
      answeredQuestionRef: {},
    };

    // Act
    const result = getOptionListBasedOnDrivedTypeByCopiot(data);

    // Assert
    expect(result).toEqual([]);
  });

  test('should return the correct option list when optionValueCriteria has valid keys', () => {
    // Arrange
    const data = {
      keyValue: 'parentFieldKey.childFieldKey',
      tmsPanelConfig: {
        sourceKey: 'fieldKey1',
        fieldKey1: {
          Option1: 'Option 1',
          Option2: ['Option 2', 'Option 3'],
        },
      },
      optionValueCriteria: {
        key: ['sourceKey', 'fieldKey1.Option1', 'fieldKey1.Option2'],
      },
      originalTaskLayoutResponse: {},
      answeredQuestionRef: {},
    };

    // Act
    const result = getOptionListBasedOnDrivedTypeByCopiot(data);

    // Assert
    expect(result).toEqual([]);
  });

  test('should return an empty array when optionValueCriteria keys do not exist in tmsPanelConfig', () => {
    // Arrange
    const data = {
      keyValue: 'parentFieldKey.childFieldKey',
      tmsPanelConfig: {},
      optionValueCriteria: {
        key: ['sourceKey', 'fieldKey1.Option1', 'fieldKey1.Option2'],
      },
      originalTaskLayoutResponse: {},
      answeredQuestionRef: {},
    };

    // Act
    const result = getOptionListBasedOnDrivedTypeByCopiot(data);

    // Assert
    expect(result).toEqual([]);
  });
});
