import { MessageNotifierConfigBase, SetOptionsBase } from '../MessageNotifierBase';

/**
 * コンフィグ
 */
export type LogMessageNotifierConfig = MessageNotifierConfigBase & {
  /**
   * ログテンプレート
   */
  template?: string;
};

/**
 * Message.setメソッド用オプション
 */
export type LogSetOptions = SetOptionsBase;
