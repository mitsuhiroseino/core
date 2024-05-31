import cloneDeep from 'lodash/cloneDeep';
import Base from '../../base/Base';
import initFactoryable from '../../helpers/initFactoryable';
import asArray from '../../utils/array/asArray';
import { IReader } from '../types';
import { ReadOptionsBase, ReaderConfigBase } from './types';

/**
 * リーダー
 */
abstract class ReaderBase<
    D = any,
    O extends ReadOptionsBase = ReadOptionsBase,
    C extends ReaderConfigBase = ReaderConfigBase,
  >
  extends Base<C>
  implements IReader<D, O>
{
  readonly isReader = true;

  /**
   * カテゴリー
   */
  static readonly CATEGORY = 'reader';

  /**
   * ID
   */
  readonly $id!: string;

  /**
   * 種別
   */
  readonly type!: string;

  constructor(config?: C) {
    super(config);
    initFactoryable(this, this.config);
  }

  read<R = any>(data: D, options?: O): R {
    let result: R | undefined = undefined;
    const config = this._withConfig(options);
    try {
      result = this._read(data, config);
    } catch (e) {}
    if (result === undefined) {
      // 読み込めなかった場合
      const { defaultValueFn, defaultValue } = config;
      let result;
      if (defaultValueFn) {
        // デフォルト値を作って返す
        result = defaultValueFn(data, config);
      } else if (defaultValue !== undefined) {
        // デフォルト値を返す
        result = cloneDeep(defaultValue);
      } else {
        // エラー
        throw new Error(`${data} is incorrect data.`);
      }
    }
    const resultArray = asArray(result);
    return (config.array ? resultArray : resultArray[0] || {}) as R;
  }

  /**
   * 種別毎のデータ読み込み処理
   * @param data
   * @param config
   */
  protected abstract _read(data: D, config: C): any;
}
export default ReaderBase;
