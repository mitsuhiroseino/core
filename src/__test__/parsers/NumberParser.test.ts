import { IParser, ParserFactory } from 'src/parsers';
import NumberParser, { NumberParserConfig } from 'src/parsers/NumberParser';

describe('NumberParser', () => {
  describe('Factory', () => {
    test('create', () => {
      const parser: IParser = ParserFactory.create(NumberParser.TYPE);
      expect(parser).toBeInstanceOf(NumberParser);
    });
  });
  describe('parse', () => {
    test('default', () => {
      const config: NumberParserConfig = {
          type: NumberParser.TYPE,
        },
        parser: NumberParser = ParserFactory.create(config),
        result = parser.parse('12,345.6789');
      expect(result).toBe(12345.6789);
    });
    test('options', () => {
      const config: NumberParserConfig = {
          type: NumberParser.TYPE,
          thousandsSeparator: '.',
          decimalPoint: ',',
        },
        parser: NumberParser = ParserFactory.create(config),
        result = parser.parse('12.345,6789');
      expect(result).toBe(12345.6789);
    });
  });
});
