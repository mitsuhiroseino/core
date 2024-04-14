import { IDestructible } from '../../base/DestructibleBase';
import { FactoryableConfig, IFactoryable } from '../../factory/Factory';
import { SetOptions } from '../types';

/**
 * コンフィグ
 */
export type MessageNotifierConfig = FactoryableConfig & SetOptions;

/**
 * メッセージを表示するインターフェイス
 */
export interface IMessageNotifier<O extends SetOptions = SetOptions> extends IFactoryable, IDestructible {
  /**
   * メッセージを設定する
   * @param message
   * @param options
   */
  set(message: string, options?: O): void;
}
