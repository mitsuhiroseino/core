import RelationalOperatorBase from '../RelationalOperatorBase';
import { GreaterThanExamineOptions, GreaterThanRelationalOperatorConfig } from './types';

/**
 * コンフィグ
 */
class GreaterThanRelationalOperator<V = any> extends RelationalOperatorBase<
  V,
  GreaterThanExamineOptions<V>,
  GreaterThanRelationalOperatorConfig<V>
> {
  /**
   * 種別
   */
  static TYPE = 'gt';

  protected _examine(target: V, config: GreaterThanRelationalOperatorConfig<V>): boolean {
    return target > config.value;
  }
}
export default GreaterThanRelationalOperator;
