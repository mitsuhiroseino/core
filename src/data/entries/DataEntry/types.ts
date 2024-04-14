import { DataEntryBaseConfig, DataEntryBaseEventHandlers } from '../DataEntryBase';
import { EntryItem } from '../types';

/**
 * イベントハンドラー
 */
export type DataEntryEventHandlers<I extends EntryItem = EntryItem> = DataEntryBaseEventHandlers<I>;

/**
 * コンフィグ
 */
export type DataEntryConfig<
  I extends EntryItem = EntryItem,
  H extends DataEntryEventHandlers<I> = DataEntryEventHandlers<I>,
> = DataEntryBaseConfig<I, H>;
