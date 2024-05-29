import Base from '../../base/Base';
import initFactoryable from '../../helpers/initFactoryable';
import { IMatcher } from '../types';
import { MatchOptionsBase, MatcherConfigBase } from './types';

/**
 * 値の比較をする
 */
export default abstract class MatcherBase<
    V = any,
    O extends MatchOptionsBase = MatchOptionsBase,
    C extends MatcherConfigBase = MatcherConfigBase,
  >
  extends Base<C>
  implements IMatcher<O>
{
  readonly isMatcher = true;

  /**
   * カテゴリー
   */
  static readonly CATEGORY = 'matcher';

  /**
   * ID
   */
  readonly $id!: string;

  /**
   * 種別
   */
  readonly type!: string;

  constructor(config?: C) {
    super(config);
    initFactoryable(this, this.config);
  }

  /**
   * 2つの値の比較
   * @param value1 値1
   * @param value2 値2
   * @param options オプション
   * @returns 比較結果
   */
  match(value1: V, value2: V, options?: O): boolean {
    const me = this,
      config = me._withConfig(options),
      result = me._match(value1, value2, config);
    return config.not ? !result : result;
  }

  /**
   * 2つの値の比較
   * @param value1 値1
   * @param value2 値2
   * @param config コンフィグ
   * @returns 比較結果
   */
  protected abstract _match(value1: V, value2: V, config: C): boolean;
}
