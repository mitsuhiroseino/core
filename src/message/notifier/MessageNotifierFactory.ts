import EasyFactory from '@visue/factory/easy/EasyFactory';
import GlobalMessageNotifier from './GlobalMessageNotifier';
import LogMessageNotifier from './LogMessageNotifier';
import TargetMessageNotifier from './TargetMessageNotifier';
import { NOTIFIER_TYPES } from './constants';
import { MessageNotifier } from './types';

const MessageNotifierFactory = new EasyFactory<MessageNotifier>({
  category: 'messagenotifier',
  products: [
    { type: NOTIFIER_TYPES.GLOBAL, Class: GlobalMessageNotifier },
    { type: NOTIFIER_TYPES.LOG, Class: LogMessageNotifier },
    { type: NOTIFIER_TYPES.TARGET, Class: TargetMessageNotifier },
  ],
});
export default MessageNotifierFactory;
