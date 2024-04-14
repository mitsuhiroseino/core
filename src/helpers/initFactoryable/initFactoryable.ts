import { FactoryableConfig, IFactoryable } from '../../factory/Factory';
import assignId from '../assignId';
import getFactoryableType from '../getFactoryableType';

const initFactoryable = (instance: IFactoryable, config: FactoryableConfig) => {
  const values = {
    $id: assignId(config),
    type: getFactoryableType(instance),
  };
  Object.assign(instance, values);
};
export default initFactoryable;
