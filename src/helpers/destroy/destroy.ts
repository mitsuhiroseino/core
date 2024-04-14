import DestructibleBase from '../../base/DestructibleBase';
import asArray from '../../utils/array/asArray';

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
