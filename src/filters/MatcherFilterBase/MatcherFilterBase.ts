import { IMatcher } from '../../matchers';
import FilterBase from '../FilterBase';
import { MatcherFilterConfigBase, MatcherMatchOptionsBase } from './types';

export default abstract class MatcherFilterBase<
  V = any,
  O extends MatcherMatchOptionsBase<V> = MatcherMatchOptionsBase<V>,
  C extends MatcherFilterConfigBase<V> = MatcherFilterConfigBase<V>,
> extends FilterBase<V, O, C> {
  /**
   * マッチャー
   */
  private _matcher?: IMatcher;

  protected get matcher() {
    if (this._matcher == null) {
      // コンストラクターの時点ではabstractになっているtypeが初期化されていない為、
      // matcherを使うタイミングでインスタンスを取得
      this._matcher = this._createMatcher(this.config);
    }
    return this._matcher;
  }

  protected abstract _createMatcher(config: C): IMatcher;

  /**
   * 条件に一致するか
   * @param value 検証対象
   * @returns 検証結果
   */
  protected _match(value: V, config: C): boolean {
    return this.matcher?.match(value, config.value) || false;
  }
}
