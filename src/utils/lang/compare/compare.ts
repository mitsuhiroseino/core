import isBoolean from 'lodash/isBoolean';
import isDate from 'lodash/isDate';
import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';

import compareArray from '../../array/compare';
import compareBoolean from '../../boolean/compare';
import compareDate from '../../date/compare';
import compareNumber from '../../number/compare';
import compareString from '../../string/compare';
import preCompare from '../preCompare';
import { CompareOptions } from './types';

/**
 * 値の比較を行う
 * @param value0 比較対象0
 * @param value1 比較対象1
 * @param options オプション
 * @returns 比較結果
 */
export default function compare(value0: any, value1: any, options: CompareOptions = {}): number {
  const { booleanOptions, dateOptions, numberOptions, stringOptions, ...rest } = options;

  // 事前にundefined,nullの為の比較を行う
  const preResult = preCompare(value0, value1, rest);
  if (preResult !== undefined) {
    return preResult;
  }

  // null、undefined以外の比較
  switch (true) {
    case isBoolean(value0) && isBoolean(value1):
      return compareBoolean(value0, value1, booleanOptions);
    case isDate(value0) && isDate(value1):
      return compareDate(value0, value1, dateOptions);
    case isNumber(value0) && isNumber(value1):
      return compareNumber(value0, value1, numberOptions);
    case isString(value0) && isString(value1):
      return compareString(value0, value1, stringOptions);
    case Array.isArray(value0) && Array.isArray(value1):
      return compareArray(value0, value1, options);
    default:
      return 0;
  }
}
