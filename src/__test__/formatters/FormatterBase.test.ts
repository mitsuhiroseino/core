import { FormatterFactory, IFormatter } from 'src/formatters';
import FormatterBase, { FormatOptionsBase, FormatterConfigBase } from 'src/formatters/FormatterBase';

type TestFormatOptions = FormatOptionsBase & {
  oprionProp?: boolean;
};
type TestFormatterConfig = FormatterConfigBase &
  TestFormatOptions & {
    configProp?: boolean;
  };

class TestFormatter extends FormatterBase<any, TestFormatOptions, TestFormatterConfig> {
  static TYPE = 'test';
  protected _format(value: any, config: FormatterConfigBase): string | null {
    switch (value) {
      case '(NULL)':
        return null;
      case '(CONFIG)':
        return config as any;
      case '(ERROR)':
        throw new Error('Error!!!');
      default:
        return `${value}!`;
    }
  }
}
FormatterFactory.register(TestFormatter);

describe('Factory', () => {
  describe('create', () => {
    test('type', () => {
      const result: IFormatter = FormatterFactory.create(TestFormatter.TYPE);
      expect(result).toBeInstanceOf(TestFormatter);
    });
  });
});

describe('TestFormatter', () => {
  describe('format', () => {
    describe('default', () => {
      test('[Success]', () => {
        const config: TestFormatterConfig = {
            type: TestFormatter.TYPE,
          },
          formatter: TestFormatter = FormatterFactory.create(config),
          result = formatter.format('123');
        expect(result).toBe('123!');
      });

      test('[Error]', () => {
        const config: TestFormatterConfig = {
            type: TestFormatter.TYPE,
          },
          formatter: TestFormatter = FormatterFactory.create(config),
          fn = () => formatter.format('(ERROR)');
        expect(fn).toThrow(new Error('Error!!!'));
      });

      test('[Error(return null)]', () => {
        const config: TestFormatterConfig = {
            type: TestFormatter.TYPE,
          },
          formatter: TestFormatter = FormatterFactory.create(config),
          fn = () => formatter.format('(NULL)');
        expect(fn).toThrow(new Error('(NULL) is an invalid value to format.'));
      });

      test('config', () => {
        const config: TestFormatterConfig = {
            type: TestFormatter.TYPE,
            configProp: true,
          },
          formatter: TestFormatter = FormatterFactory.create(config),
          result = formatter.format('(CONFIG)', { oprionProp: true });
        expect(result).toEqual({ type: TestFormatter.TYPE, configProp: true, oprionProp: true });
      });
    });

    describe('options', () => {
      describe('undefinedValue', () => {
        test('value=undefined', () => {
          const config: TestFormatterConfig = { type: TestFormatter.TYPE, undefinedValue: 'UNDEFINED' },
            formatter: TestFormatter = FormatterFactory.create(config),
            result = formatter.format(undefined);
          expect(result).toBe('UNDEFINED');
        });

        test('value=null', () => {
          const config: TestFormatterConfig = { type: TestFormatter.TYPE, undefinedValue: 'UNDEFINED' },
            formatter: TestFormatter = FormatterFactory.create(config),
            result = formatter.format(null);
          expect(result).toBe('null!');
        });
      });

      describe('nullValue', () => {
        test('value=null', () => {
          const config: TestFormatterConfig = { type: TestFormatter.TYPE, nullValue: 'NULL' },
            formatter: TestFormatter = FormatterFactory.create(config),
            result = formatter.format(null);
          expect(result).toBe('NULL');
        });

        test('value=undefined', () => {
          const config: TestFormatterConfig = { type: TestFormatter.TYPE, nullValue: 'NULL' },
            formatter: TestFormatter = FormatterFactory.create(config),
            result = formatter.format(undefined);
          expect(result).toBe('undefined!');
        });
      });

      describe('defaultValue', () => {
        test('[Error]', () => {
          const config: TestFormatterConfig = { type: TestFormatter.TYPE, defaultValue: 'DEFAULT' },
            formatter: TestFormatter = FormatterFactory.create(config),
            result = formatter.format('(ERROR)');
          expect(result).toBe('DEFAULT');
        });

        test('[Error(return null)]', () => {
          const config: TestFormatterConfig = { type: TestFormatter.TYPE, defaultValue: 'DEFAULT' },
            formatter: TestFormatter = FormatterFactory.create(config),
            result = formatter.format('(NULL)');
          expect(result).toBe('DEFAULT');
        });
      });
    });
  });
});
