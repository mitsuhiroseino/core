import { FactoryableConfig, IFactoryable } from '../factory/Factory';

/**
 * extractメソッドのオプション
 */
export type ExtractOptions = {
  /**
   * 想定外の値が渡された際に返す値
   */
  defaultValue?: any;
};

/**
 * コンフィグ
 */
export type ExtractorConfig = FactoryableConfig & ExtractOptions;

/**
 * 任意の型のデータから特定の値(プロパティ)を取得するクラスのインターフェイス
 */
export interface IExtractor<S = any, V = any, O extends ExtractOptions = ExtractOptions> extends IFactoryable {
  /**
   * Extractorのインスタンスであるか
   */
  isExtractor: true;

  /**
   * 引数として渡されたsourceを変換する
   * @param source
   */
  extract(source: S, options?: O): V | null | undefined;
}
