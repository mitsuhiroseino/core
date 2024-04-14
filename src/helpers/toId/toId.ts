import isString from 'lodash/isString';

import { IdentifiableItem } from '../../types';

const toId = (target: string | IdentifiableItem): string => {
  return isString(target) ? target : target.$id;
};
export default toId;
