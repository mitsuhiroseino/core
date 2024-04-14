import { EventedEvents } from '../../base/Evented';

/**
 * イベント
 */
export const I18nResourcesEvents = {
  ...EventedEvents,
  resourceset: 'resourceset',
  resourceupdate: 'resourceupdate',
} as const;
