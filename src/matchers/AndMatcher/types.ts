import { CompoundMatchOptionsBase, CompoundMatcherConfigBase } from '../CompoundMatcherBase';

/**
 * matchメソッドのオプション
 */
export type AndMatchOptions = CompoundMatchOptionsBase;

/**
 * コンフィグ
 */
export type AndMatcherConfig = CompoundMatcherConfigBase & AndMatchOptions;
