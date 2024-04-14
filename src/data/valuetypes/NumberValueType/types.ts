import { NumberFormatterConfig } from '../../../formatters/NumberFormatter';
import { NumberParserConfig } from '../../../parsers/NumberParser';
import { ValueTypeBaseConfig } from '../ValueTypeBase';

/**
 * コンフィグ
 */
export type NumberValueTypeConfig = ValueTypeBaseConfig<NumberParserConfig, NumberFormatterConfig>;
