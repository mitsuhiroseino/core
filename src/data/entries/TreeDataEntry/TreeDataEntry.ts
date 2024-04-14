import toId from '../../../helpers/toId';
import toIds from '../../../helpers/toIds';
import asArray from '../../../utils/array/asArray';
import remove from '../../../utils/array/remove';
import DataEntryBase from '../DataEntryBase';
import { EntryItem } from '../types';
import { TreeDataEntryConfig, TreeDataEntryEventHandlers } from './types';

/**
 * 子要素を持つエントリー
 */
class TreeDataEntry<
  I extends EntryItem = EntryItem,
  H extends TreeDataEntryEventHandlers<I> = TreeDataEntryEventHandlers<I>,
  C extends TreeDataEntryConfig<I, H> = TreeDataEntryConfig<I, H>,
> extends DataEntryBase<I, H, C> {
  /**
   * 種別
   */
  static TYPE = 'treedata';

  private _children?: TreeDataEntry[];

  constructor(config?: C) {
    super(config);
    const me = this,
      { children } = me.config;
    if (children) {
      this._children = asArray(children).map((child) =>
        child instanceof TreeDataEntry ? child : new TreeDataEntry({ item: child, valueRules: this._valueRules }),
      );
    }
  }

  /**
   * 子要素を追加する
   * @param children
   */
  add(children: TreeDataEntry | TreeDataEntry[]): void {
    const items = asArray(children);
    this._children = this._children || [];
    this._children.push(...items);
  }

  /**
   * 子要素を削除する
   * @param children
   */
  remove(children: TreeDataEntry | TreeDataEntry[] | string | string[]): void {
    if (this._children) {
      const ids = toIds(children);
      remove(this._children, (child) => ids.includes(toId(child)));
    }
  }
}
export default TreeDataEntry;
