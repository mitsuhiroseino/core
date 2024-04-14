import examineRelationship from '../../lang/examineRelationship';
import compare from '../compare';
import { MatchOptions } from './types';

/**
 * 数値の比較を行う
 * @param value0 比較対象0
 * @param value1 比較対象1
 * @param options オプション
 * @returns 比較結果
 */
export default function match(value0: number, value1: number, options: MatchOptions = {}): boolean {
  const result = compare(value0, value1, options);
  return examineRelationship(result, options);
}
