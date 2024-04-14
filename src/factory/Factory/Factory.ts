import isEmpty from 'lodash/isEmpty';
import isFunction from 'lodash/isFunction';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';

import asArray from '../../utils/array/asArray';
import { FactoryConfig, FactoryableConfig, FactoryableConstructor, IFactoryable } from './types';

/**
 * 登録された情報
 */
type Product<I extends IFactoryable = IFactoryable> = {
  /**
   * クラス
   */
  class?: FactoryableConstructor<I>;
  /**
   * シングルトンインスタンス
   */
  instance?: I;
};

class Factory<I extends IFactoryable = IFactoryable, C extends FactoryableConfig = FactoryableConfig> {
  /**
   * 管理しているクラスの情報
   */
  private _products: { [type: string]: Product<I> } = {};

  /**
   * カテゴリー
   */
  readonly category: string;

  constructor(config: FactoryConfig) {
    const { category, products = [] } = config;
    this.category = category;
    for (const product of products) {
      this.register(product as FactoryableConstructor<I> | I);
    }
  }

  /**
   * クラスをFactoryの管理下に置く
   * @param target クラス or インスタンス
   */
  register(target: FactoryableConstructor<I> | I) {
    let clazz, product;
    if (isFunction(target)) {
      // クラスを登録する場合
      clazz = target as FactoryableConstructor<I>;
      product = {
        class: clazz,
      };
    } else {
      // インスタンスを登録する場合
      const instance = target as I;
      clazz = target.constructor as FactoryableConstructor<I>;
      product = {
        instance,
      };
    }
    // 情報を登録
    const { TYPE, ALTS } = clazz;
    this._register(TYPE, product);
    if (ALTS) {
      // 代替種別でも登録
      ALTS.reduce((products, alt) => {
        this._register(alt, product);
        return products;
      }, this._products);
    }
  }

  protected _register(type: string, product: Product<I>) {
    if (type in this._products) {
      console.warn(`${type} of ${this.category} is duplicated.`);
    }
    this._products[type] = product;
  }

  /**
   * targetがFactoryableConfigの場合はインスタンスを取得する
   * @param target
   * @returns
   */
  get<R extends I = I>(target: string | C | I): R {
    if (isString(target) || isPlainObject(target)) {
      return this.create(target as string | C);
    } else {
      return target as R;
    }
  }

  /**
   * targetsがtypeやFactoryableConfigの場合はインスタンスを取得する
   * @param targets
   * @returns
   */
  from<O extends C = C, R extends I = I>(targets: string | O | I | (string | O | I)[]): R[] {
    return asArray(targets).map((target) => this.get(target));
  }

  /**
   * コンフィグを元にインスタンスを生成して返却する
   * @param target タイプまたはコンフィグ
   * @param config コンフィグ
   */
  create<O extends C = C, R extends I = I>(target: O | string, config?: Omit<O, 'type'>): R {
    let type, cfg;
    if (isString(target)) {
      type = target;
      cfg = { type, ...config };
    } else {
      type = target.type;
      cfg = target;
    }
    const product = this._products[type];
    if (product) {
      if (product.class) {
        // クラスが登録されている場合
        if (!isEmpty(cfg) || !product.class.STATELESS) {
          // コンフィグあり or ステートレスではない
          // 新しいインスタンスを作る
          return new product.class(cfg) as R;
        } else {
          // コンフィグなし
          if (!product.instance) {
            // シングルトンインスタンスを作る
            product.instance = new product.class();
          }
          return product.instance as R;
        }
      } else if (product.instance) {
        // インスタンスが登録されてる場合
        // シングルトンインスタンスを返す
        return product.instance as R;
      }
    }
    throw new Error(`The ${type} of ${this.category} is not found.`);
  }

  /**
   * 指定の種別が存在するか
   * @param type 種別
   * @returns
   */
  has(type: string): boolean {
    return type in this._products;
  }
}
export default Factory;
