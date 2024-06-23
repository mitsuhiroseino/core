import { IEvented } from '../../base/Evented';
import { FactoryableConfig, IFactoryable } from '../../factory/Factory';
import { IdentifiableItem } from '../../types';
import { IValueRule, ValueRuleConfig } from '../valuerules';

/**
 * Entityに設定可能な要素
 */
export type EntityItem = IdentifiableItem & {
  /**
   * 任意の項目
   */
  [key: string]: any;
};

/**
 * コンフィグ
 */
export type EntityConfig<I extends EntityItem = EntityItem> = FactoryableConfig & {
  /**
   * 対象の要素
   */
  item: Omit<I, keyof IdentifiableItem> & Partial<IdentifiableItem>;

  /**
   * 値規定
   */
  valueRules: (IValueRule | ValueRuleConfig)[];
};

/**
 * エンティティインターフェイス
 */
export interface IEntity<I extends EntityItem = EntityItem> extends IFactoryable, IEvented {
  /**
   * エンティティのインスタンスであるか
   */
  readonly isEntity: true;

  /**
   * ID
   */
  readonly $id: string;

  /**
   * 要素
   */
  readonly item: I;

  /**
   * 項目値を取得する
   * @param name 項目名
   * @returns
   */
  get<V = unknown>(name: string): V;

  /**
   * 項目に値を設定する
   * @param name 項目名
   * @param value 値
   * @param silent trueの場合、updateイベントを発火しない
   * @returns 値が変更された場合にtrue
   */
  set<V = unknown>(name: string, value: V, silent?: boolean): boolean;

  /**
   * 項目値の更新
   * @param updates 更新情報
   * @param silent trueの場合、updateイベントを発火しない
   * @returns 値が変更された場合にtrue
   */
  update(updates: Partial<I>, silent?: boolean): boolean;
}
