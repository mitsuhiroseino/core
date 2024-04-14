import { EventedConfig, EventedEventHandlers } from '../../../base/Evented';
import { EventInfo, FireParams } from '../../../events/Observable';
import { IFilter } from '../../../filters';
import { ISorter } from '../../../sorters';
import { EntryItem, IEntry } from '../../entries';
import { CollectionConfig } from '../types';
import { CollectionBaseEvents } from './constants';

export type CollectionEventInfo<P = FireParams> = EventInfo<P>;

/**
 * イベントハンドラー
 */
export type CollectionBaseEventHandlers<I extends EntryItem = EntryItem> = EventedEventHandlers & {
  [CollectionBaseEvents.sourcechange]?: (event: CollectionEventInfo) => void;
  [CollectionBaseEvents.datachange]?: (event: EventInfo<{ data: IEntry<I>[] }>) => void;
  [CollectionBaseEvents.filterchange]?: (event: EventInfo<{ filters: IFilter[] }>) => void;
  [CollectionBaseEvents.sortchange]?: (event: EventInfo<{ sorters: ISorter[] }>) => void;
};

/**
 * コンフィグ
 */
export type CollectionBaseConfig<
  I extends EntryItem = EntryItem,
  S = any,
  H extends EventedEventHandlers = EventedEventHandlers,
> = EventedConfig<H> & CollectionConfig<I, S>;
