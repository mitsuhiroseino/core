import get from 'lodash/get';
import { ComparatorFactory } from 'src/comparators';
import AnyComparator, { AnyComparatorConfig } from 'src/comparators/AnyComparator';

describe('Factory', () => {
  describe('create', () => {
    test('type', () => {
      const result: AnyComparator = ComparatorFactory.create(AnyComparator.TYPE);
      expect(result).toBeInstanceOf(AnyComparator);
    });
  });
});

describe('AnyComparator', () => {
  describe('compare', () => {
    describe('default', () => {
      const config: AnyComparatorConfig = {
        compare: (value1, value2, config) => (value1 === value2 ? 0 : value1 > value2 ? 1 : -1),
      };
      test('value1 === value2', () => {
        const comparator = new AnyComparator(config),
          result = comparator.compare('123', '123');
        expect(result).toBe(0);
      });

      test('value1 > value2', () => {
        const comparator = new AnyComparator(config),
          result = comparator.compare('abc', '123');
        expect(result).toBe(1);
      });

      test('value1 < value2', () => {
        const comparator = new AnyComparator(config),
          result = comparator.compare('123', 'abc');
        expect(result).toBe(-1);
      });
    });

    describe('options', () => {
      describe('compare', () => {
        const config: AnyComparatorConfig = {
          compare: (value1, value2, config = {}) => {
            const val1 = get(value1, config.path),
              val2 = get(value2, config.path);
            return val1 === val2 ? 0 : val1 > val2 ? 1 : -1;
          },
          path: 'source.value',
        };

        test('value1 === value2', () => {
          const comparator = new AnyComparator(config),
            result = comparator.compare(
              { source: { value: '123' }, property: 'value' },
              { source: { value: '123' }, property: 'value' },
            );
          expect(result).toBe(0);
        });

        test('value1 > value2', () => {
          const comparator = new AnyComparator(config),
            result = comparator.compare(
              { source: { value: 'abc' }, property: 'value' },
              { source: { value: '123' }, property: 'value' },
            );
          expect(result).toBe(1);
        });

        test('value1 < value2', () => {
          const comparator = new AnyComparator(config),
            result = comparator.compare(
              { source: { value: '123' }, property: 'value' },
              { source: { value: 'abc' }, property: 'value' },
            );
          expect(result).toBe(-1);
        });
      });
    });
  });
});
