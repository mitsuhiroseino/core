import applyIf from '../applyIf';
import { AsAsyncOptions } from './types';

/**
 * 非同期の関数として実行する
 * @param fn
 * @param args
 */
export default function asAsync<A extends unknown[], R>(
  fn: (...args: A) => R,
  args?: A,
  options: AsAsyncOptions = {},
): Promise<R> {
  const { wait } = options;
  let executor;
  if (wait == null) {
    // 待たずに実行
    executor = (resolve, reject) => {
      try {
        resolve(applyIf(fn, args));
      } catch (e) {
        reject(e);
      }
    };
  } else {
    // 指定時間待ってから実行
    executor = (resolve, reject) => {
      setTimeout(() => {
        try {
          resolve(applyIf(fn, args));
        } catch (e) {
          reject(e);
        }
      }, wait);
    };
  }
  return new Promise<R>(executor);
}
