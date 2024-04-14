import { Constructor, IdentifiableItem } from '../../types';

/**
 * Factoryableのコンフィグ
 */
export type FactoryableConfig = {
  /**
   * ID
   */
  $id?: string;

  /**
   * 種別
   */
  type?: string;
};

/**
 * Factoryで扱うクラスのインターフェイス
 */
export interface IFactoryable extends IdentifiableItem {
  /**
   * 種別
   */
  readonly type: string;
}

/**
 * IFactoryableのコンストラクター
 */
export type FactoryableConstructor<I extends IFactoryable = IFactoryable> = Constructor<I> & {
  /**
   * カテゴリー
   */
  CATEGORY: string;

  /**
   * 種別
   */
  TYPE: string;

  /**
   * 代替種別
   */
  ALTS?: string[];

  /**
   * コンストラクターに渡すconfig以外の状態を持たない
   * trueの場合はコンフィグ無しのインスタンスをシングルトンとする
   */
  STATELESS?: boolean;
};

/**
 * Factoryのコンフィグ
 */
export type FactoryConfig = {
  /**
   * カテゴリー
   */
  category: string;

  /**
   * プロダクト
   */
  products?: (FactoryableConstructor | IFactoryable)[];
};
