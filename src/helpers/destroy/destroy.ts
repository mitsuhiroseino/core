import asArray from '@visue/utils/array/asArray';
import DestructibleBase from '../../base/DestructibleBase';

/**
 * DestructibleBaseインスタンスの破棄を行う
 * @param targets
 */
const destroy = (targets: DestructibleBase | DestructibleBase[]): void => {
  asArray(targets).forEach((target) => {
    if (target) {
      target.destructor();
    }
  });
};
export default destroy;
