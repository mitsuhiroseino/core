import { EventedConfig, EventedEventHandlers } from '../../../base/Evented';
import { EventInfo } from '../../../events/Observable';
import { FieldConfig } from '../types';
import FieldBase from './FieldBase';
import { FieldBaseEvents } from './constants';

/**
 * イベントハンドラー
 */
export type FieldBaseEventHandlers<V = any> = EventedEventHandlers & {
  [FieldBaseEvents.change]?: (event: EventInfo<{ entry: FieldBase<V>; value: V }>) => void;
};

/**
 * コンフィグ
 */
export type FieldBaseConfig<
  V = any,
  H extends FieldBaseEventHandlers<V> = FieldBaseEventHandlers<V>,
> = EventedConfig<H> & FieldConfig<V>;
