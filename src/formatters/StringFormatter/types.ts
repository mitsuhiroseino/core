import { FormatOptions } from '@visue/utils/string/format';
import { FormatOptionsBase, FormatterConfigBase } from '../FormatterBase';

/**
 * formatメソッドのオプション
 */
export type StringFormatOptions = FormatOptionsBase & FormatOptions;

/**
 * コンフィグ
 */
export type StringFormatterConfig = FormatterConfigBase &
  StringFormatOptions & {
    /**
     * 埋め込み文字を示すトークンの開始文字列
     * デフォルトは['{{','}}']
     * extractTokensFnが設定されている場合は無効
     */
    tokenBracket?: [string, string];
  };
