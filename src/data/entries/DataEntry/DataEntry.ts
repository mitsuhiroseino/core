import DataEntryBase from '../DataEntryBase';
import { EntryItem } from '../types';
import { DataEntryConfig, DataEntryEventHandlers } from './types';

/**
 * データコレクションのエントリー
 */
class DataEntry<
  I extends EntryItem = EntryItem,
  H extends DataEntryEventHandlers<I> = DataEntryEventHandlers<I>,
  C extends DataEntryConfig<I, H> = DataEntryConfig<I, H>,
> extends DataEntryBase<I, H, C> {
  /**
   * 種別
   */
  static TYPE = 'data';
}
export default DataEntry;
