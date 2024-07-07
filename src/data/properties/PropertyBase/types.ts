import { EventedConfig, EventedEventHandlers } from '../../../base/EventedBase';
import { EventInfo } from '../../../events';
import { PropertyConfig } from '../types';
import PropertyBase from './PropertyBase';
import { PropertyBaseEvents } from './constants';

/**
 * イベントハンドラー
 */
export type PropertyBaseEventHandlers<V = any> = EventedEventHandlers & {
  [PropertyBaseEvents.change]?: (event: EventInfo<{ entity: PropertyBase<V>; value: V }>) => void;
};

/**
 * コンフィグ
 */
export type PropertyBaseConfig<
  V = any,
  H extends PropertyBaseEventHandlers<V> = PropertyBaseEventHandlers<V>,
> = EventedConfig<H> & PropertyConfig<V>;
