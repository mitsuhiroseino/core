import { FactoryableConfig, IFactoryable } from '../factory/Factory';

/**
 * readメソッドのオプション
 */
export type ReadOptions = {};

/**
 * コンフィグ
 */
export type ReaderConfig<
  I = any,
  R = any,
  C extends ReaderConfig<I, R, any> = ReaderConfig<I, R, any>,
> = FactoryableConfig &
  ReadOptions & {
    /**
     * 読み込みができなかった場合に返す値を作る関数
     */
    defaultValueFn?: (data: I, config: C) => R;

    /**
     * 読み込みができなかった場合に返す値
     * defaultValueFnが設定されている場合は無効
     */
    defaultValue?: any;

    /**
     * 出力は配列
     */
    array?: boolean;
  };

/**
 * データを読み込む
 */
export interface IReader<D = any, O extends ReadOptions = ReadOptions> extends IFactoryable {
  /**
   * dataを読み込む
   */
  read<R = any>(data: D, options?: O): R;
}
