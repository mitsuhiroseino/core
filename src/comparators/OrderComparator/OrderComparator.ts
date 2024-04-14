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

  protected _compare(value0: any, value1: any[], config: OrderComparatorConfig): number {
    const { order } = config,
      order0 = order.indexOf(value0),
      order1 = order.indexOf(value1);
    return order0 - order1;
  }
}
export default OrderComparator;
