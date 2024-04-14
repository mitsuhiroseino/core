import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';
import equals, { EQUALITY_TYPE, EqualsOptions } from 'src/utils/lang/equals';

describe('equal', () => {
  describe('default', () => {
    test('一致', () => {
      const value0 = 'ABC',
        value1 = 'ABC',
        result = equals(value0, value1);
      expect(result).toBe(true);
    });

    test('不一致', () => {
      const value0 = 'ABC',
        value1 = 'abc',
        result = equals(value0, value1);
      expect(result).toBe(false);
    });
  });

  describe('options', () => {
    describe('equalityType="strict"', () => {
      const OPTIONS: EqualsOptions = { equalityType: EQUALITY_TYPE.STRICT };

      test('一致', () => {
        const value0 = 'ABC',
          value1 = 'ABC',
          result = equals(value0, value1, OPTIONS);
        expect(result).toBe(true);
      });

      test('不一致', () => {
        const value0 = 'ABC',
          value1 = 'abc',
          result = equals(value0, value1, OPTIONS);
        expect(result).toBe(false);
      });

      test('一致 (customizer)', () => {
        const value0 = 'ABC',
          value1 = 'abc',
          result = equals(value0, value1, {
            ...OPTIONS,
            customizer: (v0, v1) => {
              if (v0 !== v1) {
                return v0.toLowerCase() === v1.toLowerCase();
              }
            },
          });
        expect(result).toBe(true);
      });
    });

    describe('equalityType="loosely"', () => {
      const OPTIONS: EqualsOptions = { equalityType: EQUALITY_TYPE.LOOSE };

      test('一致', () => {
        const value0 = '123',
          value1 = 123,
          result = equals(value0, value1, OPTIONS);
        expect(result).toBe(true);
      });

      test('不一致', () => {
        const value0 = 'ABC',
          value1 = 'abc',
          result = equals(value0, value1, OPTIONS);
        expect(result).toBe(false);
      });

      test('一致 (customizer)', () => {
        const value0 = 123,
          value1 = 120,
          result = equals(value0, value1, {
            ...OPTIONS,
            customizer: (v0, v1) => {
              if (isNumber(v0) && isNumber(v1)) {
                return v0 >= v1;
              }
            },
          });
        expect(result).toBe(true);
      });
    });

    describe('equalityType="deeply"', () => {
      const OPTIONS: EqualsOptions = { equalityType: EQUALITY_TYPE.DEEP };

      test('一致', () => {
        const value0 = ['123'],
          value1 = ['123'],
          result = equals(value0, value1, OPTIONS);
        expect(result).toBe(true);
      });

      test('不一致', () => {
        const value0 = ['123'],
          value1 = [123],
          result = equals(value0, value1, OPTIONS);
        expect(result).toBe(false);
      });

      test('一致 (customizer)', () => {
        const value0 = { item0: 'ABC', item1: ['DEF', 'GHI'], item2: { a: 'JKL', b: 'MNO' } },
          value1 = { item0: 'abc', item1: ['def', 'ghi'], item2: { a: 'jkl', b: 'mno' } },
          result = equals(value0, value1, {
            ...OPTIONS,
            customizer: (v0, v1) => {
              if (isString(v0) && isString(v1)) {
                return v0.toLowerCase() === v1.toLowerCase();
              }
            },
          });
        expect(result).toBe(true);
      });
    });
  });
});
