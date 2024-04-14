import isBoolean from 'lodash/isBoolean';
import isDate from 'lodash/isDate';
import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';
import size from 'lodash/size';

import compareBoolean from '../../boolean/compare';
import compareDate from '../../date/compare';
import preCompare from '../../lang/preCompare';
import compareNumber from '../../number/compare';
import compareString from '../../string/compare';
import { CompareOptions } from './types';

/**
 * 配列の比較を行う
 * @param value0 比較対象0
 * @param value1 比較対象1
 * @param options オプション
 * @returns 比較結果
 */
export default function compare(value0: any[], value1: any[], options: CompareOptions = {}): number {
  const { booleanOptions, dateOptions, numberOptions, stringOptions, ...rest } = options;

  // 事前にundefined,nullの為の比較を行う
  const preResult = preCompare(value0, value1, rest);
  if (preResult !== undefined) {
    return preResult;
  }

  const size0 = size(value0),
    size1 = size(value1);
  if (size0 > 0 && size1 > 0) {
    // どちらも空ではない場合
    const length = Math.min(size0, size1);
    // 各要素の比較で決める
    for (let i = 0; i < length; i++) {
      // 要素の型に応じた比較を行う
      const v0 = value0[i],
        v1 = value1[i];
      let result;
      switch (true) {
        case isBoolean(v0) && isBoolean(v1):
          result = compareBoolean(v0, v1, booleanOptions);
          break;
        case isDate(v0) && isDate(v1):
          result = compareDate(v0, v1, dateOptions);
          break;
        case isNumber(v0) && isNumber(v1):
          result = compareNumber(v0, v1, numberOptions);
          break;
        case isString(v0) && isString(v1):
          result = compareString(v0, v1, stringOptions);
          break;
        case Array.isArray(v0) && Array.isArray(v1):
          result = compare(v0, v1, options);
          break;
        default:
          result = 0;
          break;
      }
      if (result !== 0) {
        // 要素同士の比較で差があった場合は結果を返す
        return result;
      }
    }
    // 要素の比較で決まらなかった場合は要素数で決める
    return size0 - size1;
  } else {
    // 共にまたはどちらかが空の場合
    if (size0 === 0 && size1 === 0) {
      // サイズが共に0の場合は空配列の方がnull、undefindより優勢
      return value0 && value1 ? 0 : value0 ? 1 : -1;
    } else {
      // どちらかが空の場合は要素のある方が優勢
      return size0 - size1;
    }
  }
}
