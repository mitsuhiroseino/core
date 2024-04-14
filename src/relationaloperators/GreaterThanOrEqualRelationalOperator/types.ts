import { ExamineOptionsBase, RelationalOperatorConfigBase } from '../RelationalOperatorBase';

/**
 * examineメソッドのオプション
 */
export type GreaterThanOrEqualExamineOptions<V = any> = ExamineOptionsBase<V>;

/**
 * コンフィグ
 */
export type GreaterThanOrEqualRelationalOperatorConfig<V = any> = RelationalOperatorConfigBase<V> &
  GreaterThanOrEqualExamineOptions<V>;
