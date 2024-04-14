import ValueTypeBase from '../ValueTypeBase';
import { NumberValueTypeConfig } from './types';

/**
 * number
 */
class NumberValueType<C extends NumberValueTypeConfig = NumberValueTypeConfig> extends ValueTypeBase<number, C> {
  /**
   * 種別
   */
  static TYPE = 'number';
}
export default NumberValueType;
