import MessageNotifierBase from '../MessageNotifierBase';
import { MessageNotifier } from '../types';
import { GlobalMessageNotifierConfig, GlobalSetOptions } from './types';

class GlobalMessageNotifier
  extends MessageNotifierBase<GlobalSetOptions, GlobalMessageNotifierConfig>
  implements MessageNotifier<GlobalSetOptions>
{
  protected _set(message: string, options: GlobalSetOptions): void {
    // メッセージを設定する
    this.config.setter(message);
  }
}
export default GlobalMessageNotifier;
