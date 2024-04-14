import preCompare from '../../lang/preCompare';
import { CompareOptions } from './types';

/**
 * 真偽値の比較を行う
 * @param value0 比較対象0
 * @param value1 比較対象1
 * @param options オプション
 * @returns 比較結果
 */
export default function compare(value0: boolean, value1: boolean, options: CompareOptions = {}): number {
  // nullかundefinedだった場合の比較
  const preResult = preCompare(value0, value1, options);
  if (preResult !== undefined) {
    return preResult;
  }

  // null、undefined以外の比較
  const preferFalse = options.preferFalse;
  let val0 = value0 ? 1 : 0,
    val1 = value1 ? 1 : 0;
  if (preferFalse) {
    // 0と1を反転
    val0 = -~-val0;
    val1 = -~-val1;
  }
  return val0 - val1;
}
