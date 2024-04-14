import { CompoundFilterConfigBase, CompoundMatchOptionsBase } from '../CompoundFilterBase';

/**
 * matchメソッドのオプション
 */
export type OrMatchOptions = CompoundMatchOptionsBase;

/**
 * コンフィグ
 */
export type OrFilterConfig = CompoundFilterConfigBase & OrMatchOptions;
