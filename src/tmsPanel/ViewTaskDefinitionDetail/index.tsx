import AdminLoaderContainer from 'components/AdminLoaderContainer';
import {
  constants,
  successToastConstants,
  tmsActonPermissionConstants,
} from 'constants/constants';
import { pathConstants } from 'constants/pathConstants';
import { useUtilityContext } from 'contexts/utility-context/utility-context';
import useQueryParams from 'hooks/useQueryParams';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getTaskDefinitionDetail } from 'services/api/tms/getTaskDefinitionDetail';
import { getTmsPanelLayout } from 'services/api/tms/getTmsPanelLayout';
import { updateTaskDefinitionWorkflow } from 'services/api/tms/updateTaskDefinitionWorkflow';
import CustomButton from 'shared/CustomButton/CustomButton';
import { elementTypeEnum } from 'utils/enums';
import { getItem } from 'utils/sessionStorage';
import { modalConstants } from '../CreateTaskDefinition/constants';
import {
  IgetLayoutApiRes,
  IgetParsedLayoutApiRes,
  IgetParsedLayoutApiResponse,
  TaskFieldType,
} from '../interfaces';
import TmsHeader from '../tmsHeader';
import { checkHavingActionPermission, getInitalValueTaskField } from '../utils';
import ViewTaskQuestionAnswer from './ViewTaskQuestionAnswer';
import styles from './viewTaskDefinitionDetail.module.scss';

