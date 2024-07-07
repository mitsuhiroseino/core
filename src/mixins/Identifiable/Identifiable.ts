import { Constructor, Identifiable } from '@visue/utils';
import uuid from '@visue/utils/data/uuid';
import { Configurable, ConfigurableConfigBase } from '../../base/ConfigurableBase';
import { IdentifiableConfig } from './types';

/**
 * IDを持つクラスのmixin
 */
function Identifiable<
  C extends ConfigurableConfigBase = ConfigurableConfigBase,
  T extends Constructor<Configurable<C & IdentifiableConfig>> = Constructor<Configurable<C & IdentifiableConfig>>,
  R = Constructor<Configurable<C & IdentifiableConfig>>,
>(TargetClass: T | any): R {
  abstract class IdentifiableClass extends (TargetClass as T) implements Identifiable {
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
