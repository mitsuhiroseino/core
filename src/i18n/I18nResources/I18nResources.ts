import get from 'lodash/get';
import has from 'lodash/has';

import Evented from '../../base/Evented';
import { I18nResourcesEvents } from './constants';
import { I18nResource, I18nResourcesConfig, I18nResourcesEventHandlers } from './types';

// デフォルトリソースのキー
const DEFAULT = Symbol('default');

/**
 * リソース情報
 */
type ResourceInfo = {
  /**
   * 言語
   */
  language: string | symbol;

  /**
   * リソース
   */
  resource: I18nResource;

  /**
   * 設定済み
   */
  completed: boolean;
};

class I18nResources extends Evented<I18nResourcesEventHandlers, I18nResourcesConfig> {
  /**
   * 言語毎のリソース情報
   */
  private _resources: { [language: string | symbol]: ResourceInfo } = {};

  /**
   * リソースの追加
   * @param language 言語
   * @param resource リソース
   */
  set(language: string | symbol, resource: I18nResource): void {
    const resourceInfo = this._updateResourceInfo(language, resource, true);
    this.fire(I18nResourcesEvents.resourceset, { language, resource: resourceInfo.resource });
  }

  /**
   * デフォルトリソースの追加
   * @param resource リソース
   */
  setDefault(resource: I18nResource): void {
    this.set(DEFAULT, resource);
  }

  /**
   * リソースの更新
   * @param language 言語
   * @param resource リソースの差分
   */
  update(language: string | symbol, resource: I18nResource): void {
    const resourceInfo = this._updateResourceInfo(language, resource);
    this.fire(I18nResourcesEvents.resourceupdate, { language, resource: resourceInfo.resource });
  }

  /**
   * デフォルトリソースの更新
   * @param resource リソースの差分
   */
  updateDefault(resource: I18nResource): void {
    this.update(DEFAULT, resource);
  }

  /**
   * リソースの更新
   * @param language 言語
   * @param resource リソース
   * @param completed 完全なリソースを設定する際にtrue
   */
  private _updateResourceInfo(language: string | symbol, resource: I18nResource, completed?: boolean): ResourceInfo {
    const me = this,
      resourceInfo = me._getResourceInfo(language);
    Object.assign(resourceInfo.resource, resource);
    if (completed != null) {
      resourceInfo.completed = completed;
    }
    return resourceInfo;
  }

  /**
   * リソース情報を取得する
   * @param language
   * @returns
   */
  private _getResourceInfo(language: string | symbol): ResourceInfo {
    const me = this,
      resourceInfo = me._resources[language] || { language, resource: {}, completed: false };
    return resourceInfo;
  }

  /**
   * リソース値を取得する
   * @param language 言語
   * @returns
   */
  get(language: string, key: string): any {
    let value = this._getResourceValue(language, key);
    if (value === undefined) {
      // 指定の言語で取得できなかったらデフォルトから取得
      value = this._getResourceValue(DEFAULT, key);
    }
    return value;
  }

  /**
   * リソースから値を取得する
   * @param language
   * @param key
   * @returns
   */
  private _getResourceValue(language: string | symbol, key: string): any {
    const { resource } = this._getResourceInfo(language);
    if (key in resource) {
      return resource[key];
    } else if (has(resource, key)) {
      return get(resource, key);
    }
    return;
  }

  /**
   * リソースを取得する
   * @param language 言語
   * @returns
   */
  getResource(language: string): I18nResource {
    return this._getResourceInfo(language).resource;
  }
}
export default I18nResources;
