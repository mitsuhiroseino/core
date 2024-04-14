import { IDestructible } from '../base/DestructibleBase';
import { EventHandlers, IObservable } from '../events/Observable';
import { FactoryableConfig, IFactoryable } from '../factory/Factory';
import { IdentifiableItem } from '../types';

/**
 * コンフィグ
 */
export type SelectionConfig = FactoryableConfig & {
  /**
   * 複数選択可否
   */
  multiple?: boolean;
};

/**
 * 選択情報
 */
export interface ISelection<I extends IdentifiableItem = IdentifiableItem, H = EventHandlers>
  extends IObservable<H>,
    IFactoryable,
    IDestructible {
  /**
   * Selectionのインスタンスであるか
   */
  readonly isSelection: true;

  /**
   * 要素を選択する
   * @param target 選択対象
   */
  select(target: I | I[]): void;

  /**
   * 要素の選択を解除する
   * @param target 選択解除対象
   */
  unselect(target: string | I | (string | I)[]): I[];

  /**
   * 全ての選択を解除する
   */
  clear(): I[];

  /**
   * 対象は選択されているか
   * @param target
   */
  has(target: string | I): boolean;
}
