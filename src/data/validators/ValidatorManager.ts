import FactoryManager from '../../factory/FactoryManager';
import LengthRangeValidator from './LengthRangeValidator';
import MaxLengthValidator from './MaxLengthValidator';
import MaxValidator from './MaxValidator';
import MinLengthValidator from './MinLengthValidator';
import MinValidator from './MinValidator';
import RangeValidator from './RangeValidator';
import RequiredValidator from './RequiredValidator';
import factory from './ValidatorFactory';

const FACTORY_MANAGER = new FactoryManager({
  factory,
  products: [
    LengthRangeValidator,
    MaxLengthValidator,
    MaxValidator,
    MinLengthValidator,
    MinValidator,
    RangeValidator,
    RequiredValidator,
  ],
});
export default FACTORY_MANAGER;
