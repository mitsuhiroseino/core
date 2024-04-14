import preCompare from '../../lang/preCompare';
import format from '../format';
import { CompareOptions } from './types';

/**
 * 指定のフォーマットを基に日時の比較を行う
 * @param value0 比較対象0
 * @param value1 比較対象1
 * @param options オプション
 * @returns 比較結果
 */
export default function compare(value0: Date, value1: Date, options: CompareOptions = {}): number {
  // nullかundefinedだった場合の比較
  const preResult = preCompare(value0, value1, options);
  if (preResult !== undefined) {
    return preResult;
  }

  // null、undefined以外の比較
  let val0, val1;
  if (options.format) {
    // フォーマットした値で比較
    val0 = format(value0, options) || '';
    val1 = format(value1, options) || '';
    return val0 === val1 ? 0 : val0 > val1 ? 1 : -1;
  } else {
    // エポック秒で比較
    val0 = value0 ? value0.getTime() : 0;
    val1 = value1 ? value1.getTime() : 0;
    return val0 - val1;
  }
}
