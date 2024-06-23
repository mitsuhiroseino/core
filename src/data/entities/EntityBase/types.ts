import { EventedConfig, EventedEventHandlers } from '../../../base/Evented';
import { EventInfo } from '../../../events/Observable';
import { EntityConfig, EntityItem } from '../types';
import { EntityBaseEvents } from './constants';

/**
 * イベントハンドラー
 */
export type EntityBaseEventHandlers = EventedEventHandlers & {
  [EntityBaseEvents.itemchange]: (event: EventInfo) => void;
};

/**
 * コンフィグ
 */
export type EntityBaseConfig<
  I extends EntityItem = EntityItem,
  H extends EntityBaseEventHandlers = EntityBaseEventHandlers,
> = EventedConfig<H> & EntityConfig<I>;
