import isEqual from 'lodash/isEqual';
import isEqualWith from 'lodash/isEqualWith';

import { EQUALITY_TYPE } from './constants';
import { EqualsOptions } from './types';

/**
 * 値の比較
 * @param value0 比較する値0
 * @param value1 比較する値1
 * @param options オプション
 * @returns 比較結果
 */

const EQUAL = {
    // 厳密な比較
    [EQUALITY_TYPE.STRICT]: (value0: unknown, value1: unknown, options: EqualsOptions) => {
      return value0 === value1;
    },
    // 緩い比較
    [EQUALITY_TYPE.LOOSE]: (value0: unknown, value1: unknown, options: EqualsOptions) => {
      return value0 == value1;
    },
    // 構造の比較
    [EQUALITY_TYPE.DEEP]: (value0: unknown, value1: unknown, options: EqualsOptions) => {
      if (options.customizer) {
        // customizerがある場合
        return isEqualWith(value0, value1, options.customizer as any);
      } else {
        return isEqual(value0, value1);
      }
    },
  },
  EQUAL_WITH_CUSTOMIZER = {
    // 厳密な比較
    [EQUALITY_TYPE.STRICT]: (value0: unknown, value1: unknown, options: EqualsOptions) => {
      const customizer: any = options.customizer,
        result = customizer(value0, value1);
      if (result == null) {
        return value0 === value1;
      } else {
        return result;
      }
    },
    // 緩い比較
    [EQUALITY_TYPE.LOOSE]: (value0: unknown, value1: unknown, options: EqualsOptions) => {
      const customizer: any = options.customizer,
        result = customizer(value0, value1);
      if (result == null) {
        return value0 == value1;
      } else {
        return result;
      }
    },
    // 構造の比較
    [EQUALITY_TYPE.DEEP]: (value0: unknown, value1: unknown, options: EqualsOptions) => {
      const customizer: any = options.customizer;
      return isEqualWith(value0, value1, customizer);
    },
  };

export default function equals(value0: unknown, value1: unknown, options: EqualsOptions = {}): boolean {
  const { equalityType = EQUALITY_TYPE.STRICT, customizer } = options;
  if (customizer) {
    // customizerありの比較
    return EQUAL_WITH_CUSTOMIZER[equalityType](value0, value1, options);
  } else {
    // 比較
    return EQUAL[equalityType](value0, value1, options);
  }
}
