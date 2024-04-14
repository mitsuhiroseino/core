import { FactoryableConstructor, IFactoryable } from '../../factory/Factory';

const getFactoryableType = (instance: IFactoryable) => (instance.constructor as FactoryableConstructor).TYPE;
export default getFactoryableType;
