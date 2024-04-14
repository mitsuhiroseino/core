import CompoundFilterBase from '../CompoundFilterBase';
import { OrFilterConfig, OrMatchOptions } from './types';

/**
 * 子要素の何れかがtrueの場合にtrueを返すフィルター
 */
export default class OrFilter extends CompoundFilterBase<OrMatchOptions, OrFilterConfig> {
  /**
   * 種別
   */
  static TYPE = 'or';

  /**
   * 条件に一致するか
   * @param value 検証対象
   * @returns 検証結果
   */
  protected _match(value: any): boolean {
    return this._items.some((filter) => filter.match(value));
  }
}
