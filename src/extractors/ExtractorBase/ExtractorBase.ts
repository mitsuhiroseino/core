import Base from '../../base/Base';
import initFactoryable from '../../helpers/initFactoryable';
import { IExtractor } from '../types';
import { ExtractOptionsBase, ExtractorConfigBase } from './types';

/**
 * 値の抽出器
 */
abstract class ExtractorBase<
    S = any,
    V = any,
    O extends ExtractOptionsBase = ExtractOptionsBase,
    C extends ExtractorConfigBase = ExtractorConfigBase,
  >
  extends Base<C>
  implements IExtractor<S, V, O>
{
  readonly isExtractor = true;

  /**
   * カテゴリー
   */
  static readonly CATEGORY = 'extractor';

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

  /**
   * 元の値のチェック
   * @param source 元の値
   * @returns
   */
  protected _validate(source: S, config: C) {
    return true;
  }

  /**
   * 引数として渡されたsourceから値を取得する
   * @param source
   */
  extract(source: S, options?: O): V | null | undefined {
    const me = this,
      config = me._withConfig(options);

    if (!me._validate(source, config)) {
      // 不正な値
      return me._onInvalidSource(source, config);
    }
    try {
      return me._extract(source, config);
    } catch (error) {
      // 例外
      return me._onInvalidSource(source, config, error);
    }
  }

  /**
   * 元の値が不正な場合
   * @param source 元の値
   * @param error エラー
   * @returns
   */
  private _onInvalidSource(source: S, config: C, error: any = new Error(`${source} is invalid source.`)): any {
    const defaultValue = config.defaultValue;
    if (defaultValue !== undefined) {
      return defaultValue;
    } else {
      throw error;
    }
  }

  /**
   * 値の取得
   */
  protected abstract _extract(source: S, config: C): V | null | undefined;
}
export default ExtractorBase;
