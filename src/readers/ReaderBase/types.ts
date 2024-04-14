import { ConfigBase } from '../../base/Base';
import { ReadOptions, ReaderConfig } from '../types';

/**
 * readメソッドのオプション
 */
export type ReadOptionsBase = ReadOptions;

/**
 * Readerのコンフィグ
 */
export type ReaderConfigBase<I = any, C extends ReaderConfigBase<I, any> = ReaderConfigBase<I, any>> = ConfigBase &
  ReaderConfig<I, C>;
