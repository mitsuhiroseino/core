import { FormatOptions } from '../../utils/date/format';
import { ExtractOptionsBase, ExtractorConfigBase } from '../ExtractorBase';

/**
 * extractメソッドのオプション
 */
export type DateExtractOptions = ExtractOptionsBase &
  FormatOptions & {
    /**
     * フォーマットの結果を数値に変換
     */
    toNumber?: boolean;
  };

/**
 * コンフィグ
 */
export type DateExtractorConfig = ExtractorConfigBase & DateExtractOptions;
