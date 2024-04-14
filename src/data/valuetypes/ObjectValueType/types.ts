import { ObjectFormatterConfig } from '../../../formatters/ObjectFormatter';
import { ObjectParserConfig } from '../../../parsers/ObjectParser';
import { ValueTypeBaseConfig } from '../ValueTypeBase';

/**
 * コンフィグ
 */
export type ObjectValueTypeConfig = ValueTypeBaseConfig<ObjectParserConfig, ObjectFormatterConfig>;
