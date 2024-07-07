import { EventedEvents } from '../../../base/EventedBase';

/**
 * イベント
 */
export const PropertyBaseEvents = {
  ...EventedEvents,
  change: 'change',
} as const;
