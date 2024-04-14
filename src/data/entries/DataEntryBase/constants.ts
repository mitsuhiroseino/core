import { EntryBaseEvents } from '../EntryBase';

/**
 * イベント
 */
export const DataEntryBaseEvents = {
  ...EntryBaseEvents,
  update: 'update',
} as const;
