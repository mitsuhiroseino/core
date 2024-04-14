import { EventedConfig, EventedEventHandlers } from '../../base/Evented';
import { EventInfo } from '../../events/Observable';
import { StringFormatterConfig } from '../../formatters/StringFormatter';
import { FormatOptions } from '../../utils/string/format';
import I18nResources, { I18nResource } from '../I18nResources';
import { TranslatorEvents } from './constants';

/**
 * translateオプション
 */
export type TranslateOptions = Pick<FormatOptions, 'params'>;

/**
 * イベントハンドラー
 */
export type TranslatorEventHandlers = EventedEventHandlers & {
  [TranslatorEvents.languagechange]: (event: EventInfo<{ language: string }>) => void;
};

/**
 * コンフィグ
 */
export type TranslatorInitializeConfig<H extends TranslatorEventHandlers = TranslatorEventHandlers> = EventedConfig<H> &
  Pick<StringFormatterConfig, 'tokenBracket'> & {
    /**
     * 初期の言語
     */
    language?: string;
    /**
     * リソース
     */
    resource?: I18nResource;
  };

/**
 * コンフィグ
 */
export type TranslatorConfig<H extends TranslatorEventHandlers = TranslatorEventHandlers> = EventedConfig<H> & {
  /**
   * リソース管理
   */
  resources?: I18nResources;
};
