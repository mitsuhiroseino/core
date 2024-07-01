import FactoryManager from '../../factory/FactoryManager';
import GlobalMessageNotifier from './GlobalMessageNotifier';
import LogMessageNotifier from './LogMessageNotifier';
import factory from './MessageNotifierFactory';
import TargetMessageNotifier from './TargetMessageNotifier';

const FACTORY_MANAGER = new FactoryManager({
  factory,
  products: [GlobalMessageNotifier, TargetMessageNotifier, new LogMessageNotifier()],
});
export default FACTORY_MANAGER;
