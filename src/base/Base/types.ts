/**
 * コンフィグ
 */
export type ConfigBase = Record<string, unknown>;

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
