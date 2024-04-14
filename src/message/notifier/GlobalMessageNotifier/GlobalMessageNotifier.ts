import MessageNotifierBase from '../MessageNotifierBase';
import { IMessageNotifier } from '../types';
import { GlobalMessageNotifierConfig, GlobalSetOptions } from './types';

class GlobalMessageNotifier
  extends MessageNotifierBase<GlobalSetOptions, GlobalMessageNotifierConfig>
  implements IMessageNotifier<GlobalSetOptions>
{
  /**
   * 種別
   */
  static TYPE = 'global';

  protected _set(message: string, options: GlobalSetOptions): void {
    // メッセージを設定する
    this.config.setter(message);
  }
}
export default GlobalMessageNotifier;
