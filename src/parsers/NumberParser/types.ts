import { ParseOptions } from '@visue/utils/number/parse';
import { ParseOptionsBase, ParserConfigBase } from '../ParserBase';

/**
 * parseメソッドのオプション
 */
export type NumberParseOptions = ParseOptionsBase & ParseOptions;

/**
 * コンフィグ
 */
export type NumberParserConfig = ParserConfigBase & NumberParseOptions;
