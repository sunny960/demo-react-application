import CustomCheckBox from 'components/CustomCheckBox';
import CustomMultiSelect from 'components/CustomMultiSelect/CustomMultiSelect';
import { memo, useMemo } from 'react';
import { addConfig } from 'services/api/tms/addConfig';
import CustomSelect from 'shared/CustomSelect/CustomSelect';
import TMSInput from 'shared/TMSInput';
import { IQuestionAnswerManagmentProps, TaskFieldType } from '../interfaces';
import { getSelectionOptionList } from '../utils';
import NestedQuestionTypeManagement from './NestedQuestionTypeManagement';
import styles from './questionAnswer.module.scss';

const QuestionAnswerManagment = ({
  keyValue,
  tmsPanelConfig,
  questionInformation,
  questionAnswerHandler,
  selectedValues = [],
  getTmsPanelConfigData,
  havingEditPermission = false,
  allowInvalidInput = true,
  sectionQuestionList = {},
  answeredQuestionRef = {},
  taskDefinitionId,
  originalTaskLayoutResponse,
  answeredQuestionState,
  showTooltip = false,
}: IQuestionAnswerManagmentProps) => {
  const {
    fieldType = '',
    label = '',
    mandatory = false,
    editable = true,
    regex,
    addFieldAllowed,
    errorMessage,
    parentKey,
    optionValueCriteria,
    info,
  } = questionInformation || {};
  const parentFieldType = sectionQuestionList[parentKey]?.fieldType;
  const keyValueList = keyValue.split('.') || [];

  const inputChangeHandler = (value, key) => {
    questionAnswerHandler(key, value);
  };
  const selectChangeHandler = ({ value }, key = '') => {
    questionAnswerHandler(key, value);
  };
  const optionAddHandler = async (searchInputValue, key = '') => {
    const [parentFieldKey, childFieldKey] = key.split('.');
    const payload = {
      action: 'add',
      type: 'taskDefinition',
      key: childFieldKey || parentFieldKey,
      value: searchInputValue,
    };
    const res = await addConfig(payload);
    if (res === 'SUCCESS') {
      getTmsPanelConfigData();
    }
  };
  const optionList = useMemo(
    () =>
      getSelectionOptionList({
        keyValue,
        tmsPanelConfig,
        optionValueCriteria,
        originalTaskLayoutResponse,
        answeredQuestionRef: answeredQuestionRef.current,
      }),
    [answeredQuestionState, tmsPanelConfig, originalTaskLayoutResponse],
  );

  if (keyValueList.length < 3 && parentFieldType === TaskFieldType.nested) {
    return null;
  }

  switch (fieldType) {
    case TaskFieldType.nested:
      return (
        <NestedQuestionTypeManagement
          questionInformation={questionInformation}
          questionAnswerHandler={questionAnswerHandler}
          tmsPanelConfig={tmsPanelConfig}
          selectedValues={selectedValues}
          sectionQuestionList={sectionQuestionList}
          getTmsPanelConfigData={getTmsPanelConfigData}
          answeredQuestionRef={answeredQuestionRef}
          taskDefinitionId={taskDefinitionId}
          originalTaskLayoutResponse={originalTaskLayoutResponse}
          answeredQuestionState={answeredQuestionState}
        />
      );
    case TaskFieldType.multiselect:
      return (
        <CustomMultiSelect
          customClass={styles.multiSelectClass}
          id={keyValue}
          data-testid={keyValue}
          label={label || keyValue}
          options={optionList || []}
          fieldInfo={showTooltip && info}
          onDone={questionAnswerHandler}
          optionAddHandler={optionAddHandler}
          isSearchRequired={true}
          required={mandatory}
          selected={Array.isArray(selectedValues) ? selectedValues : []}
          addFieldAllowed={addFieldAllowed}
          regex={regex}
          addNewOptionText={`Add New ${label || keyValue}`}
          disabled={!havingEditPermission || !editable}
        />
      );
    case TaskFieldType.select:
      return (
        <CustomSelect
          customClass={styles.singleSelectClass}
          id={keyValue}
          data-testid={keyValue}
          label={label || keyValue}
          fieldInfo={showTooltip && info}
          options={
            (optionList &&
              optionList.length > 0 &&
              optionList.map((str) => ({
                label: str,
                value: str,
              }))) ||
            []
          }
          onChange={selectChangeHandler}
          optionAddHandler={optionAddHandler}
          required={mandatory}
          selected={selectedValues}
          addFieldAllowed={addFieldAllowed}
          isSearchRequired={true}
          regex={regex}
          addNewOptionText={`Add New ${label || keyValue}`}
          disabled={!havingEditPermission || !editable}
        />
      );
    case TaskFieldType.text:
      return (
        <TMSInput
          customClass={styles.customInputClass}
          id={keyValue}
          data-testid={keyValue}
          label={label || keyValue}
          fieldInfo={showTooltip && info}
          onChange={inputChangeHandler}
          required={mandatory}
          value={selectedValues || ''}
          allowInvalidInput={allowInvalidInput}
          regex={regex}
          errorMsg={errorMessage}
          disabled={!havingEditPermission || !editable}
        />
      );
    case TaskFieldType.boolean:
      return (
        <CustomCheckBox
          customClass={styles.customCheckBoxClass}
          id={keyValue}
          data-testid={keyValue}
          label={label || keyValue}
          fieldInfo={showTooltip && info}
          value={
            [true, 'True', 'true', 'TRUE'].includes(selectedValues) || false
          }
          disabled={!havingEditPermission || !editable}
          onChange={questionAnswerHandler}
          required={mandatory}
        />
      );
    default:
      return null;
  }
};

export default memo(QuestionAnswerManagment);
