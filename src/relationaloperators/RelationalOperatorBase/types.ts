import { ConfigBase } from '../../base/Base';
import { ExamineOptions, RelationalOperatorConfig } from '../types';

/**
 * examineメソッドのオプション
 */
export type ExamineOptionsBase<V = any> = ExamineOptions<V>;

/**
 * コンフィグ
 */
export type RelationalOperatorConfigBase<V = any> = ConfigBase & RelationalOperatorConfig<V>;
