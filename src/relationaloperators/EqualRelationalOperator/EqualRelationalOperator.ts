import RelationalOperatorBase from '../RelationalOperatorBase';
import { EqualExamineOptions, EqualRelationalOperatorConfig } from './types';

/**
 * コンフィグ
 */
class EqualRelationalOperator<V = any> extends RelationalOperatorBase<
  V,
  EqualExamineOptions<V>,
  EqualRelationalOperatorConfig<V>
> {
  /**
   * 種別
   */
  static TYPE = 'eq';

  protected _examine(target: V, config: EqualRelationalOperatorConfig<V>): boolean {
    return target === config.value;
  }
}
export default EqualRelationalOperator;
