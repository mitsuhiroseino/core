import { ExamineOptionsBase, RelationalOperatorConfigBase } from '../RelationalOperatorBase';

/**
 * examineメソッドのオプション
 */
export type GreaterThanExamineOptions<V = any> = ExamineOptionsBase<V>;

/**
 * コンフィグ
 */
export type GreaterThanRelationalOperatorConfig<V = any> = RelationalOperatorConfigBase<V> &
  GreaterThanExamineOptions<V>;
