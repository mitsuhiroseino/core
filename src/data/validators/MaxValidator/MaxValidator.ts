import BigNumber from 'bignumber.js';

import { i18nResources } from '../../../i18n';
import ValidatorBase from '../ValidatorBase';
import { MaxValidatorConfig } from './types';

const DEFAULT_MESSAGE = 'message-validator-max-error';
i18nResources.updateDefault({
  [DEFAULT_MESSAGE]: '{max}以下を入力してください。',
});

/**
 * 値が指定の数以上か
 */
class MaxValidator<C extends MaxValidatorConfig = MaxValidatorConfig> extends ValidatorBase<
  number | string | BigNumber,
  C
> {
  /**
   * 種別
   */
  static TYPE = 'max';

  protected _defaultMessage: string = DEFAULT_MESSAGE;

  protected _max: BigNumber;

  constructor(config: C) {
    super(config);
    this._max = new BigNumber(this.config.max);
  }

  protected _validate(target: number | string | BigNumber): boolean {
    // max >= target
    return this._max.gte(target);
  }
}
export default MaxValidator;
