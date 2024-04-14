import Factory from '../../factory/Factory';
import { IValueRule, ValueRuleConfig } from './types';

const FACTORY = new Factory<IValueRule, ValueRuleConfig>({
  category: 'valuerule',
});
export default FACTORY;
