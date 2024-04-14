import { TranslateOptions } from 'src/i18n/Translator';

import { MessageType, SetOptions } from '../types';

/**
 * notifier登録時のオプション
 */
export type RegisterOptions = {
  /**
   * 出力対象のメッセージ種別
   */
  types?: MessageType | string | (MessageType | string)[];
};

/**
 * コンフィグ
 */
export type MessageConfig = {};

/**
 * Message.setメソッド用オプション
 */
export type MessageSetOptions = SetOptions &
  TranslateOptions & {
    /**
     * 任意のオプション
     */
    [key: string]: any;
  };
