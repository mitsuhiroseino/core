import { IdentifiableItem } from '@visue/utils/types';
import SelectionBase from '../SelectionBase';
import { DataSelectionConfig, DataSelectionEventHandlers } from './types';

/**
 * 選択状態クラス
 */
class DataSelection extends SelectionBase<IdentifiableItem, DataSelectionEventHandlers, DataSelectionConfig> {
  /**
   * 種別
   */
  static TYPE = 'data';
}
export default DataSelection;
