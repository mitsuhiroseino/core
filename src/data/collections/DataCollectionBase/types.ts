import { EventInfo } from '../../../events/Observable';
import { EntryItem, IEntry } from '../../entries';
import { CollectionBaseConfig, CollectionBaseEventHandlers } from '../CollectionBase';
import { EditableCollectionConfig } from '../types';
import { DataCollectionBaseEvents } from './constants';

/**
 * イベントハンドラー
 */
export type DataCollectionBaseEventHandlers<I extends EntryItem = EntryItem> = CollectionBaseEventHandlers<I> & {
  [DataCollectionBaseEvents.entriesadd]?: (event: EventInfo<{ entries: IEntry<I>[] }>) => void;
  [DataCollectionBaseEvents.entriesupdate]?: (event: EventInfo<{ entries: IEntry<I>[] }>) => void;
  [DataCollectionBaseEvents.entriesremove]?: (event: EventInfo<{ entries: IEntry<I>[] }>) => void;
  [DataCollectionBaseEvents.entriesclear]?: (event: EventInfo<{ entries: IEntry<I>[] }>) => void;
};

/**
 * コンフィグ
 */
export type DataCollectionBaseConfig<
  I extends EntryItem = EntryItem,
  S = any[],
  H extends DataCollectionBaseEventHandlers<I> = DataCollectionBaseEventHandlers<I>,
> = CollectionBaseConfig<I, S, H> & EditableCollectionConfig<I, S>;
