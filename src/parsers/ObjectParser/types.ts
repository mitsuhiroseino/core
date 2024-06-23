import { ParseOptions } from '@visue/utils/object/parse';
import { ParseOptionsBase, ParserConfigBase } from '../ParserBase';

/**
 * parseメソッドのオプション
 */
export type ObjectParseOptions = ParseOptionsBase & ParseOptions;

/**
 * コンフィグ
 */
export type ObjectParserConfig = ParserConfigBase & ObjectParseOptions;
