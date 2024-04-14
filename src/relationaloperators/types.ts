import { FactoryableConfig, IFactoryable } from '../factory/Factory';

/**
 * examineメソッドのオプション
 */
export type ExamineOptions<V = any> = FactoryableConfig & {
  /**
   * 条件となる値
   */
  value: V;
};

/**
 * コンフィグ
 */
export type RelationalOperatorConfig<V = any> = FactoryableConfig & {
  /**
   * 条件となる値
   */
  value: V;
};

/**
 * データを読み込む
 */
export interface IRelationalOperator<V = any, O extends ExamineOptions<V> = ExamineOptions<V>> extends IFactoryable {
  /**
   * 条件に一致するか検証する
   * @param target 検証対象の値
   */
  examine(target: V, options: O): boolean;
}
