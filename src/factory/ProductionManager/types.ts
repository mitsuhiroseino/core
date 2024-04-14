import Factory, { FactoryableConfig, FactoryableConstructor, IFactoryable } from '../Factory';

/**
 * ProductionManagerのコンフィグ
 */
export type ProductionManagerConfig<
  I extends IFactoryable = IFactoryable,
  C extends FactoryableConfig = FactoryableConfig,
> = {
  /**
   * ファクトリー
   */
  factory: Factory<I, C>;

  /**
   * プロダクト
   */
  products?: (FactoryableConstructor<I> | I)[];
};
