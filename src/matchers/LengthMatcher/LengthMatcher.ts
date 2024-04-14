import size from 'lodash/size';

import match from '../../utils/number/match';
import MatcherBase from '../MatcherBase';
import { LengthMatchOptions, LengthMatcherConfig } from './types';

/**
 * 文字列、配列の長さ、オブジェクトの要素数の比較
 */
class LengthMatcher extends MatcherBase<any, LengthMatchOptions, LengthMatcherConfig> {
  /**
   * 種別
   */
  static TYPE = 'length';

  protected _match(value0: any, value1: any, config: LengthMatcherConfig): boolean {
    return match(size(value0), size(value1), config);
  }
}
export default LengthMatcher;
