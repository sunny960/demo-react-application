import {
  tmsActonPermissionConstants,
  tmsTaskStatusConstants,
} from 'constants/constants';
import activeIcon from 'images/active.svg';
import deActivateRequestIcon from 'images/deActivateRequest.svg';
import inActiveIcon from 'images/inActive.svg';
import pendingIcon from 'images/pending.svg';
import rejectedIcon from 'images/rejected.svg';
import { flattenObject, isEmpty, isValueFailingRegex } from 'utils/utility';
import { TaskFieldType } from './interfaces';

export const getStatusText = (status = '') => {
  if (status === tmsTaskStatusConstants.DELETE_REQUESTED) {
    return 'Deactivate Requested';
  } else {
    return status.toLowerCase();
  }
};

export const getImageSourceAccordingToStatus = (status = '') => {
  switch (status) {
    case tmsTaskStatusConstants.DRAFT:
    case tmsTaskStatusConstants.PENDING:
      return pendingIcon;
    case tmsTaskStatusConstants.ACTIVE:
      return activeIcon;
    case tmsTaskStatusConstants.INACTIVE:
      return inActiveIcon;
    case tmsTaskStatusConstants.DELETE_REQUESTED:
      return deActivateRequestIcon;
    case tmsTaskStatusConstants.REJECTED:
      return rejectedIcon;
    default:
      return pendingIcon;
  }
};

export const getDefaultValue = (fieldType = '') => {
  switch (fieldType) {
    case TaskFieldType.boolean.toString():
      return false;
    case TaskFieldType.multiselect.toString():
      return [];
    case TaskFieldType.nested.toString():
      return undefined;
    default:
      return '';
  }
};

export const getInitalValueTaskField = (
  taskLayout = {},
  keyValue = '',
  answeredQuestionRef = { actions: [] },
) => {
  const parentKey = taskLayout[keyValue]?.parentKey || '';
  let { actions = [], ...answeredQuestionRefValue } = answeredQuestionRef || {};
  actions = actions || [];
  const { fieldType: parentFieldType = '' } = taskLayout[parentKey] || {};

  if (parentKey && parentFieldType !== TaskFieldType.nested.toString()) {
    const parentKeyData = {
      ...answeredQuestionRefValue[`${parentKey}`],
      [keyValue]:
        answeredQuestionRefValue[`${parentKey}`]?.[keyValue] ||
        getDefaultValue(taskLayout[keyValue]?.fieldType),
    };
    answeredQuestionRefValue = {
      ...answeredQuestionRefValue,
      [`${parentKey}`]: parentKeyData,
    };
  } else {
    if (
      isEmpty(answeredQuestionRefValue[keyValue]) &&
      parentFieldType !== TaskFieldType.nested.toString()
    ) {
      if (taskLayout[keyValue]?.fieldType === TaskFieldType.nested.toString()) {
        const data = taskLayout[keyValue]?.childFieldSet?.reduce(
          (acc, fieldName) => {
            acc[fieldName] = getDefaultValue(taskLayout[fieldName]?.fieldType);
            return acc;
          },
          {},
        );
        answeredQuestionRefValue = {
          ...answeredQuestionRefValue,
          [keyValue]: [data],
        };
      } else {
        answeredQuestionRefValue = {
          ...answeredQuestionRefValue,
          [keyValue]: getDefaultValue(taskLayout[keyValue]?.fieldType),
        };
      }
    }
  }

  return { ...answeredQuestionRefValue, actions };
};

export const checkHavingActionPermission = (
  actionList = [],
  permision = '',
) => {
  return actionList.includes(permision);
};

export const isNumeric = (str) => {
  return !(isNaN(str) || isNaN(parseFloat(str)));
};

