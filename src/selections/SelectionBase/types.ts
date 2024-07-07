import { Identifiable } from '@visue/utils';
import { EventedConfig, EventedEventHandlers } from '../../base/EventedBase';
import { EventInfo } from '../../events';
import { SelectionConfig } from '../types';
import { SelectionEventsBase } from './constants';

/**
 * イベントハンドラー
 */
export type SelectionEventHandlersBase<I extends Identifiable = Identifiable> = EventedEventHandlers & {
  [SelectionEventsBase.select]?: (event: EventInfo<{ items: I[] }>) => void;
  [SelectionEventsBase.unselect]?: (event: EventInfo<{ items: I[] }>) => void;
};

/**
 * コンフィグ
 */
export type SelectionConfigBase<
  I extends Identifiable = Identifiable,
  H extends SelectionEventHandlersBase<I> = SelectionEventHandlersBase<I>,
> = EventedConfig<H> & SelectionConfig;
