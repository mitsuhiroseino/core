import MessageNotifierBase from '../MessageNotifierBase';
import { MessageNotifier } from '../types';
import { TargetMessageNotifierConfig, TargetSetOptions } from './types';

class TargetMessageNotifier
  extends MessageNotifierBase<TargetSetOptions, TargetMessageNotifierConfig>
  implements MessageNotifier
{
  protected _set(message: string, options: TargetSetOptions): void {
    const { target } = options;
    if (target != null) {
      const setter = this.config.setters[target];
      if (setter) {
        // 対象にメッセージを設定する
        setter(message);
      }
    }
  }
}
export default TargetMessageNotifier;
