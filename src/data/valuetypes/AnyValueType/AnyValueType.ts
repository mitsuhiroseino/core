import ValueTypeBase from '../ValueTypeBase';
import { AnyValueTypeConfig } from './types';

/**
 * 任意の値取得クラス
 */
class AnyValueType<V = any> extends ValueTypeBase<V, AnyValueTypeConfig> {
  /**
   * 種別
   */
  static TYPE = 'any';
}
export default AnyValueType;
