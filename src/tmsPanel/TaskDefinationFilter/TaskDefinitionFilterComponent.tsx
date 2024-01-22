import { Icons } from '@paytm/ui-lib';
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { getTmsPanelLayout } from 'services/api/tms/getTmsPanelLayout';
import CustomSelect from 'shared/CustomSelect/CustomSelect';
import TMSInput from 'shared/TMSInput';
import { debounce } from 'utils/utility';
import QuestionAnswerManagment from '../QuestionAnswerManagment';
import {
  ITaskDefinitionFilterComponentProps,
  IgetLayoutApiRes,
  TaskFieldType,
} from '../interfaces';
import styles from '../tms.module.scss';
import {
  getInitalValueTaskField,
  getSelectedFilterByAndValueFromStoredFilterData,
  parseLayoutFilledData,
} from '../utils';
import { filterByOptions } from './constant';
import { getItem, setItem } from 'utils/sessionStorage';
import { storageConstants } from 'constants/appConstant';

const TaskDefinitionFilterComponent = ({
  tmsPanelConfig,
  filterApplyHandler,
  getTmsPanelConfigData,
  emptyTaskList,
}: ITaskDefinitionFilterComponentProps) => {
  const storedFilterData = useMemo(
    () => getItem(storageConstants.TMS_PANEL_FILTERS),
    [],
  );
  const { filterBy, filterValue } = useMemo(
    () => getSelectedFilterByAndValueFromStoredFilterData(storedFilterData),
    [],
  );
  const [taskLayout, setTaskLayout] = useState<IgetLayoutApiRes>();
  const [answeredQuestionState, setAnsweredQuestionState] = useState({});
  const [filterByOptionValue, setFilterByOptionValue] = useState(
    filterBy || '',
  );
  const [searchInputValue, setSearchInputValue] = useState(filterValue || '');
  const doWeHaveSelectedAnyThingRef = useRef<boolean>(false);

  const answeredQuestionRef = useRef(storedFilterData || {});

  const debouncedFilterApplyHandler = useCallback(
    debounce((payload) => filterApplyHandler(payload), 1000),
    [],
  );

  const questionAnswerHandler = useCallback(
    (key: string, values: any) => {
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
      doWeHaveSelectedAnyThingRef.current = true;
      setAnsweredQuestionState(answeredQuestionRef.current);
      setItem(storageConstants.TMS_PANEL_FILTERS, answeredQuestionRef.current);
      if (
        taskLayout?.[parentFieldKey]?.fieldType ===
        (TaskFieldType.text as string)
      ) {
        debouncedFilterApplyHandler(
          parseLayoutFilledData(answeredQuestionRef.current),
        );
      } else {
        filterApplyHandler(parseLayoutFilledData(answeredQuestionRef.current));
      }
    },
    [taskLayout],
  );

  const getTaskLayout = useCallback(() => {
    getTmsPanelLayout('search_screen').then((response: IgetLayoutApiRes) => {
      setTaskLayout(response);
    });
  }, []);

  const handleFileTypeChange = (option) => {
    setFilterByOptionValue(option.value);
    const updatedAnsweredQuestionRef = { ...answeredQuestionRef.current };
    delete updatedAnsweredQuestionRef[filterByOptionValue];
    answeredQuestionRef.current = updatedAnsweredQuestionRef;
    if (searchInputValue) {
      filterApplyHandler(parseLayoutFilledData(answeredQuestionRef.current));
    }
    setSearchInputValue('');
  };

  const searchInputChangeHandler = (value) => {
    setSearchInputValue(value);
    answeredQuestionRef.current = {
      ...answeredQuestionRef.current,
      [filterByOptionValue]: value.trim(),
    };
    setItem(storageConstants.TMS_PANEL_FILTERS, {
      ...answeredQuestionRef.current,
    });
    debouncedFilterApplyHandler(
      parseLayoutFilledData(answeredQuestionRef.current),
    );
  };

  useEffect(() => {
    getTaskLayout();
    filterApplyHandler(parseLayoutFilledData(storedFilterData || {}));
  }, []);
  return (
    <div>
      <div className={styles.filterSearchDiv}>
        <CustomSelect
          id="filterBySelectBox"
          data-testid="filterSelectBox"
          options={filterByOptions}
          customClass={styles.searchSelectCustomClass}
          label="Filter By"
          required
          selected={filterByOptionValue}
          onChange={handleFileTypeChange}
        />
        <TMSInput
          id="filterByInputBox"
          label="Search"
          onChange={searchInputChangeHandler}
          suffix={<Icons name="IcSearch" />}
          customClass={styles.searchInputCustomClass}
          regex={
            filterByOptionValue === filterByOptions[0].value ? '^[0-9]+$' : ''
          }
          emptyTaskList={emptyTaskList}
          value={searchInputValue}
          allowInvalidInput={false}
          disabled={!filterByOptionValue}
        />
      </div>
      <div className={styles.filterFieldWrapper} data-testid="TaskDefFilters">
        {(taskLayout &&
          Object.keys(taskLayout).length > 0 &&
          Object.keys(taskLayout).map((keyValue, indexValue) => {
            const parentKey = taskLayout[keyValue].parentKey || '';
            answeredQuestionRef.current = getInitalValueTaskField(
              taskLayout,
              keyValue,
              answeredQuestionRef.current,
            );

            return (
              <div key={keyValue}>
                <QuestionAnswerManagment
                  keyValue={parentKey ? `${parentKey}.${keyValue}` : keyValue}
                  selectedValues={
                    parentKey
                      ? answeredQuestionRef.current[`${parentKey}`][keyValue]
                      : answeredQuestionRef.current[keyValue]
                  }
                  tmsPanelConfig={tmsPanelConfig}
                  questionInformation={taskLayout[keyValue]}
                  questionAnswerHandler={questionAnswerHandler}
                  getTmsPanelConfigData={getTmsPanelConfigData}
                  havingEditPermission={true}
                  allowInvalidInput={false}
                  sectionQuestionList={taskLayout}
                  answeredQuestionRef={answeredQuestionRef}
                  taskDefinitionId={null}
                  answeredQuestionState={answeredQuestionState}
                  originalTaskLayoutResponse={taskLayout}
                />
              </div>
            );
          })) || (
          <div className={styles.noFilterFound}>{'No Filter Found'}</div>
        )}
      </div>
    </div>
  );
};

export default memo(TaskDefinitionFilterComponent);
