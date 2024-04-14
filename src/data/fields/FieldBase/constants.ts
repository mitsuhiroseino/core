import { EventedEvents } from '../../../base/Evented';

/**
 * イベント
 */
export const FieldBaseEvents = {
  ...EventedEvents,
  change: 'change',
} as const;
