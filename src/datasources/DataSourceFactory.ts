import Factory from '../factory/Factory';
import { DataSourceConfig, IDataSource } from './types';

const FACTORY = new Factory<IDataSource, DataSourceConfig>({
  category: 'datasource',
});
export default FACTORY;