export const arrangeDataStructure = (
  obj,
  flattenedTaskLayout,
  parentKey = '',
) => {
  if (typeof obj === 'string' && obj.trim() !== '') {
    const checkAndGetNumber = () =>
      isNumeric(obj.trim()) ? Number(obj.trim()) : obj;
    return isValueFailingRegex('a', flattenedTaskLayout[parentKey]?.regex)
      ? checkAndGetNumber()
      : obj;
  } else if (Array.isArray(obj)) {
    return obj;
  } else if (typeof obj === 'object') {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        obj[key] = arrangeDataStructure(obj[key], flattenedTaskLayout, key);
      }
    }
  }
  return obj;
};

export const preparePayloadForUpdateCreateApi = (
  taskDefinitionId,
  payload,
  taskLayout,
) => {
  const flattenedLayout = flattenObject(structuredClone(taskLayout), 1);
  const { actions = [], ...rest } = payload || {};
  const updatedStructure = arrangeDataStructure(rest, flattenedLayout);
  if (taskDefinitionId) {
    return {
      ...updatedStructure,
      taskDefinitionId: Number(taskDefinitionId),
    };
  }
  return { ...updatedStructure };
};

export const parseLayoutFilledData = (data = {}) => {
  return Object.entries(data)
    .filter(
      ([key, value]) =>
        (Array.isArray(value) && value.length > 0) ||
        (typeof value === 'string' && !!value.trim()) ||
        typeof value === 'number' ||
        typeof value === 'boolean',
    )
    .reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {});
};

const getChildDetails = (taskLayout = {}, keyValue = '') => {
  const childList = [];
  Object.keys(taskLayout).forEach((keyName) => {
    const {
      preRequisiteField = '',
      parentKey,
      label,
    } = taskLayout[keyName] || {};
    if (preRequisiteField === keyValue) {
      childList.push({ parentKey, keyName, label });
    }
  });
  return childList;
};

const createSortedObject = (sortedSection = []) => {
  return sortedSection.reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
};

export const parseLayoutApiResponse = (data = {}) => {
  const parsedApiResponse = {};
  Object.keys(data).forEach((keyValue) => {
    const item = data[keyValue];
    if (item && Object.keys(item).length > 0) {
      const { section = '' } = item;
      let { subSection = 'default' } = item;
      subSection = subSection || 'default';
      if (
        parsedApiResponse[`${section}`] &&
        parsedApiResponse[`${section}`][`${subSection}`] &&
        Object.keys(parsedApiResponse[`${section}`]).length > 0 &&
        Object.keys(parsedApiResponse[`${section}`][`${subSection}`]).length > 0
      ) {
        parsedApiResponse[`${section}`][`${subSection}`] = {
          ...parsedApiResponse[`${section}`][`${subSection}`],
          [keyValue]: { ...item, childList: getChildDetails(data, keyValue) },
        };
      } else if (
        parsedApiResponse[`${section}`] &&
        Object.keys(parsedApiResponse[`${section}`]).length > 0 &&
        !parsedApiResponse[`${section}`][`${subSection}`]
      ) {
        parsedApiResponse[`${section}`][`${subSection}`] = {
          [keyValue]: { ...item, childList: getChildDetails(data, keyValue) },
        };
      } else {
        parsedApiResponse[`${section}`] = {
          [`${subSection}`]: {
            [keyValue]: { ...item, childList: getChildDetails(data, keyValue) },
          },
        };
      }
    }
  });

  let sortedParsedDataResponse = {};
  Object.keys(parsedApiResponse).forEach((sectionKey) => {
    const sortedArray = Object.entries(parsedApiResponse[sectionKey]).map(
      ([subSectionKey, sectionValue]) => {
        const sortedSection = [
          ...Object.entries(sectionValue).sort(
            ([, a], [, b]) => a.sequence - b.sequence,
          ),
        ];
        return [subSectionKey, createSortedObject(sortedSection)];
      },
    );
    sortedParsedDataResponse = {
      ...sortedParsedDataResponse,
      [sectionKey]: createSortedObject(sortedArray),
    };
  });
  return {
    parsedResponse: sortedParsedDataResponse,
    originalResponse: data,
  };
};

