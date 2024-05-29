import { IComparator } from '../../comparators';
import SorterBase from '../SorterBase';
import { ComparatorCompareOptionsBase, ComparatorSorterConfigBase } from './types';

/**
 * コンパレーターを使用したソーターの基底クラス
 */
export default abstract class ComparatorSorterBase<
  V = any,
  O extends ComparatorCompareOptionsBase = ComparatorCompareOptionsBase,
  C extends ComparatorSorterConfigBase = ComparatorSorterConfigBase,
> extends SorterBase<V, O, C> {
  /**
   * コンパレーター
   */
  private _comparator?: IComparator;

  protected get comparator() {
    if (this._comparator == null) {
      // コンストラクターの時点ではabstractになっているtypeが初期化されていない為、
      // comparatorを使うタイミングでインスタンスを取得
      this._comparator = this._createComparator(this.config);
    }
    return this._comparator;
  }

  protected abstract _createComparator(config: C): IComparator;

  /**
   * 条件に一致するか
   * @param value 検証対象
   * @returns 検証結果
   */
  protected _compare(value1: V, value2: V, config: C): number {
    return this.comparator?.compare(value1, value2) || 0;
  }
}
