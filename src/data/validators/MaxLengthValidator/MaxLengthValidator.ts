import size from 'lodash/size';
import { i18nResources } from '../../../i18n';
import ValidatorBase from '../ValidatorBase';
import { MaxLengthValidatorConfig } from './types';

const DEFAULT_MESSAGE = 'message-validator-maxlength-error';
i18nResources.updateDefault({
  [DEFAULT_MESSAGE]: '長さは{maxLength}以下にしてください。',
});

/**
 * 文字列の桁数、配列・オブジェクトの要素数が指定の数以下か
 */
class MaxLengthValidator<C extends MaxLengthValidatorConfig = MaxLengthValidatorConfig> extends ValidatorBase<
  string | unknown[] | { [key: string]: unknown },
  C
> {
  /**
   * 種別
   */
  static TYPE = 'maxlength';

  protected _defaultMessage: string = DEFAULT_MESSAGE;

  protected _validate(target: string | unknown[] | { [key: string]: unknown }): boolean {
    return size(target) <= this.config.maxLength;
  }
}
export default MaxLengthValidator;
