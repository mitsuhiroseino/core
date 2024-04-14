import { DestructibleConfigBase } from '../../../base/DestructibleBase';
import { SetOptions } from '../../types';
import { MessageNotifierConfig } from '../types';

/**
 * コンフィグ
 */
export type MessageNotifierConfigBase = DestructibleConfigBase & MessageNotifierConfig;

/**
 * Message.setメソッド用オプション
 */
export type SetOptionsBase = SetOptions;
