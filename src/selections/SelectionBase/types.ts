import { IdentifiableItem } from '@visue/utils/types';
import { EventedConfig, EventedEventHandlers } from '../../base/Evented';
import { EventInfo } from '../../events/Observable';
import { SelectionConfig } from '../types';
import { SelectionEventsBase } from './constants';

/**
 * イベントハンドラー
 */
export type SelectionEventHandlersBase<I extends IdentifiableItem = IdentifiableItem> = EventedEventHandlers & {
  [SelectionEventsBase.select]?: (event: EventInfo<{ items: I[] }>) => void;
  [SelectionEventsBase.unselect]?: (event: EventInfo<{ items: I[] }>) => void;
};

/**
 * コンフィグ
 */
export type SelectionConfigBase<
  I extends IdentifiableItem = IdentifiableItem,
  H extends SelectionEventHandlersBase<I> = SelectionEventHandlersBase<I>,
> = EventedConfig<H> & SelectionConfig;
