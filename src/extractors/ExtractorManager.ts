import ProductionManager from '../factory/ProductionManager';
import AnyExtractor from './AnyExtractor';
import DateExtractor from './DateExtractor';
import factory from './ExtractorFactory';
import ObjectExtractor from './ObjectExtractor';

const PRODUCTION_MANAGER = new ProductionManager({
  factory,
  products: [AnyExtractor, DateExtractor, ObjectExtractor],
});
export default PRODUCTION_MANAGER;
