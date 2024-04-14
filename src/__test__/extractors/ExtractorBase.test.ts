import { ExtractorFactory, IExtractor } from 'src/extractors';
import ExtractorBase, { ExtractOptionsBase, ExtractorConfigBase } from 'src/extractors/ExtractorBase';

type TestExtractOptions = ExtractOptionsBase & {
  optionsProp?: boolean;
};

type TestExtractorConfig = ExtractorConfigBase &
  TestExtractOptions & {
    configProp?: boolean;
  };

// テスト対象を継承したクラス
class TestExtractor extends ExtractorBase<any, any, TestExtractOptions, TestExtractorConfig> {
  static TYPE = 'test';
  protected _validate(source: any, config: TestExtractorConfig) {
    switch (source) {
      case 'INVALID':
        return false;
      default:
        return true;
    }
  }
  protected _extract(source: any, config: TestExtractorConfig) {
    switch (source) {
      case 'ERROR':
        throw new Error('Error!!!');
      default:
        return config;
    }
  }
}
ExtractorFactory.register(TestExtractor);

describe('Factory', () => {
  describe('create', () => {
    test('type', () => {
      const result: IExtractor = ExtractorFactory.create(TestExtractor.TYPE);
      expect(result).toBeInstanceOf(TestExtractor);
    });
  });
});

describe('ExtractorBase', () => {
  describe('extract', () => {
    describe('default', () => {
      test('[Invalid]', () => {
        const config: TestExtractorConfig = { type: TestExtractor.TYPE },
          extractor: TestExtractor = ExtractorFactory.create(config),
          fn = () => extractor.extract('INVALID');
        expect(fn).toThrowError('INVALID is invalid source.');
      });

      test('[Error]', () => {
        const config: TestExtractorConfig = { type: TestExtractor.TYPE },
          extractor: TestExtractor = ExtractorFactory.create(config),
          fn = () => extractor.extract('ERROR');
        expect(fn).toThrowError('Error!!!');
      });

      test('config', () => {
        const config: TestExtractorConfig = { type: TestExtractor.TYPE, configProp: true },
          extractor: TestExtractor = ExtractorFactory.create(config),
          result = extractor.extract(null as any, { optionProp: true } as any);
        expect(result).toEqual({ type: TestExtractor.TYPE, configProp: true, optionProp: true });
      });
    });

    describe('options', () => {
      test('defaultValue', () => {
        const config: TestExtractorConfig = { type: TestExtractor.TYPE, defaultValue: 'DEFAULT' },
          extractor: TestExtractor = ExtractorFactory.create(config),
          result = extractor.extract('ERROR');
        expect(result).toBe('DEFAULT');
      });
    });
  });
});
