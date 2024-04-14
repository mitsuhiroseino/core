import ValueTypeBase from '../ValueTypeBase';
import { ObjectValueTypeConfig } from './types';

/**
 * Object
 */
class ObjectValueType<C extends ObjectValueTypeConfig = ObjectValueTypeConfig> extends ValueTypeBase<any, C> {
  /**
   * 種別
   */
  static TYPE = 'object';
}
export default ObjectValueType;