export const parseGetConfigApiResponse = (data) => {
  const {
    configStaticData = {},
    sections = [],
    skillSetList = {},
    subTeam = {},
  } = data || {};

  return {
    ...configStaticData,
    skillSetList,
    subTeam,
    sections: sections.sort((a, b) => a.sequence - b.sequence),
  };
};

const checkValue = (valueToBeChecked, regex, mandatory) => {
  if (isValueFailingRegex(valueToBeChecked, regex)) {
    return true;
  }
  if (mandatory && isEmpty(valueToBeChecked)) {
    return true;
  }
  return false;
};
const checkNestedValue = (
  parentValue,
  taskLayoutGrandChildKey,
  regex,
  mandatory,
) => {
  const valueToBeChecked = parentValue?.[taskLayoutGrandChildKey];
  return checkValue(valueToBeChecked, regex, mandatory);
};

const checkArrayNestedValue = (
  parentValue,
  taskLayoutGrandChildKey,
  regex,
  mandatory,
) => {
  return parentValue.some((valueToBeChecked) =>
    checkValue(valueToBeChecked[taskLayoutGrandChildKey], regex, mandatory),
  );
};
export const isSaveAndProceedDisabled = (
  taskLayout,
  createDefinitionPayload,
) => {
  const taskLayoutKeys = taskLayout ? Object.keys(taskLayout) : [];

  for (const taskLayoutKey of taskLayoutKeys) {
    const taskLayoutChildKeys = taskLayout[taskLayoutKey]
      ? Object.keys(taskLayout[taskLayoutKey])
      : [];

    for (const taskLayoutChildKey of taskLayoutChildKeys) {
      const taskLayoutGrandChildKeys = taskLayout[taskLayoutKey][
        taskLayoutChildKey
      ]
        ? Object.keys(taskLayout[taskLayoutKey][taskLayoutChildKey])
        : [];

      for (const taskLayoutGrandChildKey of taskLayoutGrandChildKeys) {
        const taskLayoutGrandChild =
          taskLayout[taskLayoutKey][taskLayoutChildKey][
            taskLayoutGrandChildKey
          ] || {};
        const { regex, mandatory, parentKey } = taskLayoutGrandChild;

        if (parentKey) {
          const parentFieldType =
            taskLayout[taskLayoutKey][taskLayoutChildKey][parentKey]?.fieldType;
          const parentValue = createDefinitionPayload[parentKey];

          if (
            parentFieldType === TaskFieldType.nested &&
            Array.isArray(parentValue)
          ) {
            const isDisabled = checkArrayNestedValue(
              parentValue,
              taskLayoutGrandChildKey,
              regex,
              mandatory,
            );

            if (isDisabled) {
              return true;
            }
          } else {
            if (
              checkNestedValue(
                parentValue,
                taskLayoutGrandChildKey,
                regex,
                mandatory,
              )
            ) {
              return true;
            }
          }
        } else {
          const valueToBeChecked =
            createDefinitionPayload[taskLayoutGrandChildKey];
          if (checkValue(valueToBeChecked, regex, mandatory)) {
            return true;
          }
        }
      }
    }
  }

  return false;
};

export const validateFieldShouldBeEnbled = (
  taskDefinitionId: string | number,
  answeredQuestionData = { actions: [] },
  sectionFieldList = {},
  fieldInfo: any = { preRequisiteField: '', preRequisiteFieldValue: '' },
) => {
  const { actions = [] } = answeredQuestionData || {};
  const { preRequisiteField = '', preRequisiteFieldValue = '' } =
    fieldInfo || {};
  const { fieldType = '', parentKey = '' } =
    sectionFieldList[preRequisiteField] || {};
  const selectedPreRequisiteFieldValue = parentKey
    ? answeredQuestionData[parentKey][preRequisiteField] || null
    : answeredQuestionData[preRequisiteField] || null;

  const isPreRequisiteFieldMatch =
    !isEmpty(selectedPreRequisiteFieldValue) &&
    !isValueFailingRegex(
      selectedPreRequisiteFieldValue?.toString(),
      preRequisiteFieldValue,
    );
  const preRequisiteFieldCondition = preRequisiteField
    ? isPreRequisiteFieldMatch
    : true;
  return taskDefinitionId
    ? checkHavingActionPermission(actions, tmsActonPermissionConstants.edit) &&
        preRequisiteFieldCondition
    : preRequisiteFieldCondition;
};

