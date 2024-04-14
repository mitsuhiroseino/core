import { ConfigBase } from '../../../base/Base';
import { FormatterConfig } from '../../../formatters';
import { ParserConfig } from '../../../parsers';
import { ValueTypeConfig } from '../types';

/**
 * コンフィグ
 */
export type ValueTypeBaseConfig<
  P extends ParserConfig = ParserConfig,
  F extends FormatterConfig = FormatterConfig,
> = ConfigBase & ValueTypeConfig<P, F>;
