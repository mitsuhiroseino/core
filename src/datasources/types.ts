import { IDestructible } from '../base/DestructibleBase';
import { EventHandlers, IObservable } from '../events/Observable';
import { FactoryableConfig, IFactoryable } from '../factory/Factory';

/**
 * createメソッドのオプション
 */
export type CreateOptions = {};

/**
 * readメソッドのオプション
 */
export type ReadOptions = {};

/**
 * updateメソッドのオプション
 */
export type UpdateOptions = {};

/**
 * deleteメソッドのオプション
 */
export type DeleteOptions = {};

/**
 * コンフィグ
 */
export type DataSourceConfig = FactoryableConfig & CreateOptions & ReadOptions & UpdateOptions & DeleteOptions;

/**
 * リソース
 */
export interface IDataSource<D = any, H = EventHandlers> extends IObservable<H>, IFactoryable, IDestructible {
  /**
   * DataSourceのインスタンスであるか
   */
  readonly isDataSource: true;

  /**
   * リソースを保存する
   * @param options
   */
  create(data: D, options?: CreateOptions): Promise<any>;

  /**
   * リソースを読み込む
   * @param options
   */
  read(options?: ReadOptions): Promise<D | null>;

  /**
   * リソースを更新する
   * @param options
   */
  update(data: D, options?: UpdateOptions): Promise<any>;

  /**
   * リソースを削除する
   * @param options
   */
  delete(options?: DeleteOptions): Promise<any>;
}
