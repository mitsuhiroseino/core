import { IParser, ParserFactory } from 'src/parsers';
import ObjectParser, { ObjectParserConfig } from 'src/parsers/ObjectParser';

describe('ObjectParser', () => {
  describe('Factory', () => {
    test('create', () => {
      const parser: IParser = ParserFactory.create(ObjectParser.TYPE);
      expect(parser).toBeInstanceOf(ObjectParser);
    });
  });
  describe('parse', () => {
    const DATE = new Date(1999, 0, 2, 3, 40, 56, 789),
      OBJECT = { string: 'あ', number: 1, boolean: true, date: '1999-01-01T18:40:56.789Z' };
    test('default', () => {
      const config: ObjectParserConfig = {
          type: ObjectParser.TYPE,
        },
        parser: ObjectParser = ParserFactory.create(config),
        result = parser.parse('{"string":"あ","number":1,"boolean":true,"date":"1999-01-01T18:40:56.789Z"}');
      expect(result).toEqual(OBJECT);
    });
    test('options', () => {
      const config: ObjectParserConfig = {
          type: ObjectParser.TYPE,
          reviver: (key: string, value: any): any => {
            if (key === 'date') {
              return new Date(value);
            } else {
              return value;
            }
          },
        },
        parser: ObjectParser = ParserFactory.create(config),
        result = parser.parse('{"string":"あ","number":1,"boolean":true,"date":"1999-01-01T18:40:56.789Z"}');
      expect(result).toEqual({ ...OBJECT, date: DATE });
    });
  });
});
