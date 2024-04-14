import { ExamineOptionsBase, RelationalOperatorConfigBase } from '../RelationalOperatorBase';

/**
 * examineメソッドのオプション
 */
export type LessThanExamineOptions<V = any> = ExamineOptionsBase<V>;

/**
 * コンフィグ
 */
export type LessThanRelationalOperatorConfig<V = any> = RelationalOperatorConfigBase<V> & LessThanExamineOptions<V>;
