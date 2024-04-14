import { AnyOptions } from '../../types';
import { MatchOptionsBase, MatcherConfigBase } from '../MatcherBase';

export type AnyMatchOptions = MatchOptionsBase & AnyOptions;

/**
 * コンフィグ
 */
export type AnyMatcherConfig = MatcherConfigBase &
  AnyMatchOptions & {
    /**
     * 任意の比較関数
     * @param value0 値0
     * @param value1 値1
     * @param config コンフィグ
     * @returns 比較結果
     */
    match?: (value0: any, value1: any, config?: AnyMatcherConfig) => boolean;
  };
