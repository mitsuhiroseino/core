import { AnyFormatterConfig } from '../../../formatters/AnyFormatter';
import { AnyParserConfig } from '../../../parsers/AnyParser';
import { ValueTypeBaseConfig } from '../ValueTypeBase';

/**
 * コンフィグ
 */
export type AnyValueTypeConfig = ValueTypeBaseConfig<AnyParserConfig, AnyFormatterConfig>;
