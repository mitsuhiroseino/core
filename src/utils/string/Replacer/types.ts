import { ReplacementMap } from '../replaceWithMap';

/**
 * 置換用の設定
 */
export type ReplacementSetting = { map: ReplacementMap; type: string; reverseType?: string };

/**
 * コンフィグ
 */
export type ReplacerConfig = {
  /**
   * 置換用の設定
   */
  replacements?: ReplacementSetting[];
};
