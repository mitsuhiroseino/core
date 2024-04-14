import Base from '../../base/Base';
import initFactoryable from '../../helpers/initFactoryable';
import { ExamineOptions, IRelationalOperator } from '../types';
import { ExamineOptionsBase, RelationalOperatorConfigBase } from './types';

/**
 * リーダー
 */
abstract class RelationalOperatorBase<
    V = any,
    O extends ExamineOptionsBase<V> = ExamineOptionsBase<V>,
    C extends RelationalOperatorConfigBase<V> = RelationalOperatorConfigBase<V>,
  >
  extends Base<C>
  implements IRelationalOperator<V>
{
  readonly isRelationalOperator = true;

  /**
   * カテゴリー
   */
  static readonly CATEGORY = 'relationaloperator';

  /**
   * ID
   */
  readonly $id!: string;

  /**
   * 種別
   */
  readonly type!: string;

  constructor(config: C) {
    super(config);
    initFactoryable(this, this.config);
  }

  examine(target: V, options: O): boolean {
    const config = this._withConfig(options);
    return this._examine(target, config);
  }

  protected abstract _examine(target: V, config: C): boolean;
}
export default RelationalOperatorBase;
