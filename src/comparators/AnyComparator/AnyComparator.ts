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

  protected _compare(value1: any, value2: any, config: AnyComparatorConfig): number {
    return config.compare ? config.compare(value1, value2, config) : 0;
  }
}
export default AnyComparator;
