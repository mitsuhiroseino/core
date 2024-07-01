import FactoryManager from '../../factory/FactoryManager';
import AnyValueRule from './AnyValueRule';
import MultipleValueRule from './MultipleValueRule';
import TypedValueRule from './TypedValueRule';
import factory from './ValueRuleFactory';

const FACTORY_MANAGER = new FactoryManager({
  factory,
  products: [AnyValueRule, MultipleValueRule, TypedValueRule],
});
export default FACTORY_MANAGER;
