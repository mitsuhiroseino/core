import ExtractorBase from '../ExtractorBase';
import { AnyExtractOptions, AnyExtractorConfig } from './types';

/**
 * 任意の値からの抽出器
 */
class AnyExtractor<S = any, V = any> extends ExtractorBase<S, V, AnyExtractOptions, AnyExtractorConfig<S, V>> {
  /**
   * 種別
   */
  static TYPE = 'any';

  protected _validate(source: S, config: AnyExtractorConfig<S, V>): boolean {
    return config.validate ? config.validate(source, config) : true;
  }

  /**
   * 値の取得
   */
  protected _extract(source: S, config: AnyExtractorConfig<S, V>): V | null | undefined {
    return config.extract ? config.extract(source, config) : undefined;
  }
}
export default AnyExtractor;
