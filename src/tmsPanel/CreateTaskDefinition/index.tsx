import AdminLoaderContainer from 'components/AdminLoaderContainer';
import CustomTooltip from 'components/Tooltip/CustomTooltip';
import {
  constants,
  successToastConstants,
  tmsActonPermissionConstants,
} from 'constants/constants';
import { pathConstants } from 'constants/pathConstants';
import { useUtilityContext } from 'contexts/utility-context/utility-context';
import useQueryParams from 'hooks/useQueryParams';
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createUpdateTaskDefinition } from 'services/api/tms/createUpdateTaskDefinition';
import { getTaskDefinitionDetail } from 'services/api/tms/getTaskDefinitionDetail';
import { getTmsPanelConfig } from 'services/api/tms/getTmsPanelConfig';
import { getTmsPanelLayout } from 'services/api/tms/getTmsPanelLayout';
import { updateTaskDefinitionWorkflow } from 'services/api/tms/updateTaskDefinitionWorkflow';
import CustomButton from 'shared/CustomButton/CustomButton';
import { elementTypeEnum } from 'utils/enums';
import { getItem, setItem } from 'utils/sessionStorage';
import QuestionAnswerManagment from '../QuestionAnswerManagment';
import {
  IgetConfigApiRes,
  IgetLayoutApiRes,
  IgetParsedLayoutApiRes,
  IgetParsedLayoutApiResponse,
  TaskFieldType,
} from '../interfaces';
import TmsHeader from '../tmsHeader';
import {
  checkHavingActionPermission,
  getInitalValueTaskField,
  isSaveAndProceedDisabled,
  preparePayloadForUpdateCreateApi,
  resetAllDependentField,
  validateFieldShouldBeEnbled,
} from '../utils';
import { btnConstants, modalConstants } from './constants';
import styles from './createTaskDefinition.module.scss';

