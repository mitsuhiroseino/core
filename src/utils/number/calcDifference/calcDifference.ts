import isNumber from 'lodash/isNumber';

import editTypedValue from '../../lang/editTypedValue';

/**
 * 値の差を算出する
 * @param value0 値0
 * @param value1 値1
 * @returns 結果
 */
export default function calcDifference(
  value0: { [key: string]: any } | number[] | number,
  value1: { [key: string]: any } | number[] | number,
): any {
  return editTypedValue<number>(value0, value1, (v0, v1) => v0 - v1, isNumber);
}
