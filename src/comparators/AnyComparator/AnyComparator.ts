import ComparatorBase from '../ComparatorBase';
import { AnyComparatorConfig, AnyCompareOptions } from './types';

/**
 * 任意の比較
 */
class AnyComparator extends ComparatorBase<any, AnyCompareOptions, AnyComparatorConfig> {
  /**
   * 種別
   */
  static TYPE = 'any';

  protected _compare(value0: any, value1: any, config: AnyComparatorConfig): number {
    return config.compare ? config.compare(value0, value1, config) : 0;
  }
}
export default AnyComparator;
