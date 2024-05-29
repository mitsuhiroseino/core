import CompoundMatcherBase from '../CompoundMatcherBase';
import { AndMatchOptions, AndMatcherConfig } from './types';

/**
 * すべての条件に一致するか
 */
class AndMatcher extends CompoundMatcherBase<AndMatchOptions, AndMatcherConfig> {
  /**
   * 種別
   */
  static TYPE = 'and';

  protected _match(value1: any, value2: any, config: AndMatcherConfig): boolean {
    return this._items.every((item) => item.match(value1, value2));
  }
}
export default AndMatcher;
