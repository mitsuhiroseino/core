import { IdentifiableItem } from '@visue/utils/types';
import { SelectionConfigBase, SelectionEventHandlersBase } from '../SelectionBase';

/**
 * イベントハンドラー
 */
export type DataSelectionEventHandlers = SelectionEventHandlersBase<IdentifiableItem>;

/**
 * コンフィグ
 */
export type DataSelectionConfig = SelectionConfigBase<IdentifiableItem, DataSelectionEventHandlers>;
