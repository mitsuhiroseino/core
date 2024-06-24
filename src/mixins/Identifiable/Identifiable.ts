import uuid from '@visue/utils/data/uuid';
import { Constructor, IdentifiableItem } from '@visue/utils/types';
import { ConfigBase, IBase } from '../../base/Base';
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
