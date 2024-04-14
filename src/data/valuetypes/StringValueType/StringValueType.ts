import ValueTypeBase from '../ValueTypeBase';
import { StringValueTypeConfig } from './types';

/**
 * string
 */
class StringValueType<C extends StringValueTypeConfig = StringValueTypeConfig> extends ValueTypeBase<string, C> {
  /**
   * 種別
   */
  static TYPE = 'string';
}
export default StringValueType;
