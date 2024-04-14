import { ExtractOptionsBase, ExtractorConfigBase } from '../ExtractorBase';

/**
 * extractメソッドのオプション
 */
export type ObjectExtractOptions = ExtractOptionsBase & {
  /**
   * 対象の値の特定のプロパティを値として取得する場合に指定する
   * - 例:
   *   対象の値 = { filed1: 'ABC', filed2: { child1: 'abc1', child2: 'abc2' } }
   *
   *   - パターン1: path = 'field1'の場合の値は `'ABC'`
   *   - パターン2: path = 'field2'の場合の値は `{ child1: 'abc1', child2: 'abc2' }`
   *   - パターン3: path = 'field2.child2'の値は `'abc2'`
   *   - パターン4: path = ['field2', 'child2'] の値は `'abc2'`
   *
   */
  path?: string | string[];
};

/**
 * コンフィグ
 */
export type ObjectExtractorConfig = ExtractorConfigBase & ObjectExtractOptions;
