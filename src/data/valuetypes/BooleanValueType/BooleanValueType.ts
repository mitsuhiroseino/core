import ValueTypeBase from '../ValueTypeBase';
import { BooleanValueTypeConfig } from './types';

/**
 * boolean
 */
class BooleanValueType<C extends BooleanValueTypeConfig = BooleanValueTypeConfig> extends ValueTypeBase<boolean, C> {
  /**
   * 種別
   */
  static TYPE = 'boolean';
}
export default BooleanValueType;
