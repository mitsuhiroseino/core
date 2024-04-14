import { ConfigBase } from '../../base/Base';
import { ExtractOptions, ExtractorConfig } from '../types';

/**
 * extractメソッドのオプション
 */
export type ExtractOptionsBase = ExtractOptions;

/**
 * コンフィグ
 */
export type ExtractorConfigBase = ConfigBase & ExtractorConfig & ExtractOptionsBase;
