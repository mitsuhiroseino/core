import { ParseOptions } from '@visue/utils/date/parse';
import { ParseOptionsBase, ParserConfigBase } from '../ParserBase';

/**
 * parseメソッドのオプション
 */
export type DateParseOptions = ParseOptionsBase & ParseOptions;

/**
 * コンフィグ
 */
export type DateParserConfig = ParserConfigBase & DateParseOptions;
