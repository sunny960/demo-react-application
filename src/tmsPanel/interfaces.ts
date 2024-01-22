export interface ITMSHeaderProps {
  createDefinitionHandler?: () => void;
  labelText?: string;
  subLabelText?: string;
  showCreateTaskBtn?: boolean;
  showViewAllTaskBtn?: boolean;
  showCredBtn?: boolean;
  taskData?: any;
}
export interface IConfigStaticData {
  [key: string]: string[];
}
export interface IBaseSection {
  key: string;
  heading: string;
  subHeading?: string;
  sequence: number;
}
export interface ISection {
  key: string;
  heading: string;
  subHeading?: string;
  sequence: number;
  subSectionList: IBaseSection[];
}

export interface IskillSetList {
  [key: string]:
    | {
        [key: string]: {
          [key: string]: string[];
        };
      }
    | string[];
}
export interface IgetConfigApiRes {
  configStaticData: IConfigStaticData;
  sections: ISection[];
  subTeam: IConfigStaticData;
  skillSetList: IskillSetList;
}

export enum TaskFieldType {
  text = 'text',
  select = 'select',
  multiselect = 'multiselect',
  boolean = 'boolean',
  nested = 'nested',
}
export interface IoptionValueCriteria {
  type: string;
  key: string[];
  sourceKey: string;
}

export interface TaskLayout {
  defaultValue?: string;
  fieldType?: TaskFieldType;
  groupId?: string;
  editable?: boolean;
  mandatory?: boolean;
  label?: string;
  errorMessage?: string;
  regex?: RegExp;
  preRequisiteField?: string;
  preRequisiteFieldValue?: string;
  addFieldAllowed?: boolean;
  parentKey?: string;
  section?: string;
  sequence?: number;
  childList?: any[];
  childFieldSet?: string[];
  optionValueCriteria?: IoptionValueCriteria;
  info?: string;
}
export interface IadditionalInfo {
  [key: string]: TaskLayout;
}
export interface IgetLayoutApiRes {
  [key: string]: IadditionalInfo;
}

export interface IgetParsedLayoutApiResponse {
  [key: string]: IgetLayoutApiRes;
}
export interface IgetParsedLayoutApiRes {
  parsedResponse: IgetParsedLayoutApiResponse;
  originalResponse: IgetLayoutApiRes;
}

export interface ITaskDefinitionFilterComponentProps {
  tmsPanelConfig: IgetConfigApiRes;
  filterApplyHandler: (data: any) => void;
  filterResetHandler: () => void;
  getTmsPanelConfigData: () => void;
  emptyTaskList: () => void;
}

export interface IQuestionAnswerManagmentProps {
  keyValue: string;
  selectedValues: any;
  tmsPanelConfig: IgetConfigApiRes;
  questionInformation: TaskLayout;
  questionAnswerHandler: (key: string, data: any) => void;
  getTmsPanelConfigData: () => void;
  havingEditPermission?: boolean;
  allowInvalidInput?: boolean;
  sectionQuestionList: IadditionalInfo;
  taskDefinitionId: number | string;
  answeredQuestionRef: any;
  answeredQuestionState: any;
  originalTaskLayoutResponse: IgetLayoutApiRes;
  showTooltip?: boolean;
}

export interface INestedQuestionAnswerManagmentProps {
  selectedValues: any;
  tmsPanelConfig: IgetConfigApiRes;
  questionInformation: TaskLayout;
  questionAnswerHandler: (key: string, data: any) => void;
  getTmsPanelConfigData: () => void;
  havingEditPermission?: boolean;
  allowInvalidInput?: boolean;
  sectionQuestionList: IadditionalInfo;
  taskDefinitionId: number | string;
  answeredQuestionRef: any;
  answeredQuestionState: any;
  originalTaskLayoutResponse: IgetLayoutApiRes;
}

export interface ISearchListPayload {
  pageSize: number;
  pageNumber: number;
}

export interface ITaskDefinition {
  taskDefinitionId: number;
  taskDefinitionName: string;
  source: string;
  teams: string[];
  creator: number;
  createdAt: number;
  approver: number;
  approvedAt: number;
  status: string;
  actions: string[];
}
export interface ISearchListApiRes {
  taskDefinitions: ITaskDefinition[];
  searchCount: number;
}
export interface ITaskDefinitionListProps {
  pageNumber: number;
  taskList: ISearchListApiRes;
  onNextPage: () => void;
  onPrevPage: () => void;
  toggleBackgroundOverlay?: any;
}

export interface ICreateUpdatePayload {
  taskDefinitionId?: number;
  [key: string]: any;
}
export interface IUpdateWorkflowPayload {
  taskDefinitionId: number | string;
  reason: string;
  workflowAction: string;
}
