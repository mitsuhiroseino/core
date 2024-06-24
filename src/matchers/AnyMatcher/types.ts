import { AnyOptions } from '@visue/utils/types';
import { MatchOptionsBase, MatcherConfigBase } from '../MatcherBase';

export type AnyMatchOptions = MatchOptionsBase & AnyOptions;

/**
 * コンフィグ
 */
export type AnyMatcherConfig = MatcherConfigBase &
  AnyMatchOptions & {
    /**
     * 任意の比較関数
     * @param value1 値1
     * @param value2 値2
     * @param config コンフィグ
     * @returns 比較結果
     */
    match?: (value1: any, value2: any, config?: AnyMatcherConfig) => boolean;
  };
