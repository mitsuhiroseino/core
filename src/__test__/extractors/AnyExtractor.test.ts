import { ExtractorFactory, IExtractor } from 'src/extractors';
import AnyExtractor, { AnyExtractorConfig } from 'src/extractors/AnyExtractor';

describe('Factory', () => {
  describe('create', () => {
    test('type', () => {
      const result: IExtractor = ExtractorFactory.create(AnyExtractor.TYPE);
      expect(result).toBeInstanceOf(AnyExtractor);
    });
  });
});

describe('AnyExtractor', () => {
  describe('extract', () => {
    test('default', () => {
      const config: AnyExtractorConfig = {
          type: AnyExtractor.TYPE,
        },
        extractor: AnyExtractor = ExtractorFactory.create(config),
        result = extractor.extract('123');
      expect(result).toBe(undefined);
    });

    describe('options', () => {
      test('extract', () => {
        const VALUE = new Map([
          ['item0', 'ITEM0'],
          ['item1', 'ITEM1'],
          ['item2', 'ITEM2'],
        ]);
        const config: AnyExtractorConfig = {
            type: AnyExtractor.TYPE,
            extract: (value, config) => {
              return value.get(config.key);
            },
            key: 'item1',
          },
          extractor: AnyExtractor = ExtractorFactory.create(config),
          result = extractor.extract(VALUE);
        expect(result).toBe('ITEM1');
      });

      test('validate', () => {
        const config: AnyExtractorConfig = {
            type: AnyExtractor.TYPE,
            validate: (value) => false,
          },
          extractor: AnyExtractor = ExtractorFactory.create(config),
          fn = () => extractor.extract('123');
        expect(fn).toThrowError('123 is invalid source.');
      });
    });
  });
});
