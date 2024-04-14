import { ExamineOptionsBase, RelationalOperatorConfigBase } from '../RelationalOperatorBase';

/**
 * examineメソッドのオプション
 */
export type EqualExamineOptions<V = any> = ExamineOptionsBase<V>;

/**
 * コンフィグ
 */
export type EqualRelationalOperatorConfig<V = any> = RelationalOperatorConfigBase<V> & EqualExamineOptions<V>;
