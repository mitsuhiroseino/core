import { EventedEvents } from '../../base/EventedBase';

/**
 * イベント
 */
export const SelectionEventsBase = {
  ...EventedEvents,
  select: 'select',
  unselect: 'unselect',
} as const;
