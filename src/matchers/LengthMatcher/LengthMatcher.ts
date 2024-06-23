import match from '@visue/utils/number/match';
import size from 'lodash/size';
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

  protected _match(value1: any, value2: any, config: LengthMatcherConfig): boolean {
    return match(size(value1), size(value2), config);
  }
}
export default LengthMatcher;
