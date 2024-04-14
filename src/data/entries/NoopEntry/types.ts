import { EntryBaseConfig, EntryBaseEventHandlers } from '../EntryBase';
import { EntryItem } from '../types';

/**
 * イベントハンドラー
 */
export type NoopEntryEventHandlers = EntryBaseEventHandlers;

/**
 * コンフィグ
 */
export type NoopEntryConfig<
  I extends EntryItem = EntryItem,
  H extends NoopEntryEventHandlers = NoopEntryEventHandlers,
> = EntryBaseConfig<I, H>;
