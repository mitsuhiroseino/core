import FactoryManager from '../../factory/FactoryManager';
import AnyValueType from './AnyValueType';
import BooleanValueType from './BooleanValueType';
import DateValueType from './DateValueType';
import NumberValueType from './NumberValueType';
import ObjectValueType from './ObjectValueType';
import StringValueType from './StringValueType';
import factory from './ValueTypeFactory';

const FACTORY_MANAGER = new FactoryManager({
  factory,
  products: [AnyValueType, BooleanValueType, DateValueType, NumberValueType, ObjectValueType, StringValueType],
});
export default FACTORY_MANAGER;
