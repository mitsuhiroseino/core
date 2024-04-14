import Base from '../../base/Base';
import initFactoryable from '../../helpers/initFactoryable';
import asArray from '../../utils/array/asArray';
import { IWriter } from '../types';
import { WriteOptionsBase, WriterConfigBase } from './types';

/**
 * writer
 */
abstract class WriterBase<
    D = any,
    O extends WriteOptionsBase = WriteOptionsBase,
    C extends WriterConfigBase = WriterConfigBase,
  >
  extends Base<C>
  implements IWriter<D, O>
{
  readonly isWriter = true;

  /**
   * カテゴリー
   */
  static readonly CATEGORY = 'writer';

  /**
   * ID
   */
  readonly $id!: string;

  /**
   * 種別
   */
  readonly type!: string;

  constructor(config?: C) {
    super(config);
    initFactoryable(this, this.config);
  }

  write<R = unknown>(data: D, options?: O): R {
    const config = this._withConfig(options),
      items = asArray(data);
    return this._write(config.array ? items : items[0] || {}, config);
  }

  protected abstract _write(data: any, config: C): any;
}
export default WriterBase;