export const isKeyIncludeDotOrNot = (key = '') => key.split('.').length > 1;

export const checkTypeOfValueNumberOrString = (value) =>
  typeof value === 'string' || typeof value === 'number';

export const getOptionListBasedOnDrivedTypeByCopiot = ({
  keyValue = '',
  tmsPanelConfig = {},
  optionValueCriteria = null,
  originalTaskLayoutResponse = {},
  answeredQuestionRef = {},
}) => {
  const [, keyIndex] = keyValue.split('.');
  const { sourceKey, key = [] } = optionValueCriteria || {};
  let sourceKeyData = tmsPanelConfig[sourceKey] || {};
  const finalOptionList = [];

  const getFieldKeyReferenceValue = (fieldKeyReference) => {
    const parentkey = originalTaskLayoutResponse[fieldKeyReference]?.parentKey;
    if (parentkey in originalTaskLayoutResponse) {
      const parentField = originalTaskLayoutResponse[parentkey];
      const fieldType = parentField.fieldType;
      if (fieldType === 'nested') {
        return answeredQuestionRef[parentkey]?.[keyIndex]?.[fieldKeyReference];
      } else {
        return answeredQuestionRef[parentkey]?.[fieldKeyReference];
      }
    } else {
      return answeredQuestionRef[fieldKeyReference];
    }
  };

  const processFieldKeyReferenceValue = (fieldKeyReferenceValue) => {
    if (checkTypeOfValueNumberOrString(fieldKeyReferenceValue)) {
      const sourceKeyValue = sourceKeyData[fieldKeyReferenceValue];

      if (checkTypeOfValueNumberOrString(sourceKeyValue)) {
        finalOptionList.push(sourceKeyValue);
      } else if (Array.isArray(sourceKeyValue)) {
        finalOptionList.push(...sourceKeyValue);
      } else if (typeof sourceKeyValue === 'object') {
        sourceKeyData = sourceKeyValue;
      }
    } else if (Array.isArray(fieldKeyReferenceValue)) {
      fieldKeyReferenceValue.forEach((element) => {
        if (checkTypeOfValueNumberOrString(element)) {
          const sourceKeyValue = sourceKeyData[element];

          if (checkTypeOfValueNumberOrString(sourceKeyValue)) {
            finalOptionList.push(sourceKeyValue);
          } else if (Array.isArray(sourceKeyValue)) {
            finalOptionList.push(...sourceKeyValue);
          } else if (typeof sourceKeyValue === 'object') {
            sourceKeyData = sourceKeyValue;
          }
        }
      });
    }
  };

  key.forEach((fieldKeyReference) => {
    if (isKeyIncludeDotOrNot(fieldKeyReference)) {
      const keyList = fieldKeyReference.split('.');
      keyList.forEach((fieldKeyReference) => {
        const fieldKeyReferenceValue =
          getFieldKeyReferenceValue(fieldKeyReference);
        processFieldKeyReferenceValue(fieldKeyReferenceValue);
      });
    } else {
      const fieldKeyReferenceValue =
        getFieldKeyReferenceValue(fieldKeyReference);
      processFieldKeyReferenceValue(fieldKeyReferenceValue);
    }
  });

  const uniqueSet = new Set(finalOptionList);
  const uniqueOptions = Array.from(uniqueSet);
  return uniqueOptions;
};

