import { FormatterConfig } from '@visue/datakit/formatters';
import { ParserConfig } from '@visue/datakit/parsers';
import { ConfigBase } from '../../../base/Base';
import { ValueTypeConfig } from '../types';

/**
 * コンフィグ
 */
export type ValueTypeBaseConfig<
  P extends ParserConfig = ParserConfig,
  F extends FormatterConfig = FormatterConfig,
> = ConfigBase & ValueTypeConfig<P, F>;
