import Factory from '../../factory/Factory';
import { FieldConfig, IField } from './types';

const FACTORY = new Factory<IField, FieldConfig>({ category: 'field', products: [] });
export default FACTORY;
