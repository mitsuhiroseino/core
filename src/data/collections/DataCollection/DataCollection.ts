import { EntityItem } from '../../entities';
import DataCollectionBase from '../DataCollectionBase';
import { DataCollectionConfig, DataCollectionEventHandlers } from './types';

/**
 * EntityItemのインスタンスをレコードに持つコレクション
 */
class DataCollection<
  I extends EntityItem = EntityItem,
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
