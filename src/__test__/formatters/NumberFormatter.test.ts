import { FormatterFactory, IFormatter } from 'src/formatters';
import NumberFormatter, { NumberFormatterConfig } from 'src/formatters/NumberFormatter';

describe('NumberFormatter', () => {
  describe('Factory', () => {
    test('create', () => {
      const formatter: IFormatter = FormatterFactory.create(NumberFormatter.TYPE);
      expect(formatter).toBeInstanceOf(NumberFormatter);
    });
  });
  describe('format', () => {
    test('default', () => {
      const config: NumberFormatterConfig = { type: NumberFormatter.TYPE },
        formatter: NumberFormatter = FormatterFactory.create(config),
        result = formatter.format(12345.6789);
      expect(result).toBe('12,345.679');
    });
    test('any format', () => {
      const config: NumberFormatterConfig = { type: NumberFormatter.TYPE, format: '##0.0' },
        formatter: NumberFormatter = FormatterFactory.create(config),
        result = formatter.format(12345.6789);
      expect(result).toBe('12345.7');
    });
  });
});
