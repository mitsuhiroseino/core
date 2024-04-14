import isString from 'lodash/isString';

import Evented from '../../base/Evented';
import { FormatterFactory } from '../../formatters';
import StringFormatter from '../../formatters/StringFormatter';
import I18nResources, { I18nResource } from '../I18nResources';
import { TranslatorEvents } from './constants';
import { TranslateOptions, TranslatorConfig, TranslatorEventHandlers, TranslatorInitializeConfig } from './types';

class Translator extends Evented<TranslatorEventHandlers, TranslatorConfig> {
  /**
   * 現在の言語
   */
  private _language!: string;

  /**
   * リソース
   */
  private _resources: I18nResources;

  /**
   * 文字列フォーマッター
   */
  private _formatter!: StringFormatter;

  constructor(config?: TranslatorConfig) {
    super(config);
    this._resources = this.config.resources || new I18nResources();
    this._resources.synchronizeEvents(this._events, this);
  }

  /**
   * 初期化
   * @param config
   */
  initialize(config: TranslatorInitializeConfig = {}) {
    this._assginConfig(config);
    this._initEvented(this._events);
    const { language = 'ja', resource, tokenBracket } = config;
    this._language = language;
    if (resource) {
      this._resources.set(language, resource);
    }
    this._formatter = FormatterFactory.create({ type: 'string', tokenBracket });
  }

  /**
   * 言語の変更
   * @param language
   */
  setLanguage(language: string): void {
    const oldLanuage = this._language;
    if (oldLanuage !== language) {
      this._language = language;
      this.fire(TranslatorEvents.languagechange, { language });
    }
  }

  /**
   * リソースの追加
   * @param language
   * @param resource
   */
  setResource(language: string, resource: I18nResource): void {
    this._resources.set(language, resource);
  }

  /**
   * リソースの追加
   * @param language
   * @param key
   * @param value
   */
  putResource(language: string, key: string, value: any): void {
    this._resources.update(language, { [key]: value });
  }

  /**
   * リソースの取得
   * @param key
   * @param options
   * @returns
   */
  translate(key: string, options: TranslateOptions = {}) {
    const value = this._resources.get(this._language, key);
    if (value !== undefined) {
      // 値あり
      const { params } = options;
      if (params && isString(value)) {
        // 値の埋め込みあり
        return this._formatter.format(value, { params });
      } else {
        // 値の埋め込みなし
        return value;
      }
    } else {
      // 値なし
      return key;
    }
  }
}
export default Translator;
