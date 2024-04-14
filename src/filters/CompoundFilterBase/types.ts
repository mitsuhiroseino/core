import { FilterConfigBase, MatchOptionsBase } from '../FilterBase';
import { FilterConfig, IFilter } from '../types';

/**
 * matchメソッドのオプション
 */
export type CompoundMatchOptionsBase = MatchOptionsBase;

/**
 * コンフィグ
 */
export type CompoundFilterConfigBase = FilterConfigBase &
  CompoundMatchOptionsBase & {
    /**
     * filterの配列
     */
    items: string | FilterConfig | IFilter | (string | FilterConfig | IFilter)[];
  };
