import { EventInfo } from '../../../events/Observable';
import { EntryBaseConfig, EntryBaseEventHandlers } from '../EntryBase';
import { EntryItem } from '../types';
import DataEntryBase from './DataEntryBase';
import { DataEntryBaseEvents } from './constants';

/**
 * イベントハンドラー
 */
export type DataEntryBaseEventHandlers<I extends EntryItem = EntryItem> = EntryBaseEventHandlers & {
  [DataEntryBaseEvents.update]?: (event: EventInfo<{ entry: DataEntryBase<I>; updates: Partial<I> }>) => void;
};

/**
 * コンフィグ
 */
export type DataEntryBaseConfig<
  I extends EntryItem = EntryItem,
  H extends DataEntryBaseEventHandlers<I> = DataEntryBaseEventHandlers<I>,
> = EntryBaseConfig<I, H>;
