/**
 * メッセージのレベル
 */
export const MESSAGE_LEVEL = {
  DEBUG: 'debug',
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'error',
} as const;

/**
 * メッセージのレベルの順番
 */
export const MESSAGE_LEVEL_ORDER = {
  [MESSAGE_LEVEL.DEBUG]: 0,
  [MESSAGE_LEVEL.INFO]: 1,
  [MESSAGE_LEVEL.WARN]: 2,
  [MESSAGE_LEVEL.ERROR]: 3,
} as const;

/**
 * メッセージの種別
 */
export const MESSAGE_TYPE = {
  GLOBAL: 'global',
  TARGET: 'target',
  CONSOLE: 'console',
} as const;
