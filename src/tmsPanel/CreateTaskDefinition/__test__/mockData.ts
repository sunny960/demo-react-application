import {
  parseGetConfigApiResponse,
  parseLayoutApiResponse,
} from 'modules/tmsPanel/utils';
import { getTmsPanelConfigRes } from 'services/mockApi/tms/getTmsPanelConfig';
import { getTmsPanelLayoutRes } from 'services/mockApi/tms/getTmsPanelLayout';

export const PanelLayoutRes = parseLayoutApiResponse(
  getTmsPanelLayoutRes('create_screen'),
);

export const configRes = parseGetConfigApiResponse(getTmsPanelConfigRes);

export const createDataRes = {
  taskDefinitionId: 357,
  taskDefinitionName: 'test',
  displayName: 'Test',
  source: 'Testing',
  teams: ['EDC Online Sales'],
  inputSuccessCriteria: ['Winback'],
  incentivePoints: 5.0,
  incentiveValue: 6.0,
  maxAttempt: 3,
  sla: 4.0,
  skills: ['fse1skill1', 'Sales FSE', 'adminPanelTestSkill'],
  inventoryCheckApplicable: [],
  additionalInfo: {
    sla_status: false,
    availability_check: false,
    allocate_to_tl: false,
    allocate_to_merchant_relation_agent: false,
    can_be_closed_by_tl: false,
    return_to_mhd: false,
    zone_mapping_check: false,
    acceptance_required: false,
    reschedule_allowed: false,
    immediate_notification_on_allocation: false,
    allocate_to_courier: false,
    to_be_shown_after_sla_expired: false,
    pendency_check: false,
  },
  status: 'DRAFT',
  actions: ['edit', 'submit', 'view', 'search'],
};
