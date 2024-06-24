import { IdentifiableItem } from '@visue/utils/types';
import isString from 'lodash/isString';

const toId = (target: string | IdentifiableItem): string => {
  return isString(target) ? target : target.$id;
};
export default toId;
