import { DataEntryBaseConfig, DataEntryBaseEventHandlers } from '../DataEntryBase';
import { EntryItem } from '../types';
import TreeDataEntry from './TreeDataEntry';

/**
 * イベントハンドラー
 */
export type TreeDataEntryEventHandlers<I extends EntryItem = EntryItem> = DataEntryBaseEventHandlers<I>;

/**
 * コンフィグ
 */
export type TreeDataEntryConfig<
  I extends EntryItem = EntryItem,
  H extends TreeDataEntryEventHandlers<I> = TreeDataEntryEventHandlers<I>,
> = DataEntryBaseConfig<I, H> & {
  children?: TreeDataEntry[];
};
