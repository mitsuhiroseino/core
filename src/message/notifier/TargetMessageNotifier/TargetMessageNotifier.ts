import MessageNotifierBase from '../MessageNotifierBase';
import { IMessageNotifier } from '../types';
import { TargetMessageNotifierConfig, TargetSetOptions } from './types';

class TargetMessageNotifier
  extends MessageNotifierBase<TargetSetOptions, TargetMessageNotifierConfig>
  implements IMessageNotifier
{
  /**
   * 種別
   */
  static TYPE = 'target';

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
