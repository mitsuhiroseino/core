import { FormatterConfig, FormatterFactory, IFormatter } from '@visue/datakit/formatters';
import { IParser, ParserConfig, ParserFactory } from '@visue/datakit/parsers';
import assignIdentifier from '@visue/utils/identifier/assignIdentifier';
import toValidValue from '@visue/utils/lang/toValidValue';
import isPlainObject from 'lodash/isPlainObject';
import ConfigurableBase from '../../../base/ConfigurableBase';
import { ValueType } from '../types';
import { ValueTypeBaseConfig } from './types';

/**
 * 値
 */
abstract class ValueTypeBase<V = any, C extends ValueTypeBaseConfig = ValueTypeBaseConfig>
  extends ConfigurableBase<C>
  implements ValueType<V>
{
  readonly isValueType = true;

  protected abstract _type: string;

  /**
   * ID
   */
  readonly $id!: string;

  /**
   * 識別名
   */
  readonly $idName?: string;

  /**
   * パーサー
   */
  private _parser!: IParser;

  /**
   * フォーマッター
   */
  private _formatter!: IFormatter;

  constructor(config?: C) {
    super(config);
    assignIdentifier(this, this.config);
    const { parser, formatter } = this.config;
    this._parser = ParserFactory.get(this._getParserCfg(parser));
    this._formatter = FormatterFactory.get(this._getFormatterCfg(formatter));
  }

  private _getParserCfg(parser: string | ParserConfig | IParser | undefined): string | ParserConfig | IParser {
    if (!parser || isPlainObject(parser)) {
      // undefined or ParserConfig
      return this._getParserConfig(parser as ParserConfig | undefined);
    } else {
      // string or IParser
      return parser;
    }
  }

  protected _getParserConfig(parser: ParserConfig | undefined): string | ParserConfig {
    return { type: this._type, ...parser };
  }

  protected _getFormatterCfg(
    formatter: string | FormatterConfig | IFormatter | undefined,
  ): string | FormatterConfig | IFormatter {
    if (!formatter || isPlainObject(formatter)) {
      // undefined or FormatterConfig
      return this._getFormatterConfig(formatter as FormatterConfig | undefined);
    } else {
      // string or IFormatter
      return formatter;
    }
  }

  protected _getFormatterConfig(formatter: FormatterConfig | undefined): string | FormatterConfig {
    return { type: this._type, ...formatter };
  }

  /**
   * 引数として渡されたsourceから値を取得する
   * @param source
   */
  parse(source: string): V {
    return this._parser.parse(source);
  }

  serialize(value: V): any {
    const config = this.config,
      validValue = toValidValue(value, config);

    if (validValue !== value) {
      // undefined または nullの場合の値が指定されていた場合
      return validValue;
    }

    let error;
    try {
      // シリアライズを実行
      const result = this._serialize(value);
      if (result != null) {
        return result;
      }
    } catch (e) {
      error = e;
    }
    // シリアライズできなかった場合
    if ('defaultValue' in config) {
      return config.defaultValue;
    } else {
      throw error || new Error(`${value} is an invalid value to serialize.`);
    }
  }

  /**
   * 目的の型の値をテキストファイルへの保存や、リクエストの送信時に利用する形式に変換する
   * @param value 値
   * @returns
   */
  protected _serialize(value: V): any | undefined {
    return value;
  }

  /**
   * 目的の型の値を表示用の形式に変換する
   * @param value
   */
  format(value: V): string {
    return this._formatter.format(value);
  }
}
export default ValueTypeBase;
