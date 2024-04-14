import Base from '../../base/Base';
import initFactoryable from '../../helpers/initFactoryable';
import { IComparator } from '../types';
import { ComparatorConfigBase, CompareOptionsBase } from './types';

/**
 * 値の比較をする
 */
export default abstract class ComparatorBase<
    V = any,
    O extends CompareOptionsBase = CompareOptionsBase,
    C extends ComparatorConfigBase = ComparatorConfigBase,
  >
  extends Base<C>
  implements IComparator<O>
{
  readonly isComparator = true;

  /**
   * カテゴリー
   */
  static readonly CATEGORY = 'comparator';

  /**
   * ID
   */
  readonly $id!: string;

  /**
   * 種別
   */
  readonly type!: string;

  constructor(config?: C) {
    super(config);
    initFactoryable(this, this.config);
  }

  /**
   * 2つの値の比較
   * @param value0 値0
   * @param value1 値1
   * @param options オプション
   * @returns 比較結果
   */
  compare(value0: V, value1: V, options?: O): number {
    const me = this,
      config = me._withConfig(options);
    return me._compare(value0, value1, config);
  }

  /**
   * 2つの値の比較
   * @param value0 値0
   * @param value1 値1
   * @param config コンフィグ
   * @returns 比較結果
   */
  protected abstract _compare(value0: V, value1: V, config: C): number;
}
