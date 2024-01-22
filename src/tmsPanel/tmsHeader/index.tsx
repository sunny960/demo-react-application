import { Icons } from '@paytm/ui-lib';
import {
  successToastConstants,
  tmsActonPermissionConstants,
} from 'constants/constants';
import { pathConstants } from 'constants/pathConstants';
import { useUtilityContext } from 'contexts/utility-context/utility-context';
import useQueryParams from 'hooks/useQueryParams';
import copyIcon from 'images/copyIconSvg.svg';
import editIcon from 'images/edit-icon.svg';
import { memo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { cloneTaskDefinitionById } from 'services/api/tms/cloneTaskDefinitionById';
import CustomButton from 'shared/CustomButton/CustomButton';
import { elementTypeEnum } from 'utils/enums';
import { ITMSHeaderProps } from '../interfaces';
import style from '../tms.module.scss';
import { checkHavingActionPermission } from '../utils';
import { TSM_HEADER_CONSTANTS } from './constants';

const TmsHeader = ({
  createDefinitionHandler,
  labelText = '',
  subLabelText = '',
  showCreateTaskBtn = false,
  showViewAllTaskBtn = false,
  showCredBtn = false,
  taskData = {},
}: ITMSHeaderProps) => {
  const history = useHistory();
  const { showToast, showModal, hideModal } = useUtilityContext();

  const queryParam = useQueryParams();
  const taskDefinitionIdInURL = queryParam.get('taskDefinitionId') || '';

  const proceedConfirmationHandler = (taskDefinitionId) => {
    cloneTaskDefinitionById(taskDefinitionId)
      .then(({ updatedTaskDefinitionId }) => {
        if (updatedTaskDefinitionId) {
          showToast({
            message: successToastConstants.CLONE_TASK_DEFINITION_SUCCESS,
            show: true,
            type: 'success',
          });
          history.push(
            `${pathConstants.TMS_DETAIL}?taskDefinitionId=${updatedTaskDefinitionId}`,
          );
          return window.location.reload();
        } else {
          showToast({
            message: successToastConstants.CLONE_TASK_DEFINITION_FAILURE,
            show: true,
            type: 'error',
          });
        }
      })
      .catch(() => {
        showToast({
          message: successToastConstants.CLONE_TASK_DEFINITION_FAILURE,
          show: true,
          type: 'error',
        });
      });
    hideModal();
  };

  const cancelConfirmationHandler = () => {
    hideModal();
  };

  const cloneActionHandler = useCallback(
    (taskDefinitionId = '', taskDefinitionName = '') => {
      if (!taskDefinitionId) return;
      const modalHeading = (
        <div>
          {TSM_HEADER_CONSTANTS.MODAL_HEADING} {''}
          <span className={style.bold}>{taskDefinitionName} </span>?
        </div>
      );
      showModal({
        show: true,
        onClose: () => hideModal(),
        fullScreen: false,
        showCloseIcon: false,
        contentId: `${TSM_HEADER_CONSTANTS.CONFIRMATION_MODAL}`,
        contentData: {
          heading: modalHeading,
          firstBtnText: `${TSM_HEADER_CONSTANTS.PROCEED}`,
          secondBtnText: `${TSM_HEADER_CONSTANTS.CANCEL}`,
          firstBtnClickHandler: () =>
            proceedConfirmationHandler(taskDefinitionId),
          secondBtnClickHandler: cancelConfirmationHandler,
        },
      });
    },
    [],
  );

  const showEditBtn = checkHavingActionPermission(
    taskData.actions,
    tmsActonPermissionConstants.edit,
  );

  const duplicateBtn = checkHavingActionPermission(
    taskData.actions,
    tmsActonPermissionConstants.clone,
  );

  const viewAllTaskHandler = useCallback(() => {
    history.push(pathConstants.TMS);
  }, []);

  const editTaskHandler = useCallback((taskDefinitionId: number) => {
    history.push(
      `${pathConstants.TMS_CREATE}?taskDefinitionId=${taskDefinitionId}`,
    );
  }, []);

  const onBackHandler = () => {
    history.goBack();
  };

  return (
    <div className={style.headingLabelContainer}>
      <div className={style.leftHeader}>
        <div className={style.backIcon} onClick={onBackHandler}>
          <Icons name="IcChevronLeft" />
        </div>
        <div className={style.adminHeader}>
          {labelText && <div className={style.labelTextClass}>{labelText}</div>}
          {subLabelText && (
            <div className={style.subLabelTextClass}>{subLabelText}</div>
          )}
        </div>
      </div>
      <div className={style.credButtons}>
        {showCreateTaskBtn && (
          <CustomButton
            data-testid="addNewTask"
            type={elementTypeEnum.PRIMARY}
            disabled={false}
            onClick={createDefinitionHandler}
          >
            {TSM_HEADER_CONSTANTS.ADD_NEW_TASK}
          </CustomButton>
        )}
        {showViewAllTaskBtn && !taskDefinitionIdInURL && (
          <CustomButton
            data-testid="viewAllTask"
            type={elementTypeEnum.SECONDARY}
            disabled={false}
            onClick={viewAllTaskHandler}
          >
            {TSM_HEADER_CONSTANTS.VIEW_ALL_TASKS}
          </CustomButton>
        )}
        {showCredBtn && showEditBtn && (
          <CustomButton
            type={elementTypeEnum.SECONDARY}
            onClick={() => editTaskHandler(taskData?.taskDefinitionId)}
            className={style.CredBtnDesign}
          >
            <div className={style.insideBtnIcon}>
              <img src={editIcon} width="15px" alt="edit" />
              {TSM_HEADER_CONSTANTS.EDIT}
            </div>
          </CustomButton>
        )}
        {showCredBtn && duplicateBtn && (
          <CustomButton
            type={elementTypeEnum.SECONDARY}
            onClick={() =>
              cloneActionHandler(
                taskData?.taskDefinitionId,
                taskData?.taskDefinitionName,
              )
            }
            className={style.CredBtnDesign}
          >
            <div className={style.insideBtnIcon}>
              <img src={copyIcon} width="15px" alt="edit" />
              {TSM_HEADER_CONSTANTS.DUPLICATE}
            </div>
          </CustomButton>
        )}
      </div>
    </div>
  );
};
export default memo(TmsHeader);