const CreateTaskDefinition = () => {
  const { showToast, showModal, hideModal } = useUtilityContext();
  const confirmationReason = useRef('');
  const history = useHistory();

  const [taskLayout, setTaskLayout] = useState<IgetParsedLayoutApiResponse>();
  const originalTaskLayoutResponseRef = useRef<IgetLayoutApiRes>();
  const [answeredQuestionState, setAnsweredQuestionState] = useState();
  const updatedTaskDefinitionId = useRef<number>(0);
  const answeredQuestionRef = useRef<any>({});
  const [tmsPanelConfig, setTmsPanelConfig] = useState(
    getItem('tmsPanelConfig') || {},
  );
  const isSaveAndProceedDone = useRef(!!updatedTaskDefinitionId);

  const queryParam = useQueryParams();
  const taskDefinitionId = queryParam.get('taskDefinitionId');

  const createDefinitionPayload = useMemo(
    () =>
      preparePayloadForUpdateCreateApi(
        taskDefinitionId,
        answeredQuestionRef.current,
        taskLayout,
      ),
    [
      taskDefinitionId,
      taskLayout,
      answeredQuestionState,
      answeredQuestionRef.current,
    ],
  );

  const getTaskLayout = useCallback(() => {
    getTmsPanelLayout().then((response: IgetParsedLayoutApiRes) => {
      const { parsedResponse, originalResponse } = response || {};
      setTaskLayout(parsedResponse);
      originalTaskLayoutResponseRef.current = originalResponse;
    });
  }, []);

  const setConfigDataInSessionStorage = useCallback(() => {
    getTmsPanelConfig().then((response: IgetConfigApiRes) => {
      setItem('tmsPanelConfig', response);
      setTmsPanelConfig(response);
    });
  }, []);

  const getTaskDefinitionDetails = useCallback((id = taskDefinitionId) => {
    if (!id) return;
    getTaskDefinitionDetail(id).then((response = {}) => {
      setAnsweredQuestionState(response);
      answeredQuestionRef.current = response;
    });
  }, []);

  useEffect(() => {
    if (
      !tmsPanelConfig ||
      (typeof tmsPanelConfig === 'object' &&
        !Object.keys(tmsPanelConfig).length)
    ) {
      setConfigDataInSessionStorage();
    }
    getTaskLayout();
  }, []);

  useEffect(() => {
    getTaskDefinitionDetails();
  }, [taskDefinitionId]);

  const questionAnswerHandler = useCallback((key: string, values: any) => {
    const [parentFieldKey, childFieldKey] = key.split('.');

    if (childFieldKey) {
      let parentFieldData = {};

      parentFieldData = {
        ...answeredQuestionRef.current[parentFieldKey],
        [childFieldKey]: values,
      };
      answeredQuestionRef.current = {
        ...answeredQuestionRef.current,
        [parentFieldKey]: parentFieldData,
      };
    } else {
      answeredQuestionRef.current = {
        ...answeredQuestionRef.current,
        [parentFieldKey]: values,
      };
    }
    isSaveAndProceedDone.current = false;
    answeredQuestionRef.current = resetAllDependentField(
      key,
      answeredQuestionRef,
      originalTaskLayoutResponseRef.current,
    );
    setAnsweredQuestionState({ ...answeredQuestionRef.current });
  }, []);

  const updateBtnHandler = useCallback(() => {
    createUpdateTaskDefinition(createDefinitionPayload).then((response) => {
      if (!response) return;
      updatedTaskDefinitionId.current = response.updatedTaskDefinitionId;
      !createDefinitionPayload?.taskDefinitionId &&
        getTaskDefinitionDetails(response.updatedTaskDefinitionId);
      showToast({
        message: createDefinitionPayload?.taskDefinitionId
          ? successToastConstants.UPDATE_TASK_DEFINITION_SUCCESS
          : successToastConstants.CREATE_TASK_DEFINITION_SUCCESS,
        show: true,
        type: 'success',
      });
      isSaveAndProceedDone.current = true;
    });
  }, [taskDefinitionId, createDefinitionPayload]);

  const reasonSubmitHandler = useCallback(
    (workflowAction = '', reason = '') => {
      if (!reason) return;
      updateTaskDefinitionWorkflow({
        taskDefinitionId: Number(
          taskDefinitionId || answeredQuestionRef.current?.taskDefinitionId,
        ),
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

  const confirmationHandler = () => {
    hideModal();
    reasonSubmitHandler('SUBMIT', confirmationReason.current);
    confirmationReason.current = '';
  };

  const inputFieldHandler = (e: string) => {
    confirmationReason.current = e;
  };

  const cancelConfirmationHandler = () => {
    confirmationReason.current = '';
    hideModal();
  };

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
        inputFieldHandler: inputFieldHandler,
        firstBtnClickHandler: confirmationHandler,
        secondBtnClickHandler: cancelConfirmationHandler,
      },
    });
  }, []);

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

  const viewSummaryHandler = useCallback(() => {
    history.push(
      `${pathConstants.TMS_DETAIL}?taskDefinitionId=${
        updatedTaskDefinitionId.current || taskDefinitionId
      }`,
    );
  }, []);

  return (
    <AdminLoaderContainer shouldShowBreadCrumb={false}>
      <TmsHeader
        labelText={
          taskDefinitionId ? constants.EDIT_TASK : constants.CREATE_TASK
        }
        subLabelText={constants.DETAILS_TO_CREATE_TASK}
        showViewAllTaskBtn={true}
      />
      {tmsPanelConfig &&
        tmsPanelConfig?.sections?.length > 0 &&
        tmsPanelConfig?.sections.map(
          ({ heading = '', subHeading = '', key = '' }: any, index) => {
            return (
              <div key={heading} className={styles.sectionWrapper}>
                <div className={styles.sectionHeading}>{heading}</div>
                <div className={styles.sectionsubHeading}>{subHeading}</div>

                {tmsPanelConfig?.sections[index]?.subSectionList?.map(
                  (
                    {
                      heading: subSectionHeading = '',
                      subHeading: subSectionSubHeading = '',
                      key: subSectionKey = '',
                      info,
                    }: any,
                    subSectionIndex,
                  ) => {
                    const subSectionFieldData =
                      taskLayout && taskLayout[key]?.[subSectionKey];
                    return (
                      <>
                        {subSectionFieldData &&
                          Object.keys(subSectionFieldData).length > 0 && (
                            <div
                              key={subSectionHeading}
                              className={
                                subSectionKey !== 'default'
                                  ? styles.sectionWrapper
                                  : ''
                              }
                            >
                              {subSectionHeading && (
                                <div className={styles.subSectionHeading}>
                                  <CustomTooltip info={info}>
                                    {subSectionHeading}
                                  </CustomTooltip>
                                </div>
                              )}
                              {subSectionSubHeading && (
                                <div className={styles.sectionsubHeading}>
                                  {subSectionSubHeading}
                                </div>
                              )}
                              <div className={styles.filterFieldWrapper}>
                                {taskLayout &&
                                  subSectionFieldData &&
                                  Object.keys(subSectionFieldData).length > 0 &&
                                  Object.keys(subSectionFieldData).map(
                                    (keyValue, indexValue) => {
                                      const parentKey =
                                        subSectionFieldData[keyValue]
                                          .parentKey || '';

                                      const { fieldType } =
                                        subSectionFieldData[keyValue] || {};
                                      answeredQuestionRef.current =
                                        getInitalValueTaskField(
                                          subSectionFieldData,
                                          keyValue,
                                          answeredQuestionRef.current,
                                        );
                                      const nextKeyValue =
                                        Object.keys(subSectionFieldData)[
                                          indexValue + 1
                                        ] || '';
                                      const { fieldType: nextKeyFieldType } =
                                        (nextKeyValue &&
                                          subSectionFieldData[nextKeyValue]) ||
                                        {};

                                      return (
                                        <div
                                          key={keyValue}
                                          className={getQuestionWrapperClass(
                                            fieldType,
                                            nextKeyFieldType,
                                          )}
                                        >
                                          <QuestionAnswerManagment
                                            keyValue={
                                              parentKey
                                                ? `${parentKey}.${keyValue}`
                                                : keyValue
                                            }
                                            selectedValues={
                                              parentKey
                                                ? answeredQuestionRef.current[
                                                    `${parentKey}`
                                                  ]?.[keyValue]
                                                : answeredQuestionRef.current[
                                                    keyValue
                                                  ]
                                            }
                                            tmsPanelConfig={tmsPanelConfig}
                                            questionInformation={
                                              subSectionFieldData[keyValue]
                                            }
                                            getTmsPanelConfigData={
                                              setConfigDataInSessionStorage
                                            }
                                            questionAnswerHandler={
                                              questionAnswerHandler
                                            }
                                            havingEditPermission={validateFieldShouldBeEnbled(
                                              taskDefinitionId,
                                              answeredQuestionRef.current,
                                              subSectionFieldData,
                                              subSectionFieldData[keyValue],
                                            )}
                                            sectionQuestionList={
                                              subSectionFieldData
                                            }
                                            answeredQuestionRef={
                                              answeredQuestionRef
                                            }
                                            answeredQuestionState={
                                              answeredQuestionState
                                            }
                                            taskDefinitionId={taskDefinitionId}
                                            originalTaskLayoutResponse={
                                              originalTaskLayoutResponseRef.current
                                            }
                                            showTooltip={true}
                                          />
                                        </div>
                                      );
                                    },
                                  )}
                              </div>
                            </div>
                          )}
                      </>
                    );
                  },
                )}
              </div>
            );
          },
        )}

      <div className={styles.filterBtnContainer}>
        {((answeredQuestionRef.current?.actions &&
          answeredQuestionRef.current?.actions.length === 0) ||
          checkHavingActionPermission(
            answeredQuestionRef.current?.actions,
            tmsActonPermissionConstants.edit,
          )) && (
          <CustomButton
            data-testid="update"
            type={elementTypeEnum.PRIMARY}
            disabled={
              isSaveAndProceedDisabled(taskLayout, createDefinitionPayload) ||
              isSaveAndProceedDone.current
            }
            onClick={updateBtnHandler}
          >
            {btnConstants.SAVE_AND_PROCEED}
          </CustomButton>
        )}

        {checkHavingActionPermission(
          answeredQuestionRef.current?.actions,
          tmsActonPermissionConstants.view,
        ) && (
          <CustomButton
            data-testid="viewSummary"
            type={elementTypeEnum.SECONDARY}
            disabled={
              !checkHavingActionPermission(
                answeredQuestionRef.current?.actions,
                tmsActonPermissionConstants.view,
              ) || !isSaveAndProceedDone.current
            }
            onClick={viewSummaryHandler}
          >
            {btnConstants.VIEW_SUMMARY}
          </CustomButton>
        )}

        {checkHavingActionPermission(
          answeredQuestionRef.current?.actions,
          tmsActonPermissionConstants.submit,
        ) && (
          <CustomButton
            data-testid="submit"
            type={elementTypeEnum.PRIMARY}
            disabled={
              !checkHavingActionPermission(
                answeredQuestionRef.current?.actions,
                tmsActonPermissionConstants.submit,
              ) || !isSaveAndProceedDone.current
            }
            onClick={submitBtnHandler}
          >
            {btnConstants.SUBMIT}
          </CustomButton>
        )}
      </div>
    </AdminLoaderContainer>
  );
};

export default memo(CreateTaskDefinition);
