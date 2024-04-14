import { EventedEvents } from '../../../base/Evented';

/**
 * イベント
 */
export const EntryBaseEvents = {
  ...EventedEvents,
  itemchange: 'itemchange',
} as const;
