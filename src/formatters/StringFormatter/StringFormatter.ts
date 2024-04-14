import createExtractTokens, { ExtractTokensFn } from '../../utils/string/createExtractTokens';
import formatString from '../../utils/string/format';
import FormatterBase from '../FormatterBase';
import { StringFormatOptions, StringFormatterConfig } from './types';

class StringFormatter extends FormatterBase<string, StringFormatOptions, StringFormatterConfig> {
  /**
   * 種別
   */
  static TYPE = 'string';

  /**
   * トークン抽出関数
   */
  private _extractTokensFn?: ExtractTokensFn;

  constructor(config?: StringFormatterConfig) {
    super(config);
    const { extractTokensFn, tokenBracket } = this.config;

    // トークン抽出関数の設定
    if (extractTokensFn) {
      this._extractTokensFn = extractTokensFn;
    }
    if (tokenBracket) {
      this._extractTokensFn = createExtractTokens(tokenBracket);
    }
  }

  /**
   * メッセージの取得
   * @param value テンプレート
   * @param options オプション
   * @returns
   */
  protected _format(value: string, config: StringFormatterConfig): string | null {
    const options = {
        extractTokensFn: this._extractTokensFn,
        ...config,
      },
      { params } = this.config;
    // paramsはインスタンス生成時のconfigで指定されたものと、optionsで指定されたものをマージ
    if (params && options.params) {
      options.params = { ...params, ...options.params };
    }

    return formatString(value, options);
  }
}
export default StringFormatter;
