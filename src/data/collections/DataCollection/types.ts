import { EntryItem } from '../../entries';
import { DataCollectionBaseConfig, DataCollectionBaseEventHandlers } from '../DataCollectionBase';

/**
 * イベントハンドラー
 */
export type DataCollectionEventHandlers<I extends EntryItem = EntryItem> = DataCollectionBaseEventHandlers<I>;

/**
 * コンフィグ
 */
export type DataCollectionConfig<
  I extends EntryItem = EntryItem,
  S = any[],
  H extends DataCollectionEventHandlers<I> = DataCollectionEventHandlers<I>,
> = DataCollectionBaseConfig<I, S, H>;
