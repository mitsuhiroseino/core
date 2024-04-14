import { FormatterFactory, IFormatter } from 'src/formatters';
import NoopFormatter, { NoopFormatterConfig } from 'src/formatters/NoopFormatter';

describe('NoopFormatter', () => {
  describe('Factory', () => {
    test('create', () => {
      const formatter: IFormatter = FormatterFactory.create(NoopFormatter.TYPE);
      expect(formatter).toBeInstanceOf(NoopFormatter);
    });
  });
  describe('format', () => {
    test('値あり', () => {
      const config: NoopFormatterConfig = { type: NoopFormatter.TYPE },
        formatter: NoopFormatter = FormatterFactory.create(config),
        result = formatter.format('😊');
      expect(result).toBe('😊');
    });
    test('undefined', () => {
      const config: NoopFormatterConfig = { type: NoopFormatter.TYPE },
        formatter: NoopFormatter = FormatterFactory.create(config);
      expect(() => formatter.format(undefined)).toThrowError('undefined is an invalid value to format.');
    });
    test('null', () => {
      const config: NoopFormatterConfig = { type: NoopFormatter.TYPE },
        formatter: NoopFormatter = FormatterFactory.create(config);
      expect(() => formatter.format(null)).toThrowError('null is an invalid value to format.');
    });
  });
});
