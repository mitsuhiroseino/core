import { EventedConfig, EventedEventHandlers } from '../../base/EventedBase';
import { EventInfo } from '../../events';
import { I18nResourcesEvents } from './constants';

/**
 * 国際化リソース
 */
export type I18nResource = {
  [key: string]: string | boolean | number | I18nResource | (string | boolean | number | I18nResource)[];
};

/**
 * イベントハンドラー
 */
export type I18nResourcesEventHandlers = EventedEventHandlers & {
  [I18nResourcesEvents.resourceset]: (event: EventInfo<{ resource: I18nResource }>) => void;
};

/**
 * コンフィグ
 */
export type I18nResourcesConfig<H extends I18nResourcesEventHandlers = I18nResourcesEventHandlers> = EventedConfig<H>;
