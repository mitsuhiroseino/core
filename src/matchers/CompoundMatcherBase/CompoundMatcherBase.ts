import MatcherBase from '../MatcherBase';
import MatcherFactory from '../MatcherFactory';
import { IMatcher } from '../types';
import { CompoundMatchOptionsBase, CompoundMatcherConfigBase } from './types';

export default abstract class CompoundMatcherBase<
  O extends CompoundMatchOptionsBase = CompoundMatchOptionsBase,
  C extends CompoundMatcherConfigBase = CompoundMatcherConfigBase,
> extends MatcherBase<any, O, C> {
  /**
   * matcher
   */
  protected _items!: IMatcher[];

  constructor(config?: C) {
    super(config);
    const { items = [] } = this.config;
    this._items = MatcherFactory.from(items);
  }
}
