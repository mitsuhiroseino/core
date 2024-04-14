import ProductionManager from '../../factory/ProductionManager';
import LengthRangeValidator from './LengthRangeValidator';
import MaxLengthValidator from './MaxLengthValidator';
import MaxValidator from './MaxValidator';
import MinLengthValidator from './MinLengthValidator';
import MinValidator from './MinValidator';
import RangeValidator from './RangeValidator';
import RequiredValidator from './RequiredValidator';
import factory from './ValidatorFactory';

const PRODUCTION_MANAGER = new ProductionManager({
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
export default PRODUCTION_MANAGER;
