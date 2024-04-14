import { ExamineOptionsBase, RelationalOperatorConfigBase } from '../RelationalOperatorBase';

/**
 * examineメソッドのオプション
 */
export type IncludeExamineOptions<V = any> = ExamineOptionsBase<V>;

/**
 * コンフィグ
 */
export type IncludeRelationalOperatorConfig<V = any> = RelationalOperatorConfigBase<V> & IncludeExamineOptions<V>;
