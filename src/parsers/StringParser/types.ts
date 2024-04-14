import { ParseOptionsBase, ParserConfigBase } from '../ParserBase';

/**
 * parseメソッドのオプション
 */
export type StringParseOptions = ParseOptionsBase;

/**
 * コンフィグ
 */
export type StringParserConfig = ParserConfigBase & StringParseOptions;
