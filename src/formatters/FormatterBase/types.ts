import { ConfigBase } from '../../base/Base';
import { FormatOptions, FormatterConfig } from '../types';

/**
 * formatメソッドのオプション
 */
export type FormatOptionsBase = FormatOptions;

/**
 * コンフィグ
 */
export type FormatterConfigBase = ConfigBase & FormatterConfig & FormatOptionsBase;
