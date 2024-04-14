import { EntryItem } from '../../entries';
import { CollectionBaseConfig, CollectionBaseEventHandlers } from '../CollectionBase';

/**
 * イベントハンドラー
 */
export type NoopCollectionEventHandlers<I extends EntryItem = EntryItem> = CollectionBaseEventHandlers<I>;

/**
 * コンフィグ
 */
export type NoopCollectionConfig<
  I extends EntryItem = EntryItem,
  S = any[],
  H extends NoopCollectionEventHandlers<I> = NoopCollectionEventHandlers<I>,
> = CollectionBaseConfig<I, S, H>;
