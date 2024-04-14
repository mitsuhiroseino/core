import { MESSAGE_LEVEL, MESSAGE_TYPE } from './constants';

/**
 * メッセージのレベル
 */
export type MessageLevel = (typeof MESSAGE_LEVEL)[keyof typeof MESSAGE_LEVEL];

/**
 * メッセージの種別
 */
export type MessageType = (typeof MESSAGE_TYPE)[keyof typeof MESSAGE_TYPE];

/**
 * Message.setメソッド用オプション
 */
export type SetOptions = {
  /**
   * メッセージのレベル
   */
  level?: MessageLevel;

  /**
   * メッセージの種別
   */
  type?: MessageType | string;

  /**
   * メッセージ
   */
  message?: string;
};
