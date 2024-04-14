import RelationalOperatorBase from '../RelationalOperatorBase';
import { NotEqualExamineOptions, NotEqualRelationalOperatorConfig } from './types';

/**
 * コンフィグ
 */
class NotEqualRelationalOperator<V = any> extends RelationalOperatorBase<
  V,
  NotEqualExamineOptions<V>,
  NotEqualRelationalOperatorConfig<V>
> {
  /**
   * 種別
   */
  static TYPE = 'ne';

  protected _examine(target: V, config: NotEqualRelationalOperatorConfig<V>): boolean {
    return target !== config.value;
  }
}
export default NotEqualRelationalOperator;
