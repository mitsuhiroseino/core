import { CompoundMatchOptionsBase, CompoundMatcherConfigBase } from '../CompoundMatcherBase';

/**
 * matchメソッドのオプション
 */
export type OrMatchOptions = CompoundMatchOptionsBase;

/**
 * コンフィグ
 */
export type OrMatcherConfig = CompoundMatcherConfigBase & OrMatchOptions;
