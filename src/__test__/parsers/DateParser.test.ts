import { IParser, ParserFactory } from 'src/parsers';
import DateParser, { DateParserConfig } from 'src/parsers/DateParser';

describe('DateParser', () => {
  describe('Factory', () => {
    test('create', () => {
      const parser: IParser = ParserFactory.create(DateParser.TYPE);
      expect(parser).toBeInstanceOf(DateParser);
    });
  });
  describe('parse', () => {
    const DATE = new Date(2000, 0, 1, 3, 4, 5, 6);
    test('default', () => {
      const config: DateParserConfig = {
          type: DateParser.TYPE,
        },
        parser: DateParser = ParserFactory.create(config),
        result = parser.parse('2000/01/01 03:04:05.006');
      expect(result).toEqual(DATE);
    });
    test('options', () => {
      const config: DateParserConfig = {
          type: DateParser.TYPE,
          formats: ['yyyy年MM月dd日 HH時mm分ss秒SSSミリ秒'],
        },
        parser: DateParser = ParserFactory.create(config),
        result = parser.parse('2000年01月01日 03時04分05秒006ミリ秒');
      expect(result).toEqual(DATE);
    });
  });
});
