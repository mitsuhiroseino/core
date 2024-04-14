import { DataEntryBaseConfig, DataEntryBaseEventHandlers } from '../DataEntryBase';
import { EntryItem } from '../types';

/**
 * イベントハンドラー
 */
export type ChainedEntryEventHandlers<I extends EntryItem = EntryItem> = DataEntryBaseEventHandlers<I>;

/**
 * コンフィグ
 */
export type ChainedEntryConfig<
  I extends EntryItem = EntryItem,
  H extends ChainedEntryEventHandlers<I> = ChainedEntryEventHandlers<I>,
> = DataEntryBaseConfig<I, H>;
