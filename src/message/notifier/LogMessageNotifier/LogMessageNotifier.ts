import { MessageLevel } from '../../../message/types';
import { MESSAGE_LEVEL } from '../../constants';
import MessageNotifierBase from '../MessageNotifierBase';
import { IMessageNotifier } from '../types';
import { LogMessageNotifierConfig, LogSetOptions } from './types';

class LogMessageNotifier
  extends MessageNotifierBase<LogSetOptions, LogMessageNotifierConfig>
  implements IMessageNotifier
{
  /**
   * 種別
   */
  static TYPE = 'log';

  protected _level: MessageLevel = MESSAGE_LEVEL.DEBUG;

  protected _set(message: string, options: LogSetOptions): void {
    const level = options.level || MESSAGE_LEVEL.DEBUG;
    console[level](message);
  }
}
export default LogMessageNotifier;
