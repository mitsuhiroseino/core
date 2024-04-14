import Events from '../../events/Events';
import { EventInfo, IObservable } from '../../events/Observable';
import { ConfigBase } from '../Base';
import { IDestructible } from '../DestructibleBase';
import Evented from './Evented';
import { EventedEvents } from './constants';

/**
 * イベントハンドラー
 */
export type EventedEventHandlers = {
  [EventedEvents.destroy]?: (event: EventInfo<Evented>) => void;
};

/**
 * コンフィグ
 */
export type EventedConfig<H extends EventedEventHandlers = EventedEventHandlers> = ConfigBase & {
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
export interface IEvented<H extends EventedEventHandlers = EventedEventHandlers> extends IObservable<H>, IDestructible {
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
