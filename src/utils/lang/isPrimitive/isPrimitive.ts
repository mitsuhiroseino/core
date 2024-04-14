/**
 * 値がプリミティブか判定します
 * @param value 値
 * @returns
 */
export default function isPrimitive(value: unknown): boolean {
  if (value === null || value === undefined) {
    return true;
  }
  const type = typeof value;
  return type === 'string' || type === 'number' || type === 'boolean' || type === 'bigint' || type === 'symbol';
}
