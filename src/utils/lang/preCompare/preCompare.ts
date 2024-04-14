import getTypeOrder from '../getTypeOrder';
import { PreCompareOptions } from './types';

/**
 * 以下の比較結果が出た場合のみ戻り値を返す
 * - インスタンスが同じ
 * - 何れかまたは両方がnullまたはundefined
 * @param value0 比較対象0
 * @param value1 比較対象1
 * @param options オプション
 * @returns 比較結果
 */
export default function preCompare(value0: any, value1: any, options: PreCompareOptions = {}): number | undefined {
  if (value0 === value1) {
    // 同じインスタンス
    return 0;
  }
  if (value0 == null || value1 == null) {
    // どちらかまたは共にnullかundefinedの場合
    const order0 = getTypeOrder(value0, options),
      order1 = getTypeOrder(value1, options);
    return order0 - order1;
  }
  return;
}
