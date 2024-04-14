import ProductionManager from '../../factory/ProductionManager';
import AnyValueType from './AnyValueType';
import BooleanValueType from './BooleanValueType';
import DateValueType from './DateValueType';
import NumberValueType from './NumberValueType';
import ObjectValueType from './ObjectValueType';
import StringValueType from './StringValueType';
import factory from './ValueTypeFactory';

const PRODUCTION_MANAGER = new ProductionManager({
  factory,
  products: [AnyValueType, BooleanValueType, DateValueType, NumberValueType, ObjectValueType, StringValueType],
});
export default PRODUCTION_MANAGER;
