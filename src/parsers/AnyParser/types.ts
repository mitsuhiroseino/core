import { AnyOptions } from '../../types';
import { ParseOptionsBase, ParserConfigBase } from '../ParserBase';

/**
 * parseメソッドのオプション
 */
export type AnyParseOptions = ParseOptionsBase & AnyOptions;

/**
 * コンフィグ
 */
export type AnyParserConfig = ParserConfigBase &
  AnyParseOptions & {
    /**
     * パース関数
     * @param value
     * @param config
     * @returns
     */
    parse: (value: string, config: AnyParserConfig) => any | null;
  };
