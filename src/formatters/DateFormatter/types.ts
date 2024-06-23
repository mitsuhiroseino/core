import { FormatOptions } from '@visue/utils/date/format';
import { FormatOptionsBase, FormatterConfigBase } from '../FormatterBase';

/**
 * formatメソッドのオプション
 */
export type DateFormatOptions = FormatOptionsBase & FormatOptions;

/**
 * コンフィグ
 */
export type DateFormatterConfig = FormatterConfigBase & DateFormatOptions;
