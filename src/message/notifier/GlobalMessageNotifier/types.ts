import { MessageNotifierConfigBase, SetOptionsBase } from '../MessageNotifierBase';

/**
 * コンフィグ
 */
export type GlobalMessageNotifierConfig = MessageNotifierConfigBase & {
  /**
   * メッセージを設定する対象
   */
  setter: (message: string) => void;
};

/**
 * Message.setメソッド用オプション
 */
export type GlobalSetOptions = SetOptionsBase;
