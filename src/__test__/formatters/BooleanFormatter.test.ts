import { FormatterFactory, IFormatter } from 'src/formatters';
import BooleanFormatter, { BooleanFormatterConfig } from 'src/formatters/BooleanFormatter';

describe('BooleanFormatter', () => {
  describe('Factory', () => {
    test('create', () => {
      const formatter: IFormatter = FormatterFactory.create(BooleanFormatter.TYPE);
      expect(formatter).toBeInstanceOf(BooleanFormatter);
    });
  });
  describe('format', () => {
    test('trueString', () => {
      const config: BooleanFormatterConfig = { type: BooleanFormatter.TYPE, trueString: '😊', falseString: '😡' },
        formatter: BooleanFormatter = FormatterFactory.create(config),
        formattedValue = formatter.format(true);
      expect(formattedValue).toBe('😊');
    });
    test('falseString', () => {
      const config: BooleanFormatterConfig = { type: BooleanFormatter.TYPE, trueString: '😊', falseString: '😡' },
        formatter: BooleanFormatter = FormatterFactory.create(config),
        formattedValue = formatter.format(false);
      expect(formattedValue).toBe('😡');
    });
  });
});
