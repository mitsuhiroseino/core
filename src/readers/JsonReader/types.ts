import { JsonParseOptions } from '../../types';
import { ReadOptionsBase, ReaderConfigBase } from '../ReaderBase';

/**
 * readメソッドのオプション
 */
export type JsonReadOptions = ReadOptionsBase & JsonParseOptions;

/**
 * コンフィグ
 */
export type JsonReaderConfig = ReaderConfigBase & JsonReadOptions;
