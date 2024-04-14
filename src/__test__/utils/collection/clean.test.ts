import clean from 'src/utils/collections/clean';

describe('clean', () => {
  test('0要素削除', () => {
    const array = [0, 1, 2, 3, 4],
      result = clean(array);
    expect(result).toEqual([0, 1, 2, 3, 4]);
  });

  test('1要素削除', () => {
    const array = [0, 1, null, 3, 4],
      result = clean(array);
    expect(result).toEqual([0, 1, 3, 4]);
  });

  test('2要素削除', () => {
    const array = [0, 1, null, 3, undefined],
      result = clean(array);
    expect(result).toEqual([0, 1, 3]);
  });

  test('全要素削除', () => {
    const array = [null, undefined, null, undefined, null],
      result = clean(array);
    expect(result).toEqual([]);
  });
});
