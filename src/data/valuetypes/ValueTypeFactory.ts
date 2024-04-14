import Factory from '../../factory/Factory';
import { IValueType, ValueTypeConfig } from './types';

const FACTORY = new Factory<IValueType, ValueTypeConfig>({
  category: 'valuetype',
});
export default FACTORY;
