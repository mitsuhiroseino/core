import SorterBase from '../SorterBase';
import { ListCompareOptions, ListSorterConfig } from './types';

/**
 * 任意の順番で設定されたリストに沿った比較
 */
export default class ListSorter extends SorterBase<any, ListCompareOptions, ListSorterConfig> {
  /**
   * 種別
   */
  static TYPE = 'list';

  protected _compare(value0: any, value1: any, config: ListSorterConfig): number {
    const order = config.order,
      index0 = order.indexOf(value0),
      order0 = index0 > -1 ? index0 : Number.MAX_VALUE,
      index1 = order.indexOf(value1),
      order1 = index1 > -1 ? index1 : Number.MAX_VALUE;
    return order0 - order1;
  }
}
