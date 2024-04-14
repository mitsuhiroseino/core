import Factory from '../factory/Factory';
import { IWriter, WriterConfig } from './types';

const FACTORY = new Factory<IWriter, WriterConfig>({ category: 'writer' });
export default FACTORY;