export const getOptionListBasedOnDuplicateType = ({
  tmsPanelConfig = {},
  optionValueCriteria = null,
}) => {
  const { sourceKey, key = [] } = optionValueCriteria || {};
  const sourceKeyData = sourceKey
    ? tmsPanelConfig[sourceKey] || {}
    : tmsPanelConfig;
  let finalOptionList = [];

  key.forEach((fieldKeyReference: string) => {
    const selectedValue = sourceKeyData[fieldKeyReference];
    if (Array.isArray(selectedValue)) {
      finalOptionList = [
        ...finalOptionList,
        ...sourceKeyData[fieldKeyReference],
      ];
    } else
      finalOptionList = [...finalOptionList, sourceKeyData[fieldKeyReference]];
  });
  return finalOptionList;
};

export const getOptionListBasedOnSubsetType = ({
  optionValueCriteria = null,
  answeredQuestionRef = {},
}) => {
  const { key = [] } = optionValueCriteria || {};
  let finalOptionList = [];

  key.forEach((fieldKeyReference: string) => {
    const selectedValue = answeredQuestionRef[fieldKeyReference];
    if (Array.isArray(selectedValue)) {
      finalOptionList = [
        ...finalOptionList,
        ...answeredQuestionRef[fieldKeyReference],
      ];
    } else
      finalOptionList = [
        ...finalOptionList,
        answeredQuestionRef[fieldKeyReference],
      ];
  });
  return finalOptionList;
};

export const getSelectionOptionList = (data: any) => {
  const {
    keyValue = '',
    tmsPanelConfig = {},
    optionValueCriteria = null,
  } = data || {};
  if (!optionValueCriteria) {
    const [parentFieldKey, childFieldKey, mainKey] = keyValue.split('.');
    if (!tmsPanelConfig) {
      return [];
    }
    const resultedKey = mainKey || childFieldKey;
    return childFieldKey
      ? tmsPanelConfig[resultedKey]
      : tmsPanelConfig[parentFieldKey];
  }
  const { type } = optionValueCriteria;

  switch (type) {
    case 'drive':
      return getOptionListBasedOnDrivedTypeByCopiot(data);
    case 'duplicate':
      return getOptionListBasedOnDuplicateType(data);
    case 'subset':
      return getOptionListBasedOnSubsetType(data);
  }

  return [];
};

export const resetAllDependentField = (
  keyValue,
  answeredQuestionRef,
  originalTaskLayoutResponse = {},
) => {
  const [parentFieldKey, index, mostChildKey] = keyValue.split('.');
  const mainKey = mostChildKey ? mostChildKey : index || parentFieldKey;
  const dependentFieldList =
    originalTaskLayoutResponse[mainKey]?.dependents || [];
  dependentFieldList.forEach((dependentFieldKey) => {
    const parentKeyOFDependentField =
      originalTaskLayoutResponse[dependentFieldKey]?.parentKey;
    if (parentKeyOFDependentField) {
      if (index) {
        answeredQuestionRef.current[parentKeyOFDependentField][index][
          dependentFieldKey
        ] = getDefaultValue(
          originalTaskLayoutResponse[dependentFieldKey]?.fieldType,
        );
      } else {
        answeredQuestionRef.current[parentKeyOFDependentField][
          dependentFieldKey
        ] = getDefaultValue(
          originalTaskLayoutResponse[dependentFieldKey]?.fieldType,
        );
      }
    } else {
      answeredQuestionRef.current[dependentFieldKey] = getDefaultValue(
        originalTaskLayoutResponse[dependentFieldKey]?.fieldType,
      );
    }
  });

  return answeredQuestionRef.current;
};

export const getSelectedFilterByAndValueFromStoredFilterData = (
  filterData = {},
) => {
  const keysList = Object.keys(filterData);
  const filterBy =
    (keysList.includes('taskDefinitionId') && 'taskDefinitionId') ||
    (keysList.includes('taskDefinitionName') && 'taskDefinitionName') ||
    '';
  return { filterBy, filterValue: filterData[filterBy] || '' };
};
