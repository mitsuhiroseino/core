import { BooleanFormatterConfig } from '../../../formatters/BooleanFormatter';
import { BooleanParserConfig } from '../../../parsers/BooleanParser';
import { ValueTypeBaseConfig } from '../ValueTypeBase';

/**
 * コンフィグ
 */
export type BooleanValueTypeConfig = ValueTypeBaseConfig<BooleanParserConfig, BooleanFormatterConfig>;
