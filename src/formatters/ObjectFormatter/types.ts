import { FormatOptions } from '../../utils/object/format';
import { FormatOptionsBase, FormatterConfigBase } from '../FormatterBase';

/**
 * formatメソッドのオプション
 */
export type ObjectFormatOptions = FormatOptionsBase & FormatOptions;

/**
 * コンフィグ
 */
export type ObjectFormatterConfig = FormatterConfigBase & ObjectFormatOptions;
