import { EntryItem } from '../../entries';
import { CollectionBaseConfig, CollectionBaseEventHandlers } from '../CollectionBase';

/**
 * イベントハンドラー
 */
export type ChainedCollectionEventHandlers<I extends EntryItem = EntryItem> = CollectionBaseEventHandlers<I>;

/**
 * コンフィグ
 */
export type ChainedCollectionConfig<
  I extends EntryItem = EntryItem,
  S = any[],
  H extends ChainedCollectionEventHandlers<I> = ChainedCollectionEventHandlers<I>,
> = CollectionBaseConfig<I, S, H>;
