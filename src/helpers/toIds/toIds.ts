import asArray from '@visue/utils/array/asArray';
import { IdentifiableItem } from '../../types';
import toId from '../toId';

const toIds = (targets: string | IdentifiableItem | (string | IdentifiableItem)[]): string[] => {
  return asArray(targets).map((target) => toId(target));
};
export default toIds;
