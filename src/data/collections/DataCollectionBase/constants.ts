import { CollectionBaseEvents } from '../CollectionBase';

/**
 * イベント
 */
export const DataCollectionBaseEvents = {
  ...CollectionBaseEvents,
  entriesadd: 'entriesadd',
  entriesupdate: 'entriesupdate',
  entriesremove: 'entriesremove',
  entriesclear: 'entriesclear',
} as const;
