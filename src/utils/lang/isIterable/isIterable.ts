/**
 * イテレーターを持つインスタンスか判定します
 * @param value
 * @returns
 */
export default function isIterable(value: any): boolean {
  return value != null && !!value[Symbol.iterator];
}
