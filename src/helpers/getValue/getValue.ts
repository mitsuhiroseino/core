import { GetValueConfig } from './types';

/**
 * itemから値を取得する
 * @param item
 * @param config
 * @returns
 */
export default function getValue(item: any, config: GetValueConfig = {}): any {
  const { property, getValue } = config;
  if (getValue) {
    return getValue(item);
  } else if (property != null) {
    return item != null ? item[property] : undefined;
  } else {
    return item;
  }
}
