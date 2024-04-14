import Factory from '../../factory/Factory';
import { IMessageNotifier, MessageNotifierConfig } from './types';

const FACTORY = new Factory<IMessageNotifier, MessageNotifierConfig>({
  category: 'messagenotifier',
});
export default FACTORY;
