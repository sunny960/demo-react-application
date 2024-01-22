import CustomTooltip from 'components/Tooltip/CustomTooltip';
import { memo } from 'react';
import { TaskFieldType } from '../interfaces';
import ViewNestedTaskQuestionAnswer from './ViewNestedTaskQuestionAnswer';
import styles from './viewTaskDefinitionDetail.module.scss';

const ViewTaskQuestionAnswer = (props: any) => {
  const {
    question,
    answer,
    keyValue,
    childList = [],
    answeredQuestionResponse = {},
    originalTaskLayoutResponse = {},
    classCssForQuestion = '',
    showTooltip = false,
  } = props;
  const keyValueList = keyValue.split('.') || [];
  const [parentFieldKey, index, mostChildKey] = keyValueList;
  const mainKey = mostChildKey ? mostChildKey : index || parentFieldKey;

  const {
    fieldType = '',
    parentKey,
    info = '',
  } = originalTaskLayoutResponse[mainKey] || {};
  const parentFieldType = originalTaskLayoutResponse[parentKey]?.fieldType;

  const getAnswerValue = (answer = '') => {
    if (Array.isArray(answer)) {
      return (answer.length > 0 && answer.join(', ')) || '-';
    } else if (fieldType === TaskFieldType.boolean) {
      return answer ? 'Yes' : 'No';
    } else {
      return answer || '-';
    }
  };
  if (fieldType === TaskFieldType.nested) {
    return <ViewNestedTaskQuestionAnswer {...props} />;
  } else if (
    keyValueList.length < 3 &&
    parentFieldType === TaskFieldType.nested
  ) {
    return null;
  }

  return (
    <div className={styles.questionRow} key={keyValue}>
      <div className={`${styles.questionText} ${classCssForQuestion}`}>
        <CustomTooltip info={showTooltip && info}>{question}</CustomTooltip>
      </div>
      <div className={styles.answerWrapper}>
        <div className={styles.answerText}>{getAnswerValue(answer)}</div>
        {childList?.length > 0 && (
          <div className={styles.childAnswerTextContainer}>
            {childList.map(({ parentKey, keyName, label }) => (
              <>
                <span className={styles.childQuestionText}>{` ${
                  label || keyName
                } - `}</span>
                <span className={styles.childAnswerText}>{`${getAnswerValue(
                  parentKey
                    ? answeredQuestionResponse[parentKey][keyName]
                    : answeredQuestionResponse[keyName],
                )}`}</span>
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default memo(ViewTaskQuestionAnswer);
