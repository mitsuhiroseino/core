import CompoundMatcherBase from '../CompoundMatcherBase';
import { OrMatchOptions, OrMatcherConfig } from './types';

/**
 * 何れかの条件に一致するか
 */
class OrMatcher extends CompoundMatcherBase<OrMatchOptions, OrMatcherConfig> {
  /**
   * 種別
   */
  static TYPE = 'or';

  protected _match(value0: any, value1: any, config: OrMatcherConfig): boolean {
    return this._items.some((item) => item.match(value0, value1));
  }
}
export default OrMatcher;
