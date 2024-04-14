import { ConfigBase } from '../../base/Base';
import { WriteOptions, WriterConfig } from '../types';

/**
 * writeメソッドのオプション
 */
export type WriteOptionsBase = WriteOptions;

/**
 * コンフィグ
 */
export type WriterConfigBase = ConfigBase & WriterConfig & WriteOptionsBase;
