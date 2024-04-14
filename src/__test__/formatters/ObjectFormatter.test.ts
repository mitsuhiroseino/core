import { FormatterFactory, IFormatter } from 'src/formatters';
import ObjectFormatter, { ObjectFormatterConfig } from 'src/formatters/ObjectFormatter';

describe('ObjectFormatter', () => {
  describe('Factory', () => {
    test('create', () => {
      const formatter: IFormatter = FormatterFactory.create(ObjectFormatter.TYPE);
      expect(formatter).toBeInstanceOf(ObjectFormatter);
    });
  });
  describe('format', () => {
    // 1999-01-01T18:40:56.789Z
    const DATE = new Date(1999, 0, 2, 3, 40, 56, 789),
      OBJECT = { string: 'あ', number: 1, boolean: true, date: DATE };
    test('default', () => {
      const config: ObjectFormatterConfig = { type: ObjectFormatter.TYPE },
        formatter: ObjectFormatter = FormatterFactory.create(config),
        result = formatter.format(OBJECT);
      expect(result).toBe('{"string":"あ","number":1,"boolean":true,"date":"1999-01-01T18:40:56.789Z"}');
    });
  });
});
