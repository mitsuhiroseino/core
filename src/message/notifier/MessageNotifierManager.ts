import ProductionManager from '../../factory/ProductionManager';
import GlobalMessageNotifier from './GlobalMessageNotifier';
import LogMessageNotifier from './LogMessageNotifier';
import factory from './MessageNotifierFactory';
import TargetMessageNotifier from './TargetMessageNotifier';

const PRODUCTION_MANAGER = new ProductionManager({
  factory,
  products: [GlobalMessageNotifier, TargetMessageNotifier, new LogMessageNotifier()],
});
export default PRODUCTION_MANAGER;
