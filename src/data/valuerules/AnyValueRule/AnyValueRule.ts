import TypedValueRule from '../TypedValueRule';
import { AnyValueRuleConfig } from './types';

/**
 * 任意のデータ種別のフィールド
 */
class AnyValueRule<V = any, C extends AnyValueRuleConfig = AnyValueRuleConfig> extends TypedValueRule<V, C> {
  /**
   * 種別
   */
  static TYPE = 'any';

  constructor(config: C) {
    super({ ...config, valueType: 'any' });
  }
}
export default AnyValueRule;
