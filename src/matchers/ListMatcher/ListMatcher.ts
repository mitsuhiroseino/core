import isPlainObject from 'lodash/isPlainObject';

import MatcherBase from '../MatcherBase/MatcherBase';
import { ListMatchOptions, ListMatcherConfig } from './types';

/**
 * 値0がリスト(値1)に存在するか
 */
class ListMatcher extends MatcherBase<any, ListMatchOptions, ListMatcherConfig> {
  /**
   * 種別
   */
  static TYPE = 'list';

  protected _match(value0: any, value1: any, config: ListMatcherConfig): boolean {
    if (Array.isArray(value1)) {
      return value1.includes(value0);
    } else if (isPlainObject(value1)) {
      return value0 in value1;
    }
    return false;
  }
}
export default ListMatcher;
