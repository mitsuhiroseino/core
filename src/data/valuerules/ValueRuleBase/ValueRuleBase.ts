import isBoolean from 'lodash/isBoolean';
import DestructibleBase from '../../../base/DestructibleBase';
import initFactoryable from '../../../helpers/initFactoryable';
import { MESSAGE_LEVEL, MESSAGE_TYPE, Message } from '../../../message';
import { TargetSetOptions } from '../../../message/notifier/TargetMessageNotifier';
import { IValidator, ValidatorConfig, ValidatorFactory } from '../../validators';
import RequiredValidator from '../../validators/RequiredValidator';
import { IValueRule, ValidateOptions } from '../types';
import { ValueRuleBaseConfig } from './types';

/**
 * 値
 */
abstract class ValueRuleBase<V = any, F = string, C extends ValueRuleBaseConfig = ValueRuleBaseConfig>
  extends DestructibleBase<C>
  implements IValueRule<V, F>
{
  readonly isValueRule = true;

  /**
   * カテゴリー
   */
  static readonly CATEGORY = 'valuerule';

  /**
   * ID
   */
  readonly $id!: string;

  /**
   * 種別
   */
  readonly type!: string;

  /**
   * フィールド名
   */
  readonly name!: string;

  /**
   * 必須
   */
  protected _isRequired!: boolean;

  /**
   * 必須バリデーター
   */
  protected _required?: RequiredValidator;

  /**
   * バリデーター
   */
  protected _validators!: IValidator[];

  constructor(config?: C) {
    super(config);
    this.name = this.config.name;
    const me = this,
      cfg = me.config,
      { required = false, validators = [] } = cfg;
    initFactoryable(me, cfg);
    // 必須チェック用バリデーターの設定
    me._isRequired = !!required;
    me._required = me._getRequiredValidator(required);
    // その他のバリデーターの設定
    me._validators = validators.map((validator) => ValidatorFactory.get(validator));
  }

  /**
   * 必須チェックのバリデーターを取得する
   */
  protected _getRequiredValidator(required: boolean | IValidator | ValidatorConfig) {
    return ValidatorFactory.get<RequiredValidator>(isBoolean(required) ? 'required' : required);
  }

  validate(target: V, options: ValidateOptions): string | null {
    const me = this,
      // 必須チェック
      result = me._require(target);
    let message;
    if (result === true) {
      // その他のバリデーション
      message = me._validate(target);
    } else {
      // 必須エラー or 任意入力&未入力
      message = result;
    }
    if (message) {
      const opts: TargetSetOptions = {
        level: MESSAGE_LEVEL.ERROR,
        type: MESSAGE_TYPE.TARGET,
        target: me.config.name,
        ...options,
      };
      Message.set(message, opts);
    }
    return message;
  }

  /**
   * 必須入力チェック
   * @param target
   * @returns
   * - true: 値あり
   * - null: 値なし
   * - string: 値なし(エラー)
   */
  protected _require(target: V): true | null | string {
    const me = this,
      requiredMessage = me._required?.validate(target);
    if (requiredMessage != null) {
      // 値無し
      if (me._isRequired) {
        // 必須の場合はエラーメッセージを返す
        return requiredMessage;
      } else {
        // 任意の場合はnullを返す
        return null;
      }
    }
    // 後続のチェックが必要な場合はtrue
    return true;
  }

  /**
   * validatorsによるバリデーション
   * @param target
   * @returns
   */
  protected _validate(target: V): string | null {
    for (const validator of this._validators) {
      const errorMessage = validator.validate(target);
      if (errorMessage != null) {
        // エラーの場合はエラーメッセージを返す
        return errorMessage;
      }
    }
    return null;
  }

  parse(target: any): V {
    return this._parse(target);
  }

  protected abstract _parse(target: any): V;

  serialize(value: V): any {
    return this._serialize(value);
  }

  protected abstract _serialize(value: V): any;

  format(value: V): F {
    return this._format(value);
  }

  protected abstract _format(value: V): F;

  destructor(): void {
    this._deleteProperties(['_required', '_validators']);
    super.destructor();
  }
}
export default ValueRuleBase;
