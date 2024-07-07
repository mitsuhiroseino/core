import { EventedEvents } from '../../../base/EventedBase';
import { EntityBaseEvents } from '../../entities/EntityBase';

/**
 * イベント
 */
export const CollectionBaseEvents = {
  ...EventedEvents,
  ...EntityBaseEvents,
  sourcechange: 'sourcechange',
  datachange: 'datachange',
  filterchange: 'filterchange',
  sortchange: 'sorterchange',
} as const;
