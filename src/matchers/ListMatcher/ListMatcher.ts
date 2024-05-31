import isPlainObject from 'lodash/isPlainObject';
import MatcherBase from '../MatcherBase/MatcherBase';
import { ListMatchOptions, ListMatcherConfig } from './types';

/**
 * 値1がリスト(値2)に存在するか
 */
class ListMatcher extends MatcherBase<any, ListMatchOptions, ListMatcherConfig> {
  /**
   * 種別
   */
  static TYPE = 'list';

  protected _match(value1: any, value2: any, config: ListMatcherConfig): boolean {
    if (Array.isArray(value2)) {
      return value2.includes(value1);
    } else if (isPlainObject(value2)) {
      return value1 in value2;
    }
    return false;
  }
}
export default ListMatcher;
