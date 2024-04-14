import Base from '../../base/Base';
import initFactoryable from '../../helpers/initFactoryable';
import toValidValue from '../../utils/lang/toValidValue';
import { IParser } from '../types';
import { ParseOptionsBase, ParserConfigBase } from './types';

export default abstract class ParserBase<
    R = any,
    O extends ParseOptionsBase = ParseOptionsBase,
    C extends ParserConfigBase = ParserConfigBase,
  >
  extends Base<C>
  implements IParser<R, O>
{
  readonly isParser = true;

  /**
   * カテゴリー
   */
  static readonly CATEGORY = 'parser';

  /**
   * コンフィグ以外の状態を持たない
   */
  static readonly STATELESS = true;

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

  parse(value: any, options?: O): R {
    const config = this._withConfig(options),
      validValue = toValidValue(value, config);

    if (validValue !== value) {
      // undefined または nullの場合の値が指定されていた場合
      return validValue;
    }

    let error;
    try {
      // パースを実行
      const result = this._parse(value, config);
      if (result != null) {
        return result;
      }
    } catch (e) {
      error = e;
    }
    // パースできなかった場合
    if ('defaultValue' in config) {
      return config.defaultValue;
    } else {
      throw error || new Error(`${value} is an invalid value to parse.`);
    }
  }

  protected abstract _parse(value: string, config: C): R | null;
}
