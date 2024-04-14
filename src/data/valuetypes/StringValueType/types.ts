import { StringFormatterConfig } from '../../../formatters/StringFormatter';
import { StringParserConfig } from '../../../parsers/StringParser';
import { ValueTypeBaseConfig } from '../ValueTypeBase';

/**
 * コンフィグ
 */
export type StringValueTypeConfig = ValueTypeBaseConfig<StringParserConfig, StringFormatterConfig>;
