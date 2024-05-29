import clone from 'lodash/clone';

import Evented from '../../../base/Evented';
import { FilterConfig, FilterFactory, IFilter } from '../../../filters';
import initFactoryable from '../../../helpers/initFactoryable';
import { ISelection, SelectionFactory } from '../../../selections';
import { ISorter, SorterConfig, SorterFactory } from '../../../sorters';
import asArray from '../../../utils/array/asArray';
import remove from '../../../utils/array/remove';
import { EntryItem, IEntry } from '../../entries';
import { ICollection } from '../types';
import { CollectionBaseEvents } from './constants';
import { CollectionBaseConfig, CollectionBaseEventHandlers } from './types';

/**
 * ソーター、フィルターをもつリストの抽象クラス
 *
 * 用語の整理:
 *
 *   - source: フィルタやソートが適用されていない配列または配列の持ち主
 *   - data: フィルタやソートが適用された配列
 *   - item,items: 素のオブジェクトまたはオブジェクト配列
 *   - entry,entries: EntryインスタンスまたはEntryインスタンスの配列
 *
 */
abstract class CollectionBase<
    I extends EntryItem = EntryItem,
    S = any,
    H extends CollectionBaseEventHandlers<I> = CollectionBaseEventHandlers<I>,
    C extends CollectionBaseConfig<I, S, H> = CollectionBaseConfig<I, S, H>,
  >
  extends Evented<H, C>
  implements ICollection<I, S, H>
{
  readonly isCollection = true;

  /**
   * カテゴリー
   */
  static readonly CATEGORY = 'collection';

  /**
   * ID
   */
  readonly $id!: string;

  /**
   * 種別
   */
  readonly type!: string;

  /**
   * 元データ
   */
  protected _source!: S;

  /**
   * 元エントリー配列
   */
  protected _sourceEntries: IEntry<I>[] = [];

  /**
   * ソートやフィルタリングが反映されたデータ
   */
  protected _entries: IEntry<I>[] = [];

  /**
   * Entryのマップ
   */
  protected _entryMap: { [$id: string]: IEntry<I> } = {};

  /**
   * フィルター
   */
  protected _filters: IFilter[] = [];

  /**
   * ソーター
   */
  protected _sorters: ISorter[] = [];

  /**
   * 選択
   */
  protected _selection?: ISelection;

  constructor(config?: C) {
    super(config);
    initFactoryable(this, this.config);
    const me = this,
      { source, filters, sorters, selection } = me.config;
    if (filters) {
      me._addFilters_(filters);
    }
    if (sorters) {
      me._addSorters_(sorters);
    }
    if (selection) {
      me._selection = SelectionFactory.get(selection);
    }
    me._setSource_(source as S);
  }

  /**
   * ソースの差し替え(イベント発火、dataへの適用あり)
   * @param source
   */
  setSource(source: S): void {
    const me = this;
    me._setSource(source);
    me._setSourceEntries(me._toSourceEntries());
  }

  /**
   * ソースエントリーの差し替え(イベント発火、dataへの適用あり)
   * @param entries
   */
  protected _setSourceEntries(entries: IEntry<I>[]) {
    this._sourceEntries = entries;
    this.fire(CollectionBaseEvents.sourcechange, { source: entries });
    // sourceが差し替えられたらdataも更新する
    this._applyEntries(entries);
  }

  /**
   * ソースの差し替え
   * @param source
   */
  protected _setSource_(source: S): void {
    const me = this;
    me._setSource(source as S);
    me._sourceEntries = me._toSourceEntries();
    me._applyEntries_();
  }

  /**
   * _sourceを設定する
   * @param source
   */
  protected abstract _setSource(source: S): void;

  /**
   * sourceを_sourceEntryに変換する
   * @param source
   */
  protected abstract _toSourceEntries(source?: S): IEntry<I>[];

  getSourceItems(): I[] {
    return this._toItems(this.getSourceEntries());
  }

  getSourceEntries(): IEntry<I>[] {
    return this._sourceEntries;
  }

  getSourceSize(): number {
    return this.getSourceEntries().length;
  }

  getItems(): I[] {
    return this._toItems(this._entries);
  }

  getEntries(): IEntry<I>[] {
    return this._entries;
  }

  getSize(): number {
    return this._entries.length;
  }

  /**
   * entriesをitemsに変換
   * @param entries
   * @returns
   */
  protected _toItems(entries: IEntry<I> | IEntry<I>[]): I[] {
    return asArray(entries).map((entry) => this._toItem(entry));
  }

  /**
   * entryをitemに変換
   * @param entries
   * @returns
   */
  protected _toItem(entry: IEntry<I>): I {
    return entry.item;
  }

  /**
   * entriesの差し替え(イベント発火あり)
   * @param item
   */
  protected _setEntries(entries: IEntry<I>[]) {
    const me = this;
    me._setEntries_(entries);
    me.fire(CollectionBaseEvents.datachange, { data: entries });
  }

  /**
   * entriesの差し替え
   * @param item
   */
  protected _setEntries_(entries: IEntry<I>[]) {
    const me = this;
    me._entries = entries;
    me._entryMap = {};
    for (const entry of me._entries) {
      me._entryMap[entry.$id] = entry;
    }
  }

  /**
   * フィルターの追加(イベント発火、dataへの適用あり)
   * @param target
   */
  addFilters(target: IFilter | FilterConfig | (IFilter | FilterConfig)[]): IFilter[] {
    const me = this,
      filters = me._addFilters_(target);
    me._afterFilterChange();
    return filters;
  }

  /**
   * フィルターの追加
   * @param target
   */
  private _addFilters_(target: IFilter | FilterConfig | (IFilter | FilterConfig)[]): IFilter[] {
    const me = this,
      filters = me._toFilters(target);
    // フィルターの追加
    me._filters.push(...filters);
    return filters;
  }

  protected _toFilters(target: IFilter | FilterConfig | (IFilter | FilterConfig)[]): IFilter[] {
    return asArray(target).map(this._toFilter);
  }

  protected _toFilter(target: IFilter | FilterConfig): IFilter {
    return FilterFactory.get(target);
  }

  /**
   * フィルターの削除(イベント発火、dataへの適用あり)
   * @param target
   */
  removeFilters(target: string | string[]): void {
    const me = this;
    me._removeFilters_(target);
    me._afterFilterChange();
  }

  /**
   * フィルターの削除
   * @param target
   */
  private _removeFilters_(target: string | string[]): void {
    const me = this,
      ids = asArray(target);
    // フィルターの削除
    ids.forEach((id) => {
      remove(me._filters, { $id: id });
    });
  }

  /**
   * フィルターのクリア(イベント発火、dataへの適用あり)
   * @param target
   */
  clearFilter(): void {
    const me = this;
    me._clearFilter_();
    me._afterFilterChange();
  }

  /**
   * フィルターのクリア
   * @param target
   */
  private _clearFilter_(): void {
    const me = this;
    // 全フィルターの削除
    me._filters = [];
  }

  /**
   * フィルター変更時のイベント発火、dataへの適用
   */
  private _afterFilterChange() {
    this.fire(CollectionBaseEvents.filterchange, { filters: this._filters });
    // フィルターの適用
    this._applyEntries();
  }

  /**
   * フィルターを適用する
   */
  protected _applyFilter(entries: IEntry<I>[] = this.getSourceEntries()): IEntry<I>[] {
    const me = this,
      filters = me._filters;
    let filteredEntries;
    if (filters.length) {
      filteredEntries = entries.filter((entry) => me._filters.every((filter) => filter.match(entry.item)));
    } else {
      filteredEntries = clone(entries);
    }
    return filteredEntries;
  }

  /**
   * ソーターの追加(イベント発火、dataへの適用あり)
   * @param target
   */
  addSorters(target: ISorter | SorterConfig | (ISorter | SorterConfig)[]): ISorter[] {
    const me = this,
      sorters = me._addSorters_(target);
    me._afterSorterChange();
    return sorters;
  }

  /**
   * ソーターの追加
   * @param target
   */
  private _addSorters_(target: ISorter | SorterConfig | (ISorter | SorterConfig)[]): ISorter[] {
    const me = this,
      sorters = me._toSorters(target);
    // ソーターの追加
    me._sorters.push(...sorters);
    return sorters;
  }

  protected _toSorters(target: ISorter | SorterConfig | (ISorter | SorterConfig)[]): ISorter[] {
    return asArray(target).map(this._toSorter);
  }

  protected _toSorter(target: ISorter | SorterConfig): ISorter {
    return SorterFactory.get(target);
  }

  /**
   * ソーターの削除(イベント発火、dataへの適用あり)
   * @param target
   */
  removeSorters(target: string | string[]): void {
    const me = this;
    me._removeSorters_(target);
    me._afterSorterChange();
  }

  /**
   * ソーターの削除
   * @param target
   */
  private _removeSorters_(target: string | string[]): void {
    const me = this,
      ids = asArray(target);
    // ソーターの削除
    ids.forEach((id) => {
      remove(me._sorters, { $id: id });
    });
  }

  /**
   * ソート状態のクリア(イベント発火、dataへの適用あり)
   * @param target
   */
  clearSort(): void {
    const me = this;
    me._clearSort_();
    me._afterSorterChange();
  }

  /**
   * ソート状態のクリア
   * @param target
   */
  private _clearSort_(): void {
    const me = this;
    // 全ソーターの削除
    me._sorters = [];
  }

  /**
   * ソート状態変更時のイベント発火、dataへの適用
   */
  private _afterSorterChange() {
    this.fire(CollectionBaseEvents.sortchange, { sorters: this._sorters });
    // ソート状態の適用
    this._applyEntries();
  }

  /**
   * ソート状態を適用する
   */
  protected _applySort(entries: IEntry<I>[] = this.getSourceEntries()): IEntry<I>[] {
    const me = this,
      sorters = me._sorters,
      length = sorters.length;
    let sorteredEntries;
    if (length > 0) {
      sorteredEntries = clone(entries).sort((entry1, entry2) => {
        for (let i = length - 1; i > -1; i--) {
          const result = sorters[i].compare(entry1.item, entry2.item);
          if (result !== 0) {
            return result;
          }
        }
        return 0;
      });
    } else {
      sorteredEntries = clone(entries);
    }
    return sorteredEntries;
  }

  /**
   * フィルタ、ソートなどを適用しentriesへ反映する(イベント発火あり)
   * @param entries
   */
  protected _applyEntries(entries: IEntry<I>[] = this.getSourceEntries()) {
    const me = this,
      filteredEntries = me._applyFilter(entries),
      sortedEntries = me._applySort(filteredEntries);
    me._setEntries(sortedEntries);
  }

  /**
   * フィルタ、ソートなどを適用しentriesへ反映する
   * @param entries
   */
  protected _applyEntries_(entries: IEntry<I>[] = this.getSourceEntries()) {
    const me = this,
      filteredEntries = me._applyFilter(entries),
      sortedEntries = me._applySort(filteredEntries);
    me._setEntries_(sortedEntries);
  }

  get(id: string): IEntry<I> | undefined {
    return this._entryMap[id];
  }

  select(condition: IFilter | FilterConfig): IEntry<I>[] {
    const filter = this._toFilter(condition);
    return this._entries.filter((entry) => filter.match(entry.item));
  }

  destructor(): void {
    const me = this;
    me._deleteProperties(['_source', '_sourceEntries', '_entries', '_idMap', '_filters', '_sorters', '_selection']);
    super.destructor();
  }
}
export default CollectionBase;
