import DestructibleBase from '../../base/DestructibleBase';
import ExtractorFactory from '../../extractors/ExtractorFactory';
import ObjectExtractor from '../../extractors/ObjectExtractor';
import initFactoryable from '../../helpers/initFactoryable';
import { IFilter } from '../types';
import { FilterConfigBase, MatchOptionsBase } from './types';

export default abstract class FilterBase<
    V = any,
    O extends MatchOptionsBase = MatchOptionsBase,
    C extends FilterConfigBase = FilterConfigBase,
  >
  extends DestructibleBase<C>
  implements IFilter<O>
{
  readonly isFilter = true;

  /**
   * カテゴリー
   */
  static readonly CATEGORY = 'filter';

  /**
   * ID
   */
  readonly $id!: string;

  /**
   * 種別
   */
  readonly type!: string;

  /**
   * 値抽出器
   */
  protected _extractor?: ObjectExtractor;

  constructor(config?: C) {
    super(config);
    initFactoryable(this, this.config);
    const { extractor, path } = this.config;
    if (extractor) {
      this._extractor = ExtractorFactory.create(extractor);
    } else if (path != null) {
      this._extractor = new ObjectExtractor({ path });
    }
  }

  /**
   * 条件に一致するか
   * @param value 検証対象
   * @returns 検証結果
   */
  match(value: any, options?: O): boolean {
    let val = value;
    if (this._extractor) {
      val = this._extractor.extract(val);
    }
    return this._match(val, this._withConfig(options));
  }

  /**
   * 条件に一致するか
   * @param value 検証対象
   * @returns 検証結果
   */
  protected abstract _match(value: V, config: C): boolean;
}
