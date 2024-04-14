import EntryBase from '../EntryBase';
import { EntryItem } from '../types';
import { NoopEntryConfig, NoopEntryEventHandlers } from './types';

/**
 * 何もしないエントリー
 */
class NoopEntry<
  I extends EntryItem = EntryItem,
  H extends NoopEntryEventHandlers = NoopEntryEventHandlers,
  C extends NoopEntryConfig<I, H> = NoopEntryConfig<I, H>,
> extends EntryBase<I, H, C> {
  /**
   * 種別
   */
  static TYPE = 'noop';
}
export default NoopEntry;
