import { FormatOptions } from '../../utils/number/format';
import { FormatOptionsBase, FormatterConfigBase } from '../FormatterBase';

/**
 * formatメソッドのオプション
 */
export type NumberFormatOptions = FormatOptionsBase & FormatOptions;

/**
 * コンフィグ
 */
export type NumberFormatterConfig = FormatterConfigBase & NumberFormatOptions;
