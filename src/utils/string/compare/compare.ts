import preCompare from '../../lang/preCompare';
import standardize from '../standardize';
import { CompareOptions } from './types';

/**
 * 2つの文字列の比較を行う
 * @param value0 文字列0
 * @param value1 文字列1
 * @param options オプション
 * @returns
 */
export default function compare(value0: string, value1: string, options: CompareOptions = {}): number {
  // nullかundefinedだった場合の比較
  const preResult = preCompare(value0, value1, options);
  if (preResult !== undefined) {
    return preResult;
  }

  // null、undefined以外の比較
  // 値を標準化
  const val0 = standardize(value0, options),
    val1 = standardize(value1, options);
  // 比較
  return val0 === val1 ? 0 : val0 > val1 ? 1 : -1;
}
