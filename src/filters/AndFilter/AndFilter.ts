import CompoundFilterBase from '../CompoundFilterBase';
import { AndFilterConfig, AndMatchOptions } from './types';

/**
 * 子要素の全てがtrueの場合にtrueを返すフィルター
 */
export default class AndFilter extends CompoundFilterBase<AndMatchOptions, AndFilterConfig> {
  /**
   * 種別
   */
  static TYPE = 'and';

  /**
   * 条件に一致するか
   * @param value 検証対象
   * @returns 検証結果
   */
  protected _match(value: any): boolean {
    return this._items.every((filter) => filter.match(value));
  }
}
