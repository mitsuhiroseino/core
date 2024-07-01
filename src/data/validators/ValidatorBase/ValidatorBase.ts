import StringFormatter from '@visue/datakit/formatters/StringFormatter';
import Base from '../../../base/Base';
import initFactoryable from '../../../helpers/initFactoryable';
import { IValidator } from '../types';
import { ValidatorBaseConfig } from './types';

/**
 * バリデーター
 */
abstract class ValidatorBase<V = any, C extends ValidatorBaseConfig = ValidatorBaseConfig>
  extends Base<C>
  implements IValidator<V>
{
  readonly isValidator = true;

  /**
   * カテゴリー
   */
  static readonly CATEGORY = 'validator';

  /**
   * ID
   */
  readonly $id!: string;

  /**
   * 種別
   */
  readonly type!: string;

  /**
   * バリデーション毎の既定のメッセージ
   */
  protected abstract _defaultMessage: string;

  /**
   * メッセージ
   */
  protected _message!: string;

  protected _formatter!: StringFormatter;

  constructor(config?: C) {
    super(config);
    const me = this,
      cfg = me.config,
      { message = me._defaultMessage, ...rest } = cfg;
    initFactoryable(me, cfg);
    me._message = message;
    me._formatter = new StringFormatter(rest);
  }

  validate(target: V): string | null {
    const me = this;
    if (!me._validate(target)) {
      return me.getErrorMessage(target);
    }
    return null;
  }

  /**
   * バリデーションを実施する
   * @param target
   */
  protected abstract _validate(target: V): boolean;

  /**
   * エラーメッセージを取得する
   * @param target
   * @returns
   */
  getErrorMessage(target: V): string {
    const config = this.config,
      targetToken = config.targetToken || 'target',
      params = config.params;
    return this._formatter.format(this._message, { ...params, [targetToken]: target }) || 'error';
  }
}
export default ValidatorBase;
