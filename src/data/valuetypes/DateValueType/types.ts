import { DateFormatterConfig } from '../../../formatters/DateFormatter';
import { DateParserConfig } from '../../../parsers/DateParser';
import { ValueTypeBaseConfig } from '../ValueTypeBase';

/**
 * コンフィグ
 */
export type DateValueTypeConfig = ValueTypeBaseConfig<DateParserConfig, DateFormatterConfig>;
