import { EventedEvents } from '../../../base/Evented';

/**
 * イベント
 */
export const NoopEntryEvents = {
  ...EventedEvents,
} as const;
