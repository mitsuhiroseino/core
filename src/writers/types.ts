import { FactoryableConfig, IFactoryable } from '../factory/Factory';

/**
 * writeメソッドのオプション
 */
export type WriteOptions = {};

/**
 * コンフィグ
 */
export type WriterConfig = FactoryableConfig &
  WriteOptions & {
    /**
     * 出力は配列形式
     */
    array?: boolean;
  };

/**
 * ライターのインターフェイス
 */
export interface IWriter<D = any, O extends WriteOptions = WriteOptions> extends IFactoryable {
  /**
   * dataを出力用に変換する
   */
  write<R = any>(data: D, options?: O): R;
}
