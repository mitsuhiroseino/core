import { ParseOptionsBase, ParserConfigBase } from '../ParserBase';

/**
 * parseメソッドのオプション
 */
export type ParseNoopOptions = ParseOptionsBase;

/**
 * コンフィグ
 */
export type NoopParserConfig = ParserConfigBase & ParseNoopOptions;
