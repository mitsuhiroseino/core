import RelationalOperatorBase from '../RelationalOperatorBase';
import { LessThanOrEqualExamineOptions, LessThanOrEqualRelationalOperatorConfig } from './types';

/**
 * コンフィグ
 */
class LessThanOrEqualRelationalOperator<V = any> extends RelationalOperatorBase<
  V,
  LessThanOrEqualExamineOptions<V>,
  LessThanOrEqualRelationalOperatorConfig<V>
> {
  /**
   * 種別
   */
  static TYPE = 'le';

  protected _examine(target: V, config: LessThanOrEqualRelationalOperatorConfig<V>): boolean {
    return target <= config.value;
  }
}
export default LessThanOrEqualRelationalOperator;
