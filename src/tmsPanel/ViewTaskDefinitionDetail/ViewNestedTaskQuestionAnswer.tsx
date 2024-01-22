import CustomTooltip from 'components/Tooltip/CustomTooltip';
import { memo } from 'react';
import ViewTaskQuestionAnswer from './ViewTaskQuestionAnswer';
import styles from './viewTaskDefinitionDetail.module.scss';

const ViewNestedTaskQuestionAnswer = (props: any) => {
  const {
    keyValue,
    question,
    answer,
    answeredQuestionResponse = {},
    originalTaskLayoutResponse = {},
    showTooltip = false,
  } = props;
  const [parentFieldKey, index, mostChildKey] = keyValue.split('.') || [];
  const mainKey = mostChildKey ? mostChildKey : index || parentFieldKey;
  const { childFieldSet, info } = originalTaskLayoutResponse[mainKey] || {};

  return (
    <div className={styles.nestedTypeSubQuestionWrapper} key={keyValue}>
      <div className={styles.questionText}>
        <CustomTooltip info={showTooltip && info}>{question}</CustomTooltip>
      </div>
      {answer &&
        answer.length > 0 &&
        answer.map((answerObj, index) => {
          return (
            <>
              {childFieldSet &&
                childFieldSet.map((fieldKeyName) => {
                  const { parentKey } =
                    originalTaskLayoutResponse[fieldKeyName] || {};
                  return (
                    <ViewTaskQuestionAnswer
                      key={`${parentKey}.${index}.${fieldKeyName}`}
                      keyValue={`${parentKey}.${index}.${fieldKeyName}`}
                      answer={answerObj[fieldKeyName] || ''}
                      question={
                        originalTaskLayoutResponse[fieldKeyName]?.label ||
                        fieldKeyName
                      }
                      childList={
                        originalTaskLayoutResponse[fieldKeyName]?.childList ||
                        []
                      }
                      answeredQuestionResponse={answeredQuestionResponse}
                      originalTaskLayoutResponse={originalTaskLayoutResponse}
                      classCssForQuestion={styles.fontWeight400}
                      showTooltip={true}
                    />
                  );
                })}
            </>
          );
        })}
    </div>
  );
};
export default memo(ViewNestedTaskQuestionAnswer);
