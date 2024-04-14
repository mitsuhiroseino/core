import { ExtractorFactory, IExtractor } from 'src/extractors';
import ObjectExtractor, { ObjectExtractorConfig } from 'src/extractors/ObjectExtractor';

describe('Factory', () => {
  describe('create', () => {
    test('type', () => {
      const result: IExtractor = ExtractorFactory.create(ObjectExtractor.TYPE);
      expect(result).toBeInstanceOf(ObjectExtractor);
    });
  });
});

describe('ObjectExtractor', () => {
  describe('extract', () => {
    describe('options', () => {
      describe('path', () => {
        const VALUE = {
          item0: 'ITEM0',
          item1: {
            item1_0: 'ITEM1_0',
            item1_1: 'ITEM1_1',
          },
        };

        test('子要素', () => {
          const config: ObjectExtractorConfig = { type: ObjectExtractor.TYPE, path: 'item0' },
            extractor: ObjectExtractor = ExtractorFactory.create(config),
            result = extractor.extract(VALUE);
          expect(result).toBe('ITEM0');
        });

        test('孫要素(文字列で指定)', () => {
          const config: ObjectExtractorConfig = { type: ObjectExtractor.TYPE, path: 'item1.item1_0' },
            extractor: ObjectExtractor = ExtractorFactory.create(config),
            result = extractor.extract(VALUE);
          expect(result).toBe('ITEM1_0');
        });

        test('孫要素(配列で指定)', () => {
          const config: ObjectExtractorConfig = { type: ObjectExtractor.TYPE, path: ['item1', 'item1_0'] },
            extractor: ObjectExtractor = ExtractorFactory.create(config),
            result = extractor.extract(VALUE);
          expect(result).toBe('ITEM1_0');
        });
        test('[Error]', () => {
          const config: ObjectExtractorConfig = { type: ObjectExtractor.TYPE, path: 'item0' },
            extractor: ObjectExtractor = ExtractorFactory.create(config),
            fn = () => extractor.extract(null);
          expect(fn).toThrowError('null is invalid source.');
        });
      });
    });
  });
});
