import { MatchOptionsBase, MatcherConfigBase } from '../MatcherBase';
import { IMatcher } from '../types';

export type CompoundMatchOptionsBase = MatchOptionsBase;

/**
 * コンフィグ
 */
export type CompoundMatcherConfigBase = MatcherConfigBase &
  CompoundMatchOptionsBase & {
    /**
     * matcherの配列
     */
    items: string | MatcherConfigBase | IMatcher | (string | MatcherConfigBase | IMatcher)[];
  };
