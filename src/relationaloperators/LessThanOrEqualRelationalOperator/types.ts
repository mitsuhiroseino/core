import { ExamineOptionsBase, RelationalOperatorConfigBase } from '../RelationalOperatorBase';

/**
 * examineメソッドのオプション
 */
export type LessThanOrEqualExamineOptions<V = any> = ExamineOptionsBase<V>;

/**
 * コンフィグ
 */
export type LessThanOrEqualRelationalOperatorConfig<V = any> = RelationalOperatorConfigBase<V> &
  LessThanOrEqualExamineOptions<V>;
