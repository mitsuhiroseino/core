import asArray from '@visue/utils/array/asArray';
import Factory, { FactoryableConfig, FactoryableConstructor, IFactoryable } from '../Factory';
import { ProductionManagerConfig } from './types';

/**
 * Factoryで製造するProductの管理を行うクラス
 */
class ProductionManager<
  I extends IFactoryable = IFactoryable,
  C extends ProductionManagerConfig<I> = ProductionManagerConfig<I>,
  F extends FactoryableConfig = FactoryableConfig,
> {
  /**
   * productの製造を行うfactory
   */
  private _factory: Factory<I, F>;

  constructor(config: C) {
    const { factory, products = [] } = config;
    this._factory = factory;
    this.register(products);
  }

  /**
   * productをFactoryに登録する
   * @param product クラス or インスタンス
   */
  register(products: FactoryableConstructor<I> | I | (FactoryableConstructor<I> | I)[]) {
    for (const product of asArray(products)) {
      this._factory.register(product);
    }
  }

  /**
   * targetがFactoryableConfigの場合はインスタンスを取得する
   * @param target
   * @returns
   */
  get<R extends I = I>(target: string | F | I): R {
    return this._factory.get(target);
  }

  /**
   * targetsがtypeやFactoryableConfigの場合はインスタンスを取得する
   * @param targets
   * @returns
   */
  from<O extends F = F, R extends I = I>(targets: string | O | I | (string | O | I)[]): R[] {
    return this._factory.from(targets);
  }

  /**
   * コンフィグを元にインスタンスを生成して返却する
   * @param target タイプまたはコンフィグ
   * @param config コンフィグ
   */
  create<O extends F = F, R extends I = I>(target: O | string, config?: Omit<O, 'type'>): R {
    return this._factory.create(target, config);
  }

  /**
   * 指定の種別が存在するか
   * @param type 種別
   * @returns
   */
  has(type: string): boolean {
    return this._factory.has(type);
  }
}
export default ProductionManager;
