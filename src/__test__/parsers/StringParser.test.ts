import { IParser, ParserFactory } from 'src/parsers';
import StringParser, { StringParserConfig } from 'src/parsers/StringParser';

describe('StringParser', () => {
  describe('Factory', () => {
    test('create', () => {
      const parser: IParser = ParserFactory.create(StringParser.TYPE);
      expect(parser).toBeInstanceOf(StringParser);
    });
  });
  describe('parse', () => {
    test('default', () => {
      const config: StringParserConfig = {
          type: StringParser.TYPE,
        },
        parser: StringParser = ParserFactory.create(config),
        result = parser.parse('ABC');
      expect(result).toBe('ABC');
    });
  });
});
