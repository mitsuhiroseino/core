import { CompoundFilterConfigBase, CompoundMatchOptionsBase } from '../CompoundFilterBase';

/**
 * matchメソッドのオプション
 */
export type AndMatchOptions = CompoundMatchOptionsBase;

/**
 * コンフィグ
 */
export type AndFilterConfig = CompoundFilterConfigBase & AndMatchOptions;
