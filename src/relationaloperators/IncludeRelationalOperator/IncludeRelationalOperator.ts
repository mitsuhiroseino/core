import RelationalOperatorBase from '../RelationalOperatorBase';
import { IncludeExamineOptions, IncludeRelationalOperatorConfig } from './types';

/**
 * コンフィグ
 */
class IncludeRelationalOperator<V extends string = string> extends RelationalOperatorBase<
  V,
  IncludeExamineOptions<V>,
  IncludeRelationalOperatorConfig<V>
> {
  /**
   * 種別
   */
  static TYPE = 'include';

  protected _examine(target: V, config: IncludeRelationalOperatorConfig<V>): boolean {
    return config.value.includes(target);
  }
}
export default IncludeRelationalOperator;
