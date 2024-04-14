import { FormatterFactory, IFormatter } from 'src/formatters';
import StringFormatter, { StringFormatterConfig } from 'src/formatters/StringFormatter';

describe('StringFormatter', () => {
  describe('Factory', () => {
    test('create', () => {
      const formatter: IFormatter = FormatterFactory.create(StringFormatter.TYPE);
      expect(formatter).toBeInstanceOf(StringFormatter);
    });
  });
  describe('format', () => {
    test('default', () => {
      const config: StringFormatterConfig = {
          type: StringFormatter.TYPE,
          params: { mark: '☆', firstName: 'FIRST', lastName: 'LAST', age: 99 },
        },
        formatter: StringFormatter = FormatterFactory.create(config),
        result = formatter.format('[{{mark}}] {{firstName}} {{lastName}} ({{age}})');
      expect(result).toBe('[☆] FIRST LAST (99)');
    });
    test('optionsのparams', () => {
      const config: StringFormatterConfig = {
          type: StringFormatter.TYPE,
          params: { mark: '☆' },
        },
        formatter: StringFormatter = FormatterFactory.create(config),
        result = formatter.format('[{{mark}}] {{firstName}} {{lastName}} ({{age}})', {
          params: { firstName: 'FIRST', lastName: 'LAST', age: 99 },
        });
      expect(result).toBe('[☆] FIRST LAST (99)');
    });
    test('カスタムエンクロージャー', () => {
      const config: StringFormatterConfig = {
          type: StringFormatter.TYPE,
          tokenBracket: ['[', ']'],
        },
        formatter: StringFormatter = FormatterFactory.create(config),
        result = formatter.format('[[mark]] [firstName] [lastName] ([age])', {
          params: { mark: '☆', firstName: 'FIRST', lastName: 'LAST', age: 99 },
        });
      expect(result).toBe('[☆] FIRST LAST (99)');
    });
  });
});
