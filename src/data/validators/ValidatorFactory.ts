import Factory from '../../factory/Factory';
import { IValidator, ValidatorConfig } from './types';

const FACTORY = new Factory<IValidator, ValidatorConfig>({
  category: 'validator',
});
export default FACTORY;
