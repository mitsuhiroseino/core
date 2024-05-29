import ComparatorBase from '../ComparatorBase';
import { OrderComparatorConfig, OrderCompareOptions } from './types';

/**
 * 任意の順番による比較
 */
class OrderComparator extends ComparatorBase<any, OrderCompareOptions, OrderComparatorConfig> {
  /**
   * 種別
   */
  static TYPE = 'order';

  protected _compare(value1: any, value2: any[], config: OrderComparatorConfig): number {
    const { order } = config,
      order1 = order.indexOf(value1),
      order2 = order.indexOf(value2);
    return order1 - order2;
  }
}
export default OrderComparator;
