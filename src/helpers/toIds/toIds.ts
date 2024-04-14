import { IdentifiableItem } from '../../types';
import asArray from '../../utils/array/asArray';
import toId from '../toId';

const toIds = (targets: string | IdentifiableItem | (string | IdentifiableItem)[]): string[] => {
  return asArray(targets).map((target) => toId(target));
};
export default toIds;
