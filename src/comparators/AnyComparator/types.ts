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
     * @param value1 値1
     * @param value2 値2
     * @param config コンフィグ
     * @returns 比較結果
     */
    compare?: (value1: any, value2: any, config?: AnyComparatorConfig) => number;
  };
