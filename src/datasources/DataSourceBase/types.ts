import { EventedConfig, EventedEventHandlers } from '../../base/Evented';
import { EventInfo } from '../../events/Observable';
import { IReader, ReaderConfig } from '../../readers';
import { IWriter, WriterConfig } from '../../writers';
import { CreateOptions, DataSourceConfig, DeleteOptions, ReadOptions, UpdateOptions } from '../types';
import { DataSourceEventsBase } from './constants';

/**
 * イベントハンドラー
 */
export type DataSourceEventHandlersBase<D = any> = EventedEventHandlers & {
  [DataSourceEventsBase.beforeread]?: (event: EventInfo<any>) => void;
  [DataSourceEventsBase.read]?: (event: EventInfo<any>) => void;
  [DataSourceEventsBase.afterread]?: (event: EventInfo<{ data: D }>) => void;
  [DataSourceEventsBase.readerror]?: (event: EventInfo<{ error: any }>) => void;
};

/**
 * createメソッドのオプション
 */
export type CreateOptionsBase = CreateOptions;

/**
 * readメソッドのオプション
 */
export type ReadOptionsBase = ReadOptions;

/**
 * updateメソッドのオプション
 */
export type UpdateOptionsBase = UpdateOptions;

/**
 * deleteメソッドのオプション
 */
export type DeleteOptionsBase = DeleteOptions;

/**
 * コンフィグ
 */
export type DataSourceConfigBase<
  D = any,
  H extends DataSourceEventHandlersBase<D> = DataSourceEventHandlersBase<D>,
> = EventedConfig<H> &
  DataSourceConfig &
  CreateOptionsBase &
  ReadOptionsBase &
  UpdateOptionsBase &
  DeleteOptionsBase & {
    /**
     * リソースを取得する際に変換が必要な場合に指定する
     */
    reader?: string | ReaderConfig | IReader;

    /**
     * リソースを保存する際に変換が必要な場合に指定する
     */
    writer?: string | WriterConfig | IWriter;
  };
