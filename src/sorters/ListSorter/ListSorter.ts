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

  protected _compare(value1: any, value2: any, config: ListSorterConfig): number {
    const order = config.order,
      index1 = order.indexOf(value1),
      order1 = index1 > -1 ? index1 : Number.MAX_VALUE,
      index2 = order.indexOf(value2),
      order2 = index2 > -1 ? index2 : Number.MAX_VALUE;
    return order1 - order2;
  }
}
