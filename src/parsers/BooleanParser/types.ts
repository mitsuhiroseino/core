import { ParseOptions } from '@visue/utils/boolean/parse';
import { ParseOptionsBase, ParserConfigBase } from '../ParserBase';

/**
 * parseメソッドのオプション
 */
export type BooleanParseOptions = ParseOptionsBase & ParseOptions;

/**
 * コンフィグ
 */
export type BooleanParserConfig = ParserConfigBase & BooleanParseOptions;
