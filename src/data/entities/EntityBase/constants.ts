import { EventedEvents } from '../../../base/Evented';

/**
 * イベント
 */
export const EntityBaseEvents = {
  ...EventedEvents,
  itemchange: 'itemchange',
} as const;
