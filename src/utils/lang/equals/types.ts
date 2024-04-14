import { EQUALITY_TYPE } from './constants';

/**
 * 比較時の等価種別
 */
export type EqualityType = (typeof EQUALITY_TYPE)[keyof typeof EQUALITY_TYPE];

/**
 * equals関数のオプション
 */
export type EqualsOptions = {
  /**
   * - 未指定 or strict: 値0 === 値1
   * - loosely: 値0 == 値1
   * - deeply: 値0 と 値1の構造が同じであること
   */
  equalityType?: EqualityType;

  /**
   * equalityType='deeply'の場合: lodash.isEqualWithのcustomizer
   * equalityType='deeply'以外の場合: value0,value1のみ有効。boolean以外の値を返した際には通常の比較を行う
   * @param value0
   * @param value1
   * @param indexOrKey
   * @param value0Parent
   * @param value1Parent
   * @param stack
   * @returns
   */
  customizer?: (
    value0: any,
    value1: any,
    indexOrKey?: string | number | symbol | undefined,
    value0Parent?: any,
    value1Parent?: any,
    stack?: any,
  ) => boolean | void;
};
