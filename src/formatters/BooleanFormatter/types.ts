import { FormatOptions } from '../../utils/boolean/format';
import { FormatOptionsBase, FormatterConfigBase } from '../FormatterBase';

/**
 * formatメソッドのオプション
 */
export type BooleanFormatOptions = FormatOptionsBase & FormatOptions;

/**
 * コンフィグ
 */
export type BooleanFormatterConfig = FormatterConfigBase & BooleanFormatOptions;
