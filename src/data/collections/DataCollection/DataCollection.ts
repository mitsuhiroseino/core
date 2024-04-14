import { EntryItem } from '../../entries';
import DataCollectionBase from '../DataCollectionBase';
import { DataCollectionConfig, DataCollectionEventHandlers } from './types';

/**
 * EntryItemのインスタンスをレコードに持つコレクション
 */
class DataCollection<
  I extends EntryItem = EntryItem,
  S extends I[] = I[],
  H extends DataCollectionEventHandlers<I> = DataCollectionEventHandlers<I>,
  C extends DataCollectionConfig<I, S, H> = DataCollectionConfig<I, S, H>,
> extends DataCollectionBase<I, S, H, C> {
  /**
   * 種別
   */
  static TYPE = 'data';
}
export default DataCollection;
