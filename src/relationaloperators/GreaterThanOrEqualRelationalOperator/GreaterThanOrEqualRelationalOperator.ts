import RelationalOperatorBase from '../RelationalOperatorBase';
import { GreaterThanOrEqualExamineOptions, GreaterThanOrEqualRelationalOperatorConfig } from './types';

/**
 * コンフィグ
 */
class GreaterThanOrEqualRelationalOperator<V = any> extends RelationalOperatorBase<
  V,
  GreaterThanOrEqualExamineOptions<V>,
  GreaterThanOrEqualRelationalOperatorConfig<V>
> {
  /**
   * 種別
   */
  static TYPE = 'ge';

  protected _examine(target: V, config: GreaterThanOrEqualRelationalOperatorConfig<V>): boolean {
    return target >= config.value;
  }
}
export default GreaterThanOrEqualRelationalOperator;
