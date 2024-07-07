import { EventedEvents } from '../../../base/EventedBase';

/**
 * イベント
 */
export const EntityBaseEvents = {
  ...EventedEvents,
  itemchange: 'itemchange',
} as const;
