import { MessageNotifierConfigBase, SetOptionsBase } from '../MessageNotifierBase';

/**
 * コンフィグ
 */
export type TargetMessageNotifierConfig = MessageNotifierConfigBase & {
  /**
   * メッセージを設定する対象
   */
  setters: { [target: string]: (message: string) => void };
};

/**
 * Message.setメソッド用オプション
 */
export type TargetSetOptions = SetOptionsBase & {
  /**
   * 出力対象
   */
  target?: string;

  /**
   * 出力対象が繰り返し項目だった時に指定する
   */
  index?: number;
};
