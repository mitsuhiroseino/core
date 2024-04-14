import { EventedEvents } from '../../base/Evented';

/**
 * イベント
 */
export const TranslatorEvents = {
  ...EventedEvents,
  languagechange: 'languagechange',
  resourceset: 'resourceset',
} as const;
