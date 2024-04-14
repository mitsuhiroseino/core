import preCompare from '../../lang/preCompare';
import { CompareOptions } from './types';

/**
 * 数値の比較を行う
 * @param value0 比較対象0
 * @param value1 比較対象1
 * @param options オプション
 * @returns 比較結果
 */
export default function compare(value0: number, value1: number, options: CompareOptions = {}): number {
  // nullかundefinedだった場合の比較
  const preResult = preCompare(value0, value1, options);
  if (preResult !== undefined) {
    return preResult;
  }

  // null、undefined以外の比較
  return value0 - value1;
}
