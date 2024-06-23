import remove from 'lodash/remove';

import asArray from '@visue/utils/array/asArray';
import clear from '@visue/utils/array/clear';
import { EventsConfig } from '../../../events/Events';
import toIds from '../../../helpers/toIds';
import { EntryItem, IEntry } from '../../entries';
import DataEntry from '../../entries/DataEntry';
import { IValueRule, ValueRuleFactory } from '../../valuerules';
import CollectionBase from '../CollectionBase';
import { IEditableCollection } from '../types';
import { DataCollectionBaseEvents } from './constants';
import { DataCollectionBaseConfig, DataCollectionBaseEventHandlers } from './types';

/**
 * 配列をソースとするコレクションの抽象クラス
 */
abstract class DataCollectionBase<
    I extends EntryItem = EntryItem,
    S = I[],
    H extends DataCollectionBaseEventHandlers<I> = DataCollectionBaseEventHandlers<I>,
    C extends DataCollectionBaseConfig<I, S, H> = DataCollectionBaseConfig<I, S, H>,
  >
  extends CollectionBase<I, S, H, C>
  implements IEditableCollection<I, S, H>
{
  /**
   * 値規定
   */
  private _valueRules!: IValueRule[];

  constructor(config?: C) {
    super(config);
    const me = this,
      { valueRules } = me.config;
    me._valueRules = ValueRuleFactory.from(valueRules);
  }

  protected _getEventsConfig(): EventsConfig<H> {
    return {
      eventTransformation: {
        // Entryの発火するupdateイベントはentriesupdateに移譲
        update: {
          type: DataCollectionBaseEvents.entriesupdate,
          convertParams: ({ entry, ...rest }) => ({ entries: [entry], ...rest }),
          target: this,
        },
      },
    };
  }

  protected _setSource(source: S) {
    const me = this;
    me._source = source || ([] as S);
  }

  protected _toSourceEntries(source: S = this._source): IEntry<I>[] {
    return this._toEntries(source as I[]) as unknown as IEntry<I>[];
  }

  /**
   * itemsをentriesに変換
   * @param items
   * @returns
   */
  protected _toEntries(items: I | I[]): IEntry<I>[] {
    return asArray(items).map((item) => this._toEntry(item));
  }

  /**
   * itemをentryに変換
   * @param items
   * @returns
   */
  protected _toEntry(item: I): IEntry<I> {
    return new DataEntry({
      item,
      events: this._events as any,
      valueRules: this._valueRules,
    });
  }

  add(items: I | I[]): IEntry<I>[] {
    const me = this,
      entries = me._toEntries(items);
    me._sourceEntries.push(...entries);
    me.fire(DataCollectionBaseEvents.entriesadd, { entries });
    me._applyEntries();
    return entries;
  }

  update(updates: Partial<I> | Partial<I>[]): IEntry<I>[] {
    const items = asArray(updates),
      entries: IEntry<I>[] = [];
    for (const item of items) {
      const entry = this.get(item.$id as string);
      if (entry) {
        entry.update(item, true);
        entries.push(entry);
      }
    }
    this.fire(DataCollectionBaseEvents.entriesupdate, { entries });
    this._applyEntries();
    return entries;
  }

  remove(targets: string | I | (string | I)[]): IEntry<I>[] {
    const me = this,
      ids = toIds(targets).reduce((result, id) => {
        result[id] = true;
        return result;
      }, {});
    // 対象を削除
    const removed = remove(me._sourceEntries, (entry) => ids[entry.$id]),
      entries = removed.map(me._releaseEntry);
    me.fire(DataCollectionBaseEvents.entriesremove, { entries });
    me._applyEntries();
    return entries;
  }

  claer(): IEntry<I>[] {
    const me = this,
      entries = me._sourceEntries.map(me._releaseEntry);
    clear(me._sourceEntries);
    me.fire(DataCollectionBaseEvents.entriesclear, { entries });
    me._applyEntries();
    return entries;
  }

  /**
   * Entryを管理対象から外す際の処理
   * @param entry
   * @returns
   */
  private _releaseEntry(entry: IEntry<I>): IEntry<I> {
    entry.initEvents();
    return entry;
  }
}
export default DataCollectionBase;
