import { IDestructible } from '../../base/DestructibleBase';
import { EventHandlers, IObservable } from '../../events/Observable';
import { FactoryableConfig, IFactoryable } from '../../factory/Factory';
import { FilterConfig, IFilter } from '../../filters';
import { ISelection, SelectionConfig } from '../../selections';
import { ISorter, SorterConfig } from '../../sorters';
import { EntityItem, IEntity } from '../entities';
import { IValueRule, ValueRuleConfig } from '../valuerules';

/**
 * コレクションのコンフィグ
 */
export type CollectionConfig<I extends EntityItem = EntityItem, S = any[]> = FactoryableConfig & {
  /**
   * データソース
   */
  source?: S;

  /**
   * フィルター
   */
  filters?: IFilter | FilterConfig | (IFilter | FilterConfig)[];

  /**
   * ソーター
   */
  sorters?: ISorter | SorterConfig | (ISorter | SorterConfig)[];

  /**
   * 選択
   */
  selection?: ISelection<IEntity<I>> | SelectionConfig;
};

/**
 * オブジェクト要素のコレクション
 */
export interface ICollection<I extends EntityItem = EntityItem, S = any, H = EventHandlers>
  extends IObservable<H>,
    IFactoryable,
    IDestructible {
  /**
   * Collectionのインスタンスであるか
   */
  readonly isCollection: true;

  /**
   * 元データの設定
   */
  setSource(source: S): void;

  /**
   * 元データの取得
   */
  getSourceItems(): I[];

  /**
   * 元レコード配列の取得
   */
  getSourceEntities(): IEntity<I>[];

  /**
   * 元データの件数
   */
  getSourceSize(): number;

  /**
   * フィルター、ソートが適用されたデータの取得
   */
  getItems(): I[];

  /**
   * フィルター、ソートが適用されたレコード配列の取得
   */
  getEntities(): IEntity<I>[];

  /**
   * フィルター、ソートが適用されたデータの件数
   */
  getSize(): number;

  /**
   * IDの一致する要素を1件取得
   * @param id ID
   */
  get(id: string): IEntity<I> | undefined;

  /**
   * 条件に一致する要素を全て取得する
   * @param filter 条件
   */
  select(filter: IFilter | FilterConfig): IEntity<I>[];

  /**
   * フィルターの追加
   * @param filters フィルター
   */
  addFilters(filters: IFilter | FilterConfig | (IFilter | FilterConfig)[]): IFilter[];

  /**
   * フィルターの削除
   * @param ids 削除対象のフィルターのID
   */
  removeFilters(ids: string | string[]): void;

  /**
   * フィルタリング状態の解除
   */
  clearFilter(): void;

  /**
   * ソーターの追加
   * @param sorters ソーター
   */
  addSorters(sorters: ISorter | SorterConfig | (ISorter | SorterConfig)[]): ISorter[];

  /**
   * ソーターの削除
   * @param ids 削除対象のソーターのID
   */
  removeSorters(ids: string | string[]): void;

  /**
   * ソート状態の解除
   */
  clearSort(): void;
}

/**
 * 編集可能なコレクションのコンフィグ
 */
export type EditableCollectionConfig<I extends EntityItem = EntityItem, S = any[]> = CollectionConfig<I, S> & {
  /**
   * 値規定
   */
  valueRules: (IValueRule | ValueRuleConfig)[];
};

/**
 * 編集可能なオブジェクト要素のコレクション
 */
export interface IEditableCollection<I extends EntityItem = EntityItem, S = any, H = EventHandlers>
  extends ICollection<I, S, H> {
  /**
   * 要素の追加
   * @param items
   * @returns 追加した要素
   */
  add(items: I | I[]): IEntity<I>[];

  /**
   * 要素の追加
   * @param items
   */
  update(items: I | I[]): IEntity<I>[];

  /**
   * 要素の追加
   * @returns 削除した要素
   */
  remove(items: string | I | (string | I)[]): IEntity<I>[];

  /**
   * 要素の追加
   * @returns 削除した要素
   */
  claer(): IEntity<I>[];
}
