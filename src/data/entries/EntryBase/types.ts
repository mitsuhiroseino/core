import { EventedConfig, EventedEventHandlers } from '../../../base/Evented';
import { EventInfo } from '../../../events/Observable';
import { EntryConfig, EntryItem } from '../types';
import { EntryBaseEvents } from './constants';

/**
 * イベントハンドラー
 */
export type EntryBaseEventHandlers = EventedEventHandlers & {
  [EntryBaseEvents.itemchange]: (event: EventInfo) => void;
};

/**
 * コンフィグ
 */
export type EntryBaseConfig<
  I extends EntryItem = EntryItem,
  H extends EntryBaseEventHandlers = EntryBaseEventHandlers,
> = EventedConfig<H> & EntryConfig<I>;
