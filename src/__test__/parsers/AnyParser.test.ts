import { IParser, ParserFactory } from 'src/parsers';
import AnyParser, { AnyParseOptions, AnyParserConfig } from 'src/parsers/AnyParser';

describe('AnyParser', () => {
  describe('Factory', () => {
    test('create', () => {
      const parser: IParser = ParserFactory.create(AnyParser.TYPE);
      expect(parser).toBeInstanceOf(AnyParser);
    });
  });
  describe('parse', () => {
    const PARSE = (value: any, options: AnyParseOptions) => {
      if (value instanceof Error) {
        throw value;
      } else if (value == null) {
        return value;
      }
      const result = value ? '○' : '×';
      return options.twice ? result + result : result;
    };
    describe('options', () => {
      test('optionsなし', () => {
        const config: AnyParserConfig = {
            type: AnyParser.TYPE,
            parse: PARSE,
          },
          parser: AnyParser = ParserFactory.create(config),
          result = parser.parse(true);
        expect(result).toBe('○');
      });
      test('optionsあり', () => {
        const config: AnyParserConfig = { type: AnyParser.TYPE, parse: PARSE },
          parser: AnyParser = ParserFactory.create(config),
          result = parser.parse(false, { twice: true });
        expect(result).toBe('××');
      });
    });
    describe('値がundefined', () => {
      test('undefinedValueあり', () => {
        const config: AnyParserConfig = { type: AnyParser.TYPE, parse: PARSE },
          parser: AnyParser = ParserFactory.create({ ...config, undefinedValue: '◎' }),
          result = parser.parse(undefined);
        expect(result).toBe('◎');
      });
      test('undefinedValueなし', () => {
        const config: AnyParserConfig = { type: AnyParser.TYPE, parse: PARSE },
          parser: AnyParser = ParserFactory.create(config);
        expect(() => parser.parse(undefined)).toThrowError('undefined is an invalid value to parse.');
      });
      test('undefinedValueなし & defaultValueあり', () => {
        const config: AnyParserConfig = { type: AnyParser.TYPE, parse: PARSE },
          parser: AnyParser = ParserFactory.create({ ...config, defaultValue: '▲' }),
          result = parser.parse(undefined);
        expect(result).toBe('▲');
      });
    });
    describe('値がnull', () => {
      test('nullValueあり', () => {
        const config: AnyParserConfig = { type: AnyParser.TYPE, parse: PARSE },
          parser: AnyParser = ParserFactory.create({ ...config, nullValue: '●' }),
          result = parser.parse(null);
        expect(result).toBe('●');
      });
      test('nullValueなし', () => {
        const config: AnyParserConfig = { type: AnyParser.TYPE, parse: PARSE },
          parser: AnyParser = ParserFactory.create(config);
        expect(() => parser.parse(null)).toThrowError('null is an invalid value to parse.');
      });
      test('nullValueなし & defaultValueあり', () => {
        const config: AnyParserConfig = { type: AnyParser.TYPE, parse: PARSE },
          parser: AnyParser = ParserFactory.create({ ...config, defaultValue: '▲' }),
          result = parser.parse(null);
        expect(result).toBe('▲');
      });
    });
    describe('パース失敗', () => {
      test('defaultValueあり', () => {
        const config: AnyParserConfig = { type: AnyParser.TYPE, parse: PARSE },
          parser: AnyParser = ParserFactory.create({ ...config, defaultValue: '▲' }),
          result = parser.parse(new Error('パース失敗'));
        expect(result).toBe('▲');
      });
      test('defaultValueなし', () => {
        const config: AnyParserConfig = { type: AnyParser.TYPE, parse: PARSE },
          parser: AnyParser = ParserFactory.create(config);
        expect(() => {
          parser.parse(new Error('パース失敗'));
        }).toThrow(new Error('パース失敗'));
      });
    });
  });
});
