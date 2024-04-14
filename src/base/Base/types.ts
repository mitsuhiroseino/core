/**
 * コンフィグ
 */
export type ConfigBase = {};

/**
 * インターフェイス
 */
export interface IBase<C extends ConfigBase = ConfigBase> {
  /**
   * コンフィグ
   */
  readonly config: C;

  /**
   * コンフィグの更新
   * @param config
   */
  updateConfig(config: Partial<C>): void;
}
