import { FilterFactory, IFilter } from 'src/filters';
import NumberFilter, { NumberFilterConfig, RELATIONAL_OPERATOR } from 'src/filters/NumberFilter';

describe('Factory', () => {
  describe('create', () => {
    test('type', () => {
      const result: IFilter = FilterFactory.create(NumberFilter.TYPE);
      expect(result).toBeInstanceOf(NumberFilter);
    });
  });
});

describe('NumberFilter', () => {
  describe('default', () => {
    test('一致', () => {
      const config: NumberFilterConfig = { type: NumberFilter.TYPE, value: 123 },
        filter: NumberFilter = FilterFactory.create(config),
        result = filter.match(123);
      expect(result).toBe(true);
    });

    test('不一致', () => {
      const config: NumberFilterConfig = { type: NumberFilter.TYPE, value: 1234 },
        filter: NumberFilter = FilterFactory.create(config),
        result = filter.match(123);
      expect(result).toBe(false);
    });
  });

  describe('options', () => {
    describe('operator', () => {
      test('not = false', () => {
        const config: NumberFilterConfig = {
            type: NumberFilter.TYPE,
            value: 123,
            operator: RELATIONAL_OPERATOR.GT,
          },
          filter: NumberFilter = FilterFactory.create(config),
          result = filter.match(124);
        expect(result).toBe(true);
      });

      test('not = true', () => {
        const config: NumberFilterConfig = {
            type: NumberFilter.TYPE,
            value: 123,
            operator: RELATIONAL_OPERATOR.GT,
            not: true,
          },
          filter: NumberFilter = FilterFactory.create(config),
          result = filter.match(124);
        expect(result).toBe(false);
      });
    });
  });
});