const ViewTaskDefinitionDetail = () => {
  const { showToast, showModal, hideModal } = useUtilityContext();
  const confirmationReason = useRef('');
  const history = useHistory();

  const [taskLayout, setTaskLayout] = useState<IgetParsedLayoutApiResponse>();
  const originalTaskLayoutResponseRef = useRef<IgetLayoutApiRes>();
  const [, setAnsweredQuestionState] = useState();
  const answeredQuestionRef = useRef<any>({});
  const [tmsPanelConfig] = useState(getItem('tmsPanelConfig') || {});

  const queryParam = useQueryParams();
  const taskDefinitionId = queryParam.get('taskDefinitionId');

  const getTaskLayout = useCallback(() => {
    getTmsPanelLayout('view_screen').then(
      (response: IgetParsedLayoutApiRes) => {
        const { parsedResponse, originalResponse } = response || {};
        setTaskLayout(parsedResponse);
        originalTaskLayoutResponseRef.current = originalResponse;
      },
    );
  }, []);

  const getTaskDefinitionDetails = useCallback(() => {
    if (!taskDefinitionId) return;
    getTaskDefinitionDetail(taskDefinitionId).then((response = {}) => {
      setAnsweredQuestionState(response);
      answeredQuestionRef.current = response;
    });
  }, []);

  useEffect(() => {
    getTaskLayout();
  }, []);

  useEffect(() => {
    getTaskDefinitionDetails();
  }, [taskDefinitionId]);

  const reasonSubmitHandler = useCallback(
    (workflowAction = '', reason = '') => {
      updateTaskDefinitionWorkflow({
        taskDefinitionId: Number(taskDefinitionId),
        workflowAction,
        reason,
      }).then((response) => {
        if (!response) return;
        showToast({
          message:
            workflowAction === 'DEACTIVATION_REQUESTED'
              ? successToastConstants.DELETE_TASK_DEFINITION_SUCCESS
              : successToastConstants.SUBMIT_TASK_DEFINITION_SUCCESS,
          show: true,
          type: 'success',
        });
        history.push(pathConstants.TMS);
      });
    },
    [taskDefinitionId],
  );

  const confirmationHandler = (submit: boolean) => {
    if (submit) {
      reasonSubmitHandler('SUBMIT', confirmationReason.current);
    } else {
      reasonSubmitHandler('DEACTIVATION_REQUESTED', confirmationReason.current);
    }
    hideModal();
    confirmationReason.current = '';
  };

  const inputFieldHandler = (e: string) => {
    confirmationReason.current = e;
  };

  const cancelConfirmationHandler = () => {
    hideModal();
  };

  const deleteBtnHandler = useCallback(() => {
    showModal({
      show: true,
      onClose: () => hideModal(),
      fullScreen: false,
      showCloseIcon: false,
      contentId: modalConstants.CONFIRMATION_MODAL_ID,
      contentData: {
        heading: modalConstants.CONFIRMATION_MODAL_HEADING,
        firstBtnText: modalConstants.DELETE_BTN_TEXT,
        secondBtnText: 'Cancel',
        inputField: true,
        inputFieldHandler: (e: string) => inputFieldHandler(e),
        firstBtnClickHandler: () => confirmationHandler(false),
        secondBtnClickHandler: cancelConfirmationHandler,
      },
    });
  }, []);

  const submitBtnHandler = useCallback(() => {
    showModal({
      show: true,
      onClose: () => hideModal(),
      fullScreen: false,
      showCloseIcon: false,
      contentId: modalConstants.CONFIRMATION_MODAL_ID,
      contentData: {
        heading: modalConstants.CONFIRMATION_MODAL_HEADING,
        firstBtnText: modalConstants.PROCEED_BTN_TEXT,
        secondBtnText: modalConstants.CANCEL_BTN_TEXT,
        inputField: true,
        inputFieldHandler: (e: string) => inputFieldHandler(e),
        firstBtnClickHandler: () => confirmationHandler(true),
        secondBtnClickHandler: cancelConfirmationHandler,
      },
    });
  }, []);

  return (
    <AdminLoaderContainer shouldShowBreadCrumb={false}>
      <TmsHeader
        labelText={constants.VIEW_TASK}
        subLabelText={constants.VIEW_DETAIL_TASK}
        showViewAllTaskBtn={true}
        showCredBtn={true}
        taskData={answeredQuestionRef.current}
      />

      <div className={styles.container}>
        {tmsPanelConfig?.sections?.length > 0 &&
          tmsPanelConfig?.sections.map(
            ({ heading = '', key = '' }: any, index) => {
              return (
                <div key={heading}>
                  <div className={styles.sectionHeading}>{heading}</div>
                  <div className={styles.filterFieldWrapper}>
                    {tmsPanelConfig?.sections[index]?.subSectionList.map(
                      (
                        {
                          heading: subSectionHeading = '',
                          subHeading: subSectionSubHeading = '',
                          key: subSectionKey = '',
                        }: any,
                        subSectionIndex,
                      ) => {
                        const subSectionFieldData =
                          taskLayout && taskLayout[key]?.[subSectionKey];
                        return (
                          <>
                            {taskLayout &&
                              subSectionFieldData &&
                              Object.keys(subSectionFieldData).length > 0 &&
                              Object.keys(subSectionFieldData).map(
                                (keyValue, indexValue) => {
                                  const parentKey =
                                    subSectionFieldData[keyValue].parentKey ||
                                    '';
                                  const { fieldType: parentFieldType } =
                                    subSectionFieldData[parentKey] || {};
                                  answeredQuestionRef.current =
                                    getInitalValueTaskField(
                                      subSectionFieldData,
                                      keyValue,
                                      answeredQuestionRef.current,
                                    );

                                  if (
                                    parentFieldType &&
                                    parentFieldType === TaskFieldType.nested
                                  )
                                    return null;

                                  return (
                                    <div
                                      key={keyValue}
                                      className={styles.questionWrapper}
                                    >
                                      <ViewTaskQuestionAnswer
                                        keyValue={
                                          parentKey
                                            ? `${parentKey}.${keyValue}`
                                            : keyValue
                                        }
                                        answer={
                                          parentKey
                                            ? answeredQuestionRef.current[
                                                `${parentKey}`
                                              ]?.[keyValue]
                                            : answeredQuestionRef.current[
                                                keyValue
                                              ]
                                        }
                                        question={
                                          subSectionFieldData[keyValue]
                                            ?.label || keyValue
                                        }
                                        childList={
                                          subSectionFieldData[keyValue]
                                            ?.childList || []
                                        }
                                        answeredQuestionResponse={
                                          answeredQuestionRef.current || {}
                                        }
                                        originalTaskLayoutResponse={
                                          originalTaskLayoutResponseRef.current ||
                                          {}
                                        }
                                        showTooltip={true}
                                      />
                                    </div>
                                  );
                                },
                              )}
                          </>
                        );
                      },
                    )}
                  </div>
                </div>
              );
            },
          )}
      </div>

      <div className={styles.filterBtnContainer}>
        {taskDefinitionId &&
          checkHavingActionPermission(
            answeredQuestionRef.current?.actions,
            tmsActonPermissionConstants.delete,
          ) && (
            <CustomButton
              data-testid="update"
              type={elementTypeEnum.DANGER}
              onClick={deleteBtnHandler}
            >
              {'DEACTIVATE'}
            </CustomButton>
          )}

        {taskDefinitionId &&
          checkHavingActionPermission(
            answeredQuestionRef.current?.actions,
            tmsActonPermissionConstants.submit,
          ) && (
            <CustomButton
              data-testid="submit"
              type={elementTypeEnum.PRIMARY}
              disabled={false}
              onClick={submitBtnHandler}
            >
              {'Submit'}
            </CustomButton>
          )}
      </div>
    </AdminLoaderContainer>
  );
};

export default memo(ViewTaskDefinitionDetail);
