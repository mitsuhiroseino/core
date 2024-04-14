import { EventedEvents } from '../../base/Evented';

/**
 * イベント
 */
export const SelectionEventsBase = {
  ...EventedEvents,
  select: 'select',
  unselect: 'unselect',
} as const;
