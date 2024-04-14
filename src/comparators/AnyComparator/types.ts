import { AnyOptions } from '../../types';
import { ComparatorConfigBase, CompareOptionsBase } from '../ComparatorBase';

export type AnyCompareOptions = CompareOptionsBase & AnyOptions;

/**
 * コンフィグ
 */
export type AnyComparatorConfig = ComparatorConfigBase &
  AnyCompareOptions & {
    /**
     * 任意の比較関数
     * @param value0 値0
     * @param value1 値1
     * @param config コンフィグ
     * @returns 比較結果
     */
    compare?: (value0: any, value1: any, config?: AnyComparatorConfig) => number;
  };
