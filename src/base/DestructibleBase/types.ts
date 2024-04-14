import { ConfigBase } from '../Base';

/**
 * コンフィグ
 */
export type DestructibleConfigBase = ConfigBase;

/**
 * インターフェイス
 */
export interface IDestructible {
  /**
   * 破棄されているか
   */
  readonly isDestroyed: boolean;

  /**
   * デストラクター
   */
  destructor(): void;
}
