import { IParser, ParserFactory } from 'src/parsers';
import BooleanParser, { BooleanParserConfig } from 'src/parsers/BooleanParser';

describe('BooleanParser', () => {
  describe('Factory', () => {
    test('create', () => {
      const parser: IParser = ParserFactory.create(BooleanParser.TYPE);
      expect(parser).toBeInstanceOf(BooleanParser);
    });
  });
  describe('parse', () => {
    test('default', () => {
      const config: BooleanParserConfig = {
          type: BooleanParser.TYPE,
        },
        parser: BooleanParser = ParserFactory.create(config),
        result = parser.parse('true');
      expect(result).toBe(true);
    });
    test('options', () => {
      const config: BooleanParserConfig = {
          type: BooleanParser.TYPE,
          trueValues: ['ON'],
        },
        parser: BooleanParser = ParserFactory.create(config),
        result = parser.parse('ON');
      expect(result).toBe(true);
    });
  });
});
