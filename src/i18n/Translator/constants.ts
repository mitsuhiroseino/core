import { EventedEvents } from '../../base/EventedBase';

/**
 * イベント
 */
export const TranslatorEvents = {
  ...EventedEvents,
  languagechange: 'languagechange',
  resourceset: 'resourceset',
} as const;
