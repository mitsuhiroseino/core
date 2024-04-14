import { ExamineOptionsBase, RelationalOperatorConfigBase } from '../RelationalOperatorBase';

/**
 * examineメソッドのオプション
 */
export type NotEqualExamineOptions<V = any> = ExamineOptionsBase<V>;

/**
 * コンフィグ
 */
export type NotEqualRelationalOperatorConfig<V = any> = RelationalOperatorConfigBase<V> & NotEqualExamineOptions<V>;
