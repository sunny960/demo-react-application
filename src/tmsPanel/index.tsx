import AdminLoaderContainer from 'components/AdminLoaderContainer';
import { constants } from 'constants/constants';
import { pathConstants } from 'constants/pathConstants';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getSearchList } from 'services/api/tms/getSearchList';
import { getTmsPanelConfig } from 'services/api/tms/getTmsPanelConfig';
import { setItem } from 'utils/sessionStorage';
import TaskDefinitionFilterComponent from './TaskDefinationFilter/TaskDefinitionFilterComponent';
import TaskDefinitionListComponent from './TaskDefinitionList/TaskDefinitionListComponent';
import { config } from './config';
import { ISearchListApiRes, IgetConfigApiRes } from './interfaces';
import style from './tms.module.scss';
import TmsHeader from './tmsHeader';

const TMSContainer = () => {
  const history = useHistory();
  const [tmsPanelConfig, setTmsPanelConfig] = useState<IgetConfigApiRes>();
  const [taskList, setTaskList] = useState<ISearchListApiRes>();
  const appliedFilterDataRef = useRef({});
  const pageNumberRef = useRef<number>(1);
  const [, setCurrentPage] = useState<number>(1);
  const [isPopOverOpen, setIsPopOverOpen] = useState(false);

  const createDefinitionHandler = useCallback(() => {
    history.push(pathConstants.TMS_CREATE);
  }, []);

  const emptyTaskList = useCallback(() => {
    setTaskList({ searchCount: 0, taskDefinitions: [] });
  }, []);

  const getSearchDataAPi = useCallback(
    (
      pageNumber = pageNumberRef.current,
      filterPayLoad = appliedFilterDataRef.current,
    ) => {
      getSearchList({
        pageSize: config.pageSize,
        pageNumber,
        ...filterPayLoad,
      }).then((response: ISearchListApiRes) => {
        setTaskList(response);
      });
    },
    [],
  );
  const getTmsPanelConfigData = useCallback(() => {
    getTmsPanelConfig().then((response: IgetConfigApiRes) => {
      setItem('tmsPanelConfig', response);
      setTmsPanelConfig(response);
    });
  }, []);

  const filterApplyHandler = useCallback((data: any) => {
    pageNumberRef.current = 1;
    appliedFilterDataRef.current = data;
    setCurrentPage(1);
    getSearchDataAPi(pageNumberRef.current, data);
  }, []);
  const filterResetHandler = useCallback(() => {
    pageNumberRef.current = 1;
    setCurrentPage(1);
    appliedFilterDataRef.current = {};
    getSearchDataAPi(pageNumberRef.current);
  }, []);

  const nextPageClickHandler = useCallback(() => {
    if (
      pageNumberRef.current >=
      Math.ceil(taskList?.searchCount / config.pageSize)
    )
      return;
    pageNumberRef.current = pageNumberRef.current + 1;
    setCurrentPage(pageNumberRef.current);
    getSearchDataAPi(pageNumberRef.current);
  }, []);

  const prevPageClickHandler = useCallback(() => {
    if (pageNumberRef.current <= 1) return;
    pageNumberRef.current = pageNumberRef.current - 1;
    setCurrentPage(pageNumberRef.current);
    getSearchDataAPi(pageNumberRef.current);
  }, []);

  useEffect(() => {
    getTmsPanelConfigData();
  }, []);

  const toggleBackgroundOverlay = (isOpen) => {
    setIsPopOverOpen(isOpen);
  };

  return (
    <React.Fragment>
      <div className={`${isPopOverOpen ? style.overlay : ''}`}> </div>
      <AdminLoaderContainer shouldShowBreadCrumb={false}>
        <TmsHeader
          createDefinitionHandler={createDefinitionHandler}
          labelText={constants.VIEW_TASK}
          subLabelText={constants.CHECKOUT_TASK_FOR_APPROVAL}
          showCreateTaskBtn={true}
        />
        <TaskDefinitionFilterComponent
          tmsPanelConfig={tmsPanelConfig}
          filterApplyHandler={filterApplyHandler}
          emptyTaskList={emptyTaskList}
          filterResetHandler={filterResetHandler}
          getTmsPanelConfigData={getTmsPanelConfigData}
        />

        <TaskDefinitionListComponent
          taskList={taskList}
          pageNumber={pageNumberRef.current}
          onNextPage={nextPageClickHandler}
          onPrevPage={prevPageClickHandler}
          toggleBackgroundOverlay={toggleBackgroundOverlay}
        />
      </AdminLoaderContainer>
    </React.Fragment>
  );
};
export default TMSContainer;
