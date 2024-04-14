import isBoolean from 'lodash/isBoolean';
import isDate from 'lodash/isDate';
import isFunction from 'lodash/isFunction';
import isNumber from 'lodash/isNumber';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';
import size from 'lodash/size';

import { DIFFERENCE_TYPE, NO_VALUE, VALUE_TYPE } from './constants';
import { CompareResult, DifferenceType, ValueType } from './types';

/**
 * オブジェクト
 */
type UnknownObject = {
  [key: string]: unknown;
};

/**
 * 配列
 */
type UnknownArray = unknown[];

/**
 * 値の比較を行います。比較した結果は要素毎にObject形式で返却します。
 * 要素毎の結果の内容:
 *
 *  - value0: value0の値
 *  - type0: value0の値の型
 *  - value1: value1の値
 *  - type1: value1の値の型
 *  - result: 比較結果
 *     - null: 一致
 *     - 'value': 値の不一致
 *     - 'type': 型の不一致
 *     - 'key': キーの不一致(要素の有無)
 *     - 'size': 要素数の不一致(value0,value1がオブジェクト、配列の場合のみ)
 *     - 'children': 子要素に不一致あり
 *  - children: 子要素の比較結果(value0,value1がオブジェクト、配列の場合のみ)
 *
 * @param value0 比較対象0
 * @param value1 比較対象1
 * @return 比較結果
 */
export default function compare(value0: unknown, value1: unknown): CompareResult {
  let difference: DifferenceType = DIFFERENCE_TYPE.NO_DIFFERENCE,
    children: CompareResult[] | null = null;
  const type0: ValueType = typeOf(value0),
    type1: ValueType = typeOf(value1);

  if (value0 !== NO_VALUE && value1 !== NO_VALUE) {
    // 両方値がある場合のみ比較
    if (type0 === type1) {
      // 型が同じ
      if (type0 === VALUE_TYPE.OBJECT) {
        // object
        const object0 = value0 as UnknownObject,
          object1 = value1 as UnknownObject;
        if (size(object0) !== size(object1)) {
          // 要素数の不一致
          difference = DIFFERENCE_TYPE.SIZE;
        }
        // 子要素も比較
        children = _compareObject(object0, object1);
      } else if (type0 === VALUE_TYPE.ARRAY) {
        // 配列
        const array0 = value0 as UnknownArray,
          array1 = value1 as UnknownArray;
        if (array0.length !== array1.length) {
          // 要素数の不一致
          difference = DIFFERENCE_TYPE.SIZE;
        }
        // 子要素も比較
        children = _compareArray(array0, array1);
      } else if (type0 === VALUE_TYPE.DATE) {
        // 日付
        const date0 = value0 as Date,
          date1 = value1 as Date;
        if (date0.getTime() !== date1.getTime()) {
          // 値の不一致
          difference = DIFFERENCE_TYPE.VALUE;
        }
      } else {
        // その他はインスタンスの比較
        if (value0 !== value1) {
          // 値の不一致
          difference = DIFFERENCE_TYPE.VALUE;
        }
      }
    } else {
      // 型の不一致
      difference = DIFFERENCE_TYPE.TYPE;
    }
  } else {
    // どちらかがない場合
    difference = DIFFERENCE_TYPE.KEY;
  }
  // 比較結果の作成
  const compareResult: CompareResult = {
    value0,
    type0,
    value1,
    type1,
    difference,
  };
  if (children) {
    // 子要素あり
    compareResult.children = children;
    if (
      compareResult.difference === DIFFERENCE_TYPE.NO_DIFFERENCE &&
      children.some((child) => child.difference !== DIFFERENCE_TYPE.NO_DIFFERENCE)
    ) {
      // 子要素に不一致あり
      compareResult.difference = DIFFERENCE_TYPE.CHILDREN;
    }
  }
  return compareResult;
}

/**
 * オブジェクト配下の要素を比較します
 * 1. object0に存在する要素をobject1の要素と比較
 * 2. object1のみに存在する要素をobject0と比較(全てキー不一致)
 *
 * @param object0 比較対象0
 * @param object1 比較対象1
 * @return 比較結果
 */
function _compareObject(object0: UnknownObject, object1: UnknownObject): CompareResult[] {
  const results: CompareResult[] = [],
    rest1 = { ...object1 };

  // object0 -> object1の比較
  for (const key in object0) {
    // 値を取得
    const value0 = object0[key],
      value1 = key in object1 ? object1[key] : NO_VALUE;
    // 比較
    const result = compare(value0, value1);
    result.key = key;
    results.push(result);
    delete rest1[key];
  }

  // object1のみに存在する要素の比較
  for (const key in rest1) {
    // 比較
    // object0には無い要素の比較なので第一引数は必ずNO_VALUE
    const result = compare(NO_VALUE, object1[key]);
    result.key = key;
    results.push(result);
  }
  // 結果をキー順にソートして返す
  return results.sort((result0, result1) => {
    const key0: any = result0.key,
      key1: any = result1.key;
    return key0 > key1 ? 1 : -1;
  });
}

/**
 * 配列配下の要素を比較します
 * 1. array0に存在する要素をarray1の要素と比較
 * 2. array1のみに存在する要素をarray0と比較(全てキー不一致)
 *
 * @param array0 比較対象0
 * @param array1 比較対象1
 * @return 比較結果
 */
function _compareArray(array0: UnknownArray, array1: UnknownArray): CompareResult[] {
  const results: CompareResult[] = [],
    length0 = array0.length,
    length1 = array1.length;

  // array0 -> array1の比較
  for (let index = 0; index < length0; index++) {
    // 値を取得
    const value0 = array0[index],
      value1 = index < length1 ? array1[index] : NO_VALUE;
    // 比較
    const result = compare(value0, value1);
    result.key = index;
    results.push(result);
  }

  // array1のみに存在する要素の比較
  for (let index = length0; index < length1; index++) {
    // 比較
    // array0には無い要素の比較なので第一引数は必ずNO_PROPERTY
    const result = compare(NO_VALUE, array1[index]);
    result.key = index;
    results.push(result);
  }

  return results;
}

/**
 * 値種別を取得する
 * @param value
 * @returns
 */
function typeOf(value: unknown): ValueType {
  if (value === NO_VALUE) {
    return VALUE_TYPE.NO_TYPE;
  } else if (value === undefined) {
    return VALUE_TYPE.UNDEFINED;
  } else if (value === null) {
    return VALUE_TYPE.NULL;
  } else if (isString(value)) {
    return VALUE_TYPE.STRING;
  } else if (isNumber(value)) {
    return VALUE_TYPE.NUMBER;
  } else if (isBoolean(value)) {
    return VALUE_TYPE.BOOLEAN;
  } else if (isDate(value)) {
    return VALUE_TYPE.DATE;
  } else if (Array.isArray(value)) {
    return VALUE_TYPE.ARRAY;
  } else if (isPlainObject(value)) {
    return VALUE_TYPE.OBJECT;
  } else if (isFunction(value)) {
    return VALUE_TYPE.FUNCTION;
  } else {
    return VALUE_TYPE.UNKNOWN;
  }
}
