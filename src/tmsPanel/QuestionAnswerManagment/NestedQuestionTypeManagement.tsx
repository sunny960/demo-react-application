import ImageComponent from 'components/ImageComponent';
import addIcon from 'images/add.svg';
import removeIcon from 'images/delete.svg';
import { useCallback } from 'react';
import CustomButton from 'shared/CustomButton/CustomButton';
import { elementTypeEnum } from 'utils/enums';
import QuestionAnswerManagment from '.';
import styles from '../CreateTaskDefinition/createTaskDefinition.module.scss';
import {
  INestedQuestionAnswerManagmentProps,
  TaskFieldType,
} from '../interfaces';
import {
  getDefaultValue,
  resetAllDependentField,
  validateFieldShouldBeEnbled,
} from '../utils';

const NestedQuestionTypeManagement = ({
  questionInformation = {},
  sectionQuestionList = {},
  getTmsPanelConfigData,
  tmsPanelConfig,
  questionAnswerHandler,
  answeredQuestionRef,
  selectedValues = [],
  taskDefinitionId,
  originalTaskLayoutResponse,
  answeredQuestionState,
}: INestedQuestionAnswerManagmentProps) => {
  const { childFieldSet = [] } = questionInformation;

  const answerHandler = useCallback(
    (key: string, values: any) => {
      const [parentFieldKey, index, childFieldKey] = key.split('.');
      answeredQuestionRef.current = resetAllDependentField(
        key,
        answeredQuestionRef,
        originalTaskLayoutResponse,
      );
      if (!childFieldKey) return questionAnswerHandler(key, values);

      const currentValues =
        [...answeredQuestionRef.current[parentFieldKey]] || [];
      currentValues[index][childFieldKey] = values;
      questionAnswerHandler(parentFieldKey, currentValues);
    },
    [questionAnswerHandler, answeredQuestionState],
  );
  const removeHandler = useCallback(
    (index) => {
      const { parentKey } = sectionQuestionList[childFieldSet[0]] || {};
      const currentValues = [...answeredQuestionRef.current[parentKey]] || [];
      currentValues.splice(index, 1);
      questionAnswerHandler(parentKey, currentValues);
    },
    [questionAnswerHandler, answeredQuestionState],
  );

  const addHandler = useCallback(() => {
    const { parentKey } = sectionQuestionList[childFieldSet[0]] || {};
    const currentValues = [...answeredQuestionRef.current[parentKey]] || [];
    const lastDataObj = currentValues[currentValues.length - 1] || {};
    const newObject = {};
    Object.keys(lastDataObj).forEach((key) => {
      newObject[key] = getDefaultValue(sectionQuestionList[key].fieldType);
    });
    currentValues.push(newObject);
    questionAnswerHandler(parentKey, currentValues);
  }, [questionAnswerHandler, answeredQuestionState]);

  const getQuestionWrapperClass = (fieldType, nextKeyFieldType) => {
    const getQuestionWrapperClassForNested = () =>
      fieldType === TaskFieldType.nested
        ? styles.widthForNestedQuestion
        : styles.widthForDefaultQuestion;

    return fieldType === TaskFieldType.boolean &&
      nextKeyFieldType === TaskFieldType.boolean
      ? styles.widthForBooleanQuestion
      : getQuestionWrapperClassForNested();
  };
  return (
    <div>
      <div className={styles.nestedQuestionWrapper}>
        {selectedValues.length > 0 &&
          selectedValues?.map((value, index) => {
            return (
              <div className={`${styles.nestedQuestionContainer}`} key={index}>
                {childFieldSet.map((fieldKeyName, indexValue) => {
                  const { parentKey, fieldType: childFieldType } =
                    sectionQuestionList[fieldKeyName] || {};
                  const keyValue = fieldKeyName;
                  return (
                    <div
                      key={`${parentKey}.${index}.${keyValue}`}
                      className={getQuestionWrapperClass(
                        childFieldType,
                        childFieldSet[indexValue + 1],
                      )}
                    >
                      <QuestionAnswerManagment
                        keyValue={
                          parentKey
                            ? `${parentKey}.${index}.${keyValue}`
                            : keyValue
                        }
                        selectedValues={
                          parentKey
                            ? answeredQuestionRef.current[`${parentKey}`][
                                index
                              ][keyValue]
                            : answeredQuestionRef.current[keyValue]
                        }
                        tmsPanelConfig={tmsPanelConfig}
                        questionInformation={sectionQuestionList[keyValue]}
                        getTmsPanelConfigData={getTmsPanelConfigData}
                        questionAnswerHandler={answerHandler}
                        havingEditPermission={validateFieldShouldBeEnbled(
                          taskDefinitionId,
                          answeredQuestionRef.current,
                          sectionQuestionList,
                          sectionQuestionList[keyValue],
                        )}
                        sectionQuestionList={sectionQuestionList}
                        answeredQuestionRef={answeredQuestionRef}
                        taskDefinitionId={taskDefinitionId}
                        originalTaskLayoutResponse={originalTaskLayoutResponse}
                        answeredQuestionState={answeredQuestionState}
                        showTooltip={true}
                      />
                    </div>
                  );
                })}
                {selectedValues.length > 1 && (
                  <ImageComponent
                    height="32px"
                    width="32px"
                    src={removeIcon}
                    alt="close_icon"
                    onClick={() => removeHandler(index)}
                  />
                )}
              </div>
            );
          })}
      </div>
      <CustomButton
        type={elementTypeEnum.DEFAULT}
        onClick={() => addHandler()}
        className={styles.CredBtnDesign}
      >
        <div className={styles.insideBtnIcon}>
          <img src={addIcon} width="16px" alt="add" />
          {'Add Another'}
        </div>
      </CustomButton>
    </div>
  );
};

export default NestedQuestionTypeManagement;
