/**
 * 比較時の等価種別
 */
export const EQUALITY_TYPE = {
  /**
   * `===`による比較
   */
  STRICT: 'strict',

  /**
   * `==`による比較
   */
  LOOSE: 'loose',

  /**
   * `lodash.isEqual()`による比較
   */
  DEEP: 'deep',
} as const;
