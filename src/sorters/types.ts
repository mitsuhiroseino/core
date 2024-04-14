import { IDestructible } from '../base/DestructibleBase';
import { ExtractorConfig } from '../extractors';
import { ObjectExtractOptions } from '../extractors/ObjectExtractor';
import { FactoryableConfig, IFactoryable } from '../factory/Factory';
import { EqualsOptions } from '../utils/lang/equals';

/**
 * compareメソッドのオプション
 */
export type CompareOptions = {
  /**
   * 降順
   */
  desc?: boolean;
};

/**
 * コンフィグ
 */
export type SorterConfig = FactoryableConfig &
  EqualsOptions &
  Pick<ObjectExtractOptions, 'path'> &
  CompareOptions & {
    /**
     * ソート対象を抽出する際に指定する
     */
    extractor?: ExtractorConfig;
  };

/**
 * ソーターのインターフェイス
 */
export interface ISorter<O extends CompareOptions = CompareOptions> extends IFactoryable, IDestructible {
  /**
   * Sorterのインスタンスであるか
   */
  readonly isSorter: true;

  /**
   * ソート用の比較
   * @param value0 対象0
   * @param value1 対象1
   * @param options オプション
   * @returns 結果
   */
  compare(value0: unknown, value1: unknown, options?: O): number;
}
