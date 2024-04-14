import ValueTypeBase from '../ValueTypeBase';
import { DateValueTypeConfig } from './types';

/**
 * Date
 */
class DateValueType<C extends DateValueTypeConfig = DateValueTypeConfig> extends ValueTypeBase<Date, C> {
  /**
   * 種別
   */
  static TYPE = 'date';

  protected _serialize(value: Date): any {
    return value.toISOString();
  }
}
export default DateValueType;
