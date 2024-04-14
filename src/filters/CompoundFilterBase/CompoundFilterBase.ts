import FilterBase from '../FilterBase';
import FilterFactory from '../FilterFactory';
import { IFilter } from '../types';
import { CompoundFilterConfigBase, CompoundMatchOptionsBase } from './types';

export default abstract class CompoundFilterBase<
  O extends CompoundMatchOptionsBase = CompoundMatchOptionsBase,
  C extends CompoundFilterConfigBase = CompoundFilterConfigBase,
> extends FilterBase<any, O, C> {
  /**
   * 比較用のコンディション
   */
  protected _items: IFilter[];

  constructor(config?: C) {
    super(config);
    this._items = FilterFactory.from(this.config.items);
  }
}
