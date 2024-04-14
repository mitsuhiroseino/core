import { IParser, ParserFactory } from 'src/parsers';
import NoopParser, { NoopParserConfig } from 'src/parsers/NoopParser';

describe('NoopParser', () => {
  describe('Factory', () => {
    test('create', () => {
      const parser: IParser = ParserFactory.create(NoopParser.TYPE);
      expect(parser).toBeInstanceOf(NoopParser);
    });
  });
  describe('parse', () => {
    test('default', () => {
      const config: NoopParserConfig = {
          type: NoopParser.TYPE,
        },
        parser: NoopParser = ParserFactory.create(config),
        result = parser.parse('ABC');
      expect(result).toBe('ABC');
    });
  });
});
