import { EventInfo, Observable } from '../../events';
import Events from '../../events/Events';
import { ConfigurableConfigBase } from '../ConfigurableBase';
import { Destructible } from '../DestructibleBase';
import EventedBase from './EventedBase';
import { EventedEvents } from './constants';

/**
 * イベントハンドラー
 */
export type EventedEventHandlers = {
  [EventedEvents.destroy]?: (event: EventInfo<EventedBase>) => void;
};

/**
 * コンフィグ
 */
export type EventedConfig<H extends EventedEventHandlers = EventedEventHandlers> = ConfigurableConfigBase & {
  /**
   * イベントシステム
   */
  events?: Events<H>;

  /**
   * イベントハンドラー
   */
  handlers?: H;
};

/**
 * イベントを発火できるクラスのインターフェイス
 */
export interface Evented<H extends EventedEventHandlers = EventedEventHandlers> extends Observable<H>, Destructible {
  /**
   * イベントシステムの初期化
   * @returns
   */
  initEvents(): Events<H>;

  /**
   * イベントシステムの設定
   * @param events
   * @returns
   */
  attachEvents(events: Events<H>): Events<H>;
}
