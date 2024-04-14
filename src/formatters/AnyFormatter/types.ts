import { AnyOptions } from '../../types';
import { FormatOptionsBase, FormatterConfigBase } from '../FormatterBase';

/**
 * formatメソッドのオプション
 */
export type AnyFormatOptions = FormatOptionsBase & AnyOptions;

/**
 * コンフィグ
 */
export type AnyFormatterConfig = FormatterConfigBase &
  AnyFormatOptions & {
    /**
     * フォーマット関数
     * @param value
     * @param config
     * @returns
     */
    format: (value: any, config: AnyFormatterConfig) => string | null;
  };
