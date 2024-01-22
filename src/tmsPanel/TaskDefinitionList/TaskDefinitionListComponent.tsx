import Paginator from 'components/Paginator';
import {
  successToastConstants,
  tmsActonPermissionConstants,
} from 'constants/constants';
import { pathConstants } from 'constants/pathConstants';
import { useUtilityContext } from 'contexts/utility-context/utility-context';
import { taskDefinitionHeader } from 'modules/fseList/constants';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { cloneTaskDefinitionById } from 'services/api/tms/cloneTaskDefinitionById';
import CustomTable from 'shared/CustomTable';
import { config } from '../config';
import { ITaskDefinitionListProps } from '../interfaces';
import { TSM_HEADER_CONSTANTS } from '../tmsHeader/constants';
import { getImageSourceAccordingToStatus, getStatusText } from '../utils';
import styles from './list.module.scss';

const TaskDefinitionListComponent = ({
  pageNumber = 1,
  taskList,
  onNextPage,
  onPrevPage,
  toggleBackgroundOverlay,
}: ITaskDefinitionListProps) => {
  const { taskDefinitions = [] } = taskList || {};
  const history = useHistory();

  const { showToast, showModal, hideModal } = useUtilityContext();

  const proceedConfirmationHandler = (taskDefinitionId) => {
    cloneTaskDefinitionById(taskDefinitionId)
      .then(({ updatedTaskDefinitionId }) => {
        if (updatedTaskDefinitionId) {
          showToast({
            message: successToastConstants.CLONE_TASK_DEFINITION_SUCCESS,
            show: true,
            type: 'success',
          });
          return history.push(
            `${pathConstants.TMS_DETAIL}?taskDefinitionId=${updatedTaskDefinitionId}`,
          );
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
          <span className={styles.bold}>{taskDefinitionName} </span>?
        </div>
      );
      showModal({
        show: true,
        onClose: () => hideModal(),
        fullScreen: false,
        showCloseIcon: false,
        contentId: 'CONFIRMATION_MODAL',
        contentData: {
          heading: modalHeading,
          firstBtnText: 'Proceed',
          secondBtnText: 'Cancel',
          firstBtnClickHandler: () =>
            proceedConfirmationHandler(taskDefinitionId),
          secondBtnClickHandler: cancelConfirmationHandler,
        },
      });
    },
    [],
  );

  const actionHandler = useCallback(
    (actionType, { taskDefinitionId, taskDefinitionName }) => {
      switch (actionType) {
        case tmsActonPermissionConstants.view:
          return history.push(
            `${pathConstants.TMS_DETAIL}?taskDefinitionId=${taskDefinitionId}`,
          );
        case tmsActonPermissionConstants.edit:
          return history.push(
            `${pathConstants.TMS_CREATE}?taskDefinitionId=${taskDefinitionId}`,
          );
        case tmsActonPermissionConstants.clone:
          cloneActionHandler(taskDefinitionId, taskDefinitionName);
          break;
      }
    },
    [],
  );

  const getCustomKeyValueContent = (key = '', value = '') => {
    if (key === 'status') {
      return (
        <div className={styles.tableStatus}>
          <img
            src={getImageSourceAccordingToStatus(value)}
            alt={`${value}Icon`}
          />
          <span>{getStatusText(value)}</span>
        </div>
      );
    }
    return value;
  };
  return (
    <div>
      <div className={styles.table}>
        <CustomTable
          title={''}
          headers={taskDefinitionHeader}
          rows={taskDefinitions.length ? taskDefinitions : []}
          actionHandler={actionHandler}
          getCustomKeyValueContent={getCustomKeyValueContent}
          component="tms panel"
          rowClickHandler={true}
          toggleBackgroundOverlay={toggleBackgroundOverlay}
        />
      </div>
      {taskList?.taskDefinitions.length > 0 && (
        <Paginator
          currentPage={pageNumber}
          totalPages={Math.ceil(taskList?.searchCount / config.pageSize) || 1}
          onNextPage={onNextPage}
          onPrevPage={onPrevPage}
        />
      )}
    </div>
  );
};

export default TaskDefinitionListComponent;
