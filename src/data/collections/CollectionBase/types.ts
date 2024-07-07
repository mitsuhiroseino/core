import { IFilter } from '@visue/datakit/filters';
import { ISorter } from '@visue/datakit/sorters';
import { EventedConfig, EventedEventHandlers } from '../../../base/EventedBase';
import { EventInfo, FireParams } from '../../../events';
import { Entity, EntityItem } from '../../entities';
import { CollectionConfig } from '../types';
import { CollectionBaseEvents } from './constants';

export type CollectionEventInfo<P = FireParams> = EventInfo<P>;

/**
 * イベントハンドラー
 */
export type CollectionBaseEventHandlers<I extends EntityItem = EntityItem> = EventedEventHandlers & {
  [CollectionBaseEvents.sourcechange]?: (event: CollectionEventInfo) => void;
  [CollectionBaseEvents.datachange]?: (event: EventInfo<{ data: Entity<I>[] }>) => void;
  [CollectionBaseEvents.filterchange]?: (event: EventInfo<{ filters: IFilter[] }>) => void;
  [CollectionBaseEvents.sortchange]?: (event: EventInfo<{ sorters: ISorter[] }>) => void;
};

/**
 * コンフィグ
 */
export type CollectionBaseConfig<
  I extends EntityItem = EntityItem,
  S = any,
  H extends EventedEventHandlers = EventedEventHandlers,
> = EventedConfig<H> & CollectionConfig<I, S>;
