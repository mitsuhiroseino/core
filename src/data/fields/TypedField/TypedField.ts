import uuid from '../../../utils/data/uuid';
import { TypedValueRuleConfig } from '../../valuerules/TypedValueRule';
import FieldBase from '../FieldBase';
import { TypedFieldConfig, TypedFieldEventHandlers } from './types';

/**
 * データ種別を持つフィールド
 */
class TypedField<
  V = any,
  H extends TypedFieldEventHandlers<V> = TypedFieldEventHandlers<V>,
  C extends TypedFieldConfig<V, H> = TypedFieldConfig<V, H>,
> extends FieldBase<V, H, C> {
  /**
   * 種別
   */
  static TYPE = 'typed';

  constructor(config: C) {
    super(config);
  }

  protected _getValueRuleConfig(): string | TypedValueRuleConfig {
    const { name, valueType } = this.config;
    if (valueType) {
      return { name: name || uuid(), type: 'typed', valueType: valueType };
    } else {
      return 'noop';
    }
  }
}
export default TypedField;
