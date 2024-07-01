import { StringFormatterConfig } from '@visue/datakit/formatters/StringFormatter';
import { FactoryableConfig, IFactoryable } from '../../factory/Factory';

/**
 * コンフィグ
 */
export type ValidatorConfig = FactoryableConfig &
  StringFormatterConfig & {
    /**
     * メッセージ定義
     */
    message?: string;

    /**
     * バリデーション対象の値をメッセージに埋め込む際に指定する文字列
     * デフォルトは`target`。
     * 例:
     *   - バリデーション対象の値: 'ABCDEF'
     *   - メッセージ定義: '{target}は不正な値です。'
     *   - メッセージ: 'ABCDEFは不正な値です。'
     */
    targetToken?: string;
  };

/**
 * バリデーターのインターフェイス
 */
export interface IValidator<V = unknown> extends IFactoryable {
  /**
   * Validatorのインスタンスであるか
   */
  isValidator: true;

  /**
   * 複数値用のバリデーター
   */
  readonly multiple?: true;

  /**
   * 値の検証を行う
   * @param value 検証対象の値
   * @returns エラーメッセージ
   */
  validate: (value: V) => string | null;

  /**
   * エラーメッセージを取得する
   * @param target 対象の値
   */
  getErrorMessage(target: V): string;
}
