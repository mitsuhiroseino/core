import { ConfigBase, IBase } from '../../base/Base';
import { Constructor, IdentifiableItem } from '../../types';
import uuid from '../../utils/data/uuid';
import { IdentifiableConfig } from './types';

/**
 * IDを持つクラスのmixin
 */
function Identifiable<
  C extends ConfigBase = ConfigBase,
  T extends Constructor<IBase<C & IdentifiableConfig>> = Constructor<IBase<C & IdentifiableConfig>>,
  R = Constructor<IBase<C & IdentifiableConfig>>,
>(TargetClass: T | any): R {
  abstract class IdentifiableClass extends (TargetClass as T) implements IdentifiableItem {
    /**
     * ID
     */
    readonly $id: string;

    constructor(...args: any[]) {
      super(args[0]);
      this.$id = args[0]?.id ? args[0].id : uuid();
    }
  }
  return IdentifiableClass as R;
}
export default Identifiable;
