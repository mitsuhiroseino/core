import isString from 'lodash/isString';
import stubTrue from 'lodash/stubTrue';
import standardize from '../../string/standardize';
import { CreateInsensitiveObjectOptions } from './types';

/**
 * プロパティの大文字・小文字などを無視したアクセスが可能なオブジェクトを作成する
 * @param target
 * @param options
 * @returns
 */
export default function createInsensitiveObject<T extends object>(options: CreateInsensitiveObjectOptions<T> = {}) {
  const { target = {} as T, ownProperty, ...standardizeOptions } = options;
  const isTargetProperty = ownProperty
    ? (target: T, key: string | number | symbol) => target.hasOwnProperty(key)
    : stubTrue;
  const standardizedObject = {} as T;

  // オリジナルのキーと標準化されたキーのマッピング
  const keyMap: { [key: string]: string } = {};
  for (const key in target) {
    if (isTargetProperty(target, key)) {
      if (isString(key)) {
        const standardizedKey = standardize(key, standardizeOptions);
        keyMap[key] = standardizedKey;
        keyMap[standardizedKey] = standardizedKey;
        standardizedObject[standardizedKey] = target[key];
      } else {
        standardizedObject[key] = target[key];
      }
    }
  }

  // 標準化された形式が同じキーの取得
  const getKey = <K extends string | number | symbol>(target: T, key: K) => {
    if (key in target === false && isString(key)) {
      // キーを標準化
      if (key in keyMap) {
        return keyMap[key];
      } else {
        return standardize(key, standardizeOptions);
      }
    }
    return key;
  };

  return new Proxy(standardizedObject, {
    // プロパティの設定時
    set(target, key, value, receiver) {
      console.log('set', key, value);
      if (isString(key)) {
        if (key in keyMap === false) {
          // キーを標準化して保持する
          keyMap[key] = standardize(key, standardizeOptions);
        }
        key = getKey(target, key);
      }
      return Reflect.set(target, key, value, receiver);
    },
    // プロパティの取得時
    get(target, key, receiver) {
      console.log('get', key);
      return Reflect.get(target, getKey(target, key), receiver);
    },
    // プロパティの有無判定
    has(target, key) {
      console.log('has', key);
      return Reflect.has(target, getKey(target, key));
    },
    // プロパティの削除時
    deleteProperty(target, key) {
      console.log('deleteProperty', key);
      if (isString(key)) {
        const rawKey = key;
        key = getKey(target, rawKey);
        if (rawKey in keyMap) {
          // マップからキーを削除
          delete keyMap[rawKey];
          delete keyMap[key];
        }
      }
      return Reflect.deleteProperty(target, key);
    },
    // プロパティの定義取得時
    getOwnPropertyDescriptor(target, key) {
      console.log('getOwnPropertyDescriptor', key);
      return Reflect.getOwnPropertyDescriptor(target, getKey(target, key));
    },
    // プロパティの定義
    defineProperty(target: T, key: string | symbol, attributes: PropertyDescriptor) {
      console.log('defineProperty', key);
      return Reflect.defineProperty(target, getKey(target, key), attributes);
    },
  });
}
