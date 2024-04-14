import RelationalOperatorBase from '../RelationalOperatorBase';
import { LessThanExamineOptions, LessThanRelationalOperatorConfig } from './types';

/**
 * コンフィグ
 */
class LessThanRelationalOperator<V = any> extends RelationalOperatorBase<
  V,
  LessThanExamineOptions<V>,
  LessThanRelationalOperatorConfig<V>
> {
  /**
   * 種別
   */
  static TYPE = 'lt';

  protected _examine(target: V, config: LessThanRelationalOperatorConfig<V>): boolean {
    return target < config.value;
  }
}
export default LessThanRelationalOperator;
