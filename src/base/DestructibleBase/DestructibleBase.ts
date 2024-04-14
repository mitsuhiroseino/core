import Base from '../Base';
import { DestructibleConfigBase, IDestructible } from './types';

/**
 * destructorメソッドを持つクラスの基底クラス
 */
export default abstract class DestructibleBase<C extends DestructibleConfigBase = DestructibleConfigBase>
  extends Base<C>
  implements IDestructible
{
  /**
   * 破棄状態か
   */
  protected _isDestroyed: boolean = false;

  get isDestroyed() {
    return this._isDestroyed;
  }

  destructor() {
    this._isDestroyed = true;
  }

  protected _deleteProperties(names: string[]) {
    for (const name of names) {
      delete this[name];
    }
  }
}
