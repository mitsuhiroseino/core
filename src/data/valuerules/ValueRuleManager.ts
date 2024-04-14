import ProductionManager from '../../factory/ProductionManager';
import AnyValueRule from './AnyValueRule';
import MultipleValueRule from './MultipleValueRule';
import TypedValueRule from './TypedValueRule';
import factory from './ValueRuleFactory';

const PRODUCTION_MANAGER = new ProductionManager({
  factory,
  products: [AnyValueRule, MultipleValueRule, TypedValueRule],
});
export default PRODUCTION_MANAGER;
