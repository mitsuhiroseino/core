export type GetValueConfig = {
  /**
   * 対象の値のプロパティを検証対象にする場合に指定する
   * 例:
   *   対象の値 = { filed1: 'ABC', filed2: 'abc', filed3: '123' }
   *   property = 'field2'
   *
   *   上記の場合の検証対象の値は'abc'となる
   *
   */
  property?: string;

  /**
   * 対象の値から検証対象とする任意の値を取得するための関数
   * 当項目が設定されている場合、propertyは無効
   * @param item
   * @returns
   */
  getValue?: (item: any) => any;
};
