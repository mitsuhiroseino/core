import { EventedEvents } from '../../../base/Evented';
import { EntryBaseEvents } from '../../entries/EntryBase';

/**
 * イベント
 */
export const CollectionBaseEvents = {
  ...EventedEvents,
  ...EntryBaseEvents,
  sourcechange: 'sourcechange',
  datachange: 'datachange',
  filterchange: 'filterchange',
  sortchange: 'sorterchange',
} as const;
