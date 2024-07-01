import { NumberFilterConfig, RELATIONAL_OPERATOR } from '@visue/datakit/filters/NumberFilter';
import { LengthSorterConfig } from '@visue/datakit/sorters/LengthSorter';
import { ValueSorterConfig } from '@visue/datakit/sorters/ValueSorter';
import { CollectionFactory } from 'src/data/collections';
import ChainedCollection from 'src/data/collections/ChainedCollection';
import DataCollection from 'src/data/collections/DataCollection';

describe('ChainedCollection', () => {
  describe('Factory', () => {
    test('create', () => {
      const result: ChainedCollection = CollectionFactory.create(ChainedCollection.TYPE);
      expect(result).toBeInstanceOf(ChainedCollection);
    });
  });

  const VALUE_RULES = [
      { type: 'typed', name: 'field0', valueType: 'number' },
      { type: 'typed', name: 'field1', valueType: 'number' },
      { type: 'typed', name: 'field2', valueType: 'number' },
      { type: 'typed', name: 'field3', valueType: 'string' },
    ],
    ITEM0 = { $id: 'ID0', field0: 0, field1: 4, field2: 0, field3: '!!' },
    ITEM1 = { $id: 'ID1', field0: 1, field1: 3, field2: 1, field3: '!!' },
    ITEM2 = { $id: 'ID2', field0: 2, field1: 2, field2: 0, field3: '!' },
    ITEM3 = { $id: 'ID3', field0: 3, field1: 1, field2: 1, field3: '!' },
    ITEM4 = { $id: 'ID4', field0: 4, field1: 0, field2: 0, field3: '!' },
    ITEM5 = { $id: 'ID5', field0: 5, field1: 5, field2: 5, field3: '!!!!!' },
    SOURCE = [ITEM0, ITEM1, ITEM2, ITEM3, ITEM4],
    EXPECTED_ENTITY0 = { item: ITEM0 },
    EXPECTED_ENTITY1 = { item: ITEM1 },
    EXPECTED_ENTITY2 = { item: ITEM2 },
    EXPECTED_ENTITY3 = { item: ITEM3 },
    EXPECTED_ENTITY4 = { item: ITEM4 },
    EXPECTED_ENTITY5 = { item: ITEM5 },
    EXPECTED_ENTITIES = [EXPECTED_ENTITY0, EXPECTED_ENTITY1, EXPECTED_ENTITY2, EXPECTED_ENTITY3, EXPECTED_ENTITY4];

  describe('source側の操作', () => {
    test('初期状態', () => {
      const source = new DataCollection({ source: SOURCE, valueRules: VALUE_RULES }),
        collection = new ChainedCollection({ source });

      // sourceの状態
      expect(collection.getSourceSize()).toBe(5);
      expect(collection.getSourceItems()).toEqual(SOURCE);
      expect(collection.getSourceEntities()).toMatchObject([
        EXPECTED_ENTITY0,
        EXPECTED_ENTITY1,
        EXPECTED_ENTITY2,
        EXPECTED_ENTITY3,
        EXPECTED_ENTITY4,
      ]);
      // dataの状態
      expect(collection.getSize()).toBe(5);
      expect(collection.getItems()).toEqual(SOURCE);
      expect(collection.getEntities()).toMatchObject([
        EXPECTED_ENTITY0,
        EXPECTED_ENTITY1,
        EXPECTED_ENTITY2,
        EXPECTED_ENTITY3,
        EXPECTED_ENTITY4,
      ]);
    });

    test('sourceに要素を追加', () => {
      const source = new DataCollection({ source: SOURCE, valueRules: VALUE_RULES }),
        collection = new ChainedCollection({ source });

      // sourceの状態
      expect(collection.getSourceSize()).toBe(5);
      expect(collection.getSourceItems()).toEqual(SOURCE);
      expect(collection.getSourceEntities()).toMatchObject(EXPECTED_ENTITIES);
      // dataの状態
      expect(collection.getSize()).toBe(5);
      expect(collection.getItems()).toEqual(SOURCE);
      expect(collection.getEntities()).toMatchObject(EXPECTED_ENTITIES);
    });

    test('フィルタリング', () => {
      const source = new DataCollection({ source: SOURCE, valueRules: VALUE_RULES }),
        collection = new ChainedCollection({ source });

      const filter0: NumberFilterConfig = { $id: 'filter0', type: 'number', path: 'field1', value: 2, not: true };
      source.addFilters(filter0);

      // sourceの状態
      expect(collection.getSourceSize()).toBe(4);
      expect(collection.getSourceItems()).toEqual([ITEM0, ITEM1, ITEM3, ITEM4]);
      expect(collection.getSourceEntities()).toMatchObject([
        EXPECTED_ENTITY0,
        EXPECTED_ENTITY1,
        EXPECTED_ENTITY3,
        EXPECTED_ENTITY4,
      ]);
      // dataの状態
      expect(collection.getSize()).toBe(4);
      expect(collection.getItems()).toEqual([ITEM0, ITEM1, ITEM3, ITEM4]);
      expect(collection.getEntities()).toMatchObject([
        EXPECTED_ENTITY0,
        EXPECTED_ENTITY1,
        EXPECTED_ENTITY3,
        EXPECTED_ENTITY4,
      ]);

      const filter1: NumberFilterConfig = {
        $id: 'filter1',
        type: 'number',
        path: 'field0',
        value: 2,
        operator: RELATIONAL_OPERATOR.GT,
      };
      source.addFilters(filter1);

      // sourceの状態
      expect(collection.getSourceSize()).toBe(2);
      expect(collection.getSourceItems()).toEqual([ITEM3, ITEM4]);
      expect(collection.getSourceEntities()).toMatchObject([EXPECTED_ENTITY3, EXPECTED_ENTITY4]);
      // dataの状態
      expect(collection.getSize()).toBe(2);
      expect(collection.getItems()).toEqual([ITEM3, ITEM4]);
      expect(collection.getEntities()).toMatchObject([EXPECTED_ENTITY3, EXPECTED_ENTITY4]);
    });

    test('ソーティング', () => {
      const source = new DataCollection({ source: SOURCE, valueRules: VALUE_RULES }),
        collection = new ChainedCollection({ source });

      const sorter0: ValueSorterConfig = { $id: 'sorter0', type: 'value', path: 'field2' };
      source.addSorters(sorter0);

      // sourceの状態
      expect(collection.getSourceSize()).toBe(5);
      expect(collection.getSourceItems()).toEqual([ITEM0, ITEM2, ITEM4, ITEM1, ITEM3]);
      expect(collection.getSourceEntities()).toMatchObject([
        EXPECTED_ENTITY0,
        EXPECTED_ENTITY2,
        EXPECTED_ENTITY4,
        EXPECTED_ENTITY1,
        EXPECTED_ENTITY3,
      ]);
      // dataの状態
      expect(collection.getSize()).toBe(5);
      expect(collection.getItems()).toEqual([ITEM0, ITEM2, ITEM4, ITEM1, ITEM3]);
      expect(collection.getEntities()).toMatchObject([
        EXPECTED_ENTITY0,
        EXPECTED_ENTITY2,
        EXPECTED_ENTITY4,
        EXPECTED_ENTITY1,
        EXPECTED_ENTITY3,
      ]);

      const sorter1: LengthSorterConfig = { $id: 'sorter1', type: 'length', path: 'field3' };
      source.addSorters(sorter1);

      // sourceの状態
      expect(collection.getSourceSize()).toBe(5);
      expect(collection.getSourceItems()).toEqual([ITEM2, ITEM4, ITEM3, ITEM0, ITEM1]);
      expect(collection.getSourceEntities()).toMatchObject([
        EXPECTED_ENTITY2,
        EXPECTED_ENTITY4,
        EXPECTED_ENTITY3,
        EXPECTED_ENTITY0,
        EXPECTED_ENTITY1,
      ]);
      // dataの状態
      expect(collection.getSize()).toBe(5);
      expect(collection.getItems()).toEqual([ITEM2, ITEM4, ITEM3, ITEM0, ITEM1]);
      expect(collection.getEntities()).toMatchObject([
        EXPECTED_ENTITY2,
        EXPECTED_ENTITY4,
        EXPECTED_ENTITY3,
        EXPECTED_ENTITY0,
        EXPECTED_ENTITY1,
      ]);
    });
  });

  describe('chained側の操作', () => {
    test('初期状態(filters,sortersあり)', () => {
      const source = new DataCollection({ source: SOURCE, valueRules: VALUE_RULES }),
        filters: NumberFilterConfig = { $id: 'filter0', type: 'number', path: 'field1', value: 2, not: true },
        sorters: ValueSorterConfig = { $id: 'sort0', type: 'value', path: 'field2' },
        collection = new ChainedCollection({
          source,
          filters,
          sorters,
        });

      // sourceの状態
      expect(collection.getSourceSize()).toBe(5);
      expect(collection.getSourceItems()).toEqual(SOURCE);
      expect(collection.getSourceEntities()).toMatchObject(EXPECTED_ENTITIES);
      // dataの状態
      expect(collection.getSize()).toBe(4);
      expect(collection.getItems()).toEqual([ITEM0, ITEM4, ITEM1, ITEM3]);
      expect(collection.getEntities()).toMatchObject([
        EXPECTED_ENTITY0,
        EXPECTED_ENTITY4,
        EXPECTED_ENTITY1,
        EXPECTED_ENTITY3,
      ]);
    });

    test('フィルタリング', () => {
      const source = new DataCollection({ source: SOURCE, valueRules: VALUE_RULES }),
        collection = new ChainedCollection({ source });

      const filter0: NumberFilterConfig = { $id: 'filter0', type: 'number', path: 'field1', value: 2, not: true };
      collection.addFilters(filter0);

      // sourceの状態
      expect(collection.getSourceSize()).toBe(5);
      expect(collection.getSourceItems()).toEqual(SOURCE);
      expect(collection.getSourceEntities()).toMatchObject(EXPECTED_ENTITIES);
      // dataの状態
      expect(collection.getSize()).toBe(4);
      expect(collection.getItems()).toEqual([ITEM0, ITEM1, ITEM3, ITEM4]);
      expect(collection.getEntities()).toMatchObject([
        EXPECTED_ENTITY0,
        EXPECTED_ENTITY1,
        EXPECTED_ENTITY3,
        EXPECTED_ENTITY4,
      ]);

      const filter1: NumberFilterConfig = {
        $id: 'filter0',
        type: 'number',
        path: 'field0',
        value: 2,
        operator: RELATIONAL_OPERATOR.GT,
      };
      collection.addFilters(filter1);

      // sourceの状態
      expect(collection.getSourceSize()).toBe(5);
      expect(collection.getSourceItems()).toEqual(SOURCE);
      expect(collection.getSourceEntities()).toMatchObject(EXPECTED_ENTITIES);
      // dataの状態
      expect(collection.getSize()).toBe(2);
      expect(collection.getItems()).toEqual([ITEM3, ITEM4]);
      expect(collection.getEntities()).toMatchObject([EXPECTED_ENTITY3, EXPECTED_ENTITY4]);
    });

    test('ソーティング', () => {
      const source = new DataCollection({ source: SOURCE, valueRules: VALUE_RULES }),
        collection = new ChainedCollection({ source });

      const sorter0: ValueSorterConfig = { $id: 'sorter0', type: 'value', path: 'field2' };
      collection.addSorters(sorter0);

      // sourceの状態
      expect(collection.getSourceSize()).toBe(5);
      expect(collection.getSourceItems()).toEqual(SOURCE);
      expect(collection.getSourceEntities()).toMatchObject(EXPECTED_ENTITIES);
      // dataの状態
      expect(collection.getSize()).toBe(5);
      expect(collection.getItems()).toEqual([ITEM0, ITEM2, ITEM4, ITEM1, ITEM3]);
      expect(collection.getEntities()).toMatchObject([
        EXPECTED_ENTITY0,
        EXPECTED_ENTITY2,
        EXPECTED_ENTITY4,
        EXPECTED_ENTITY1,
        EXPECTED_ENTITY3,
      ]);

      const sorter1: ValueSorterConfig = { $id: 'sorter1', type: 'length', path: 'field3' };
      collection.addSorters(sorter1);

      // sourceの状態
      expect(collection.getSourceSize()).toBe(5);
      expect(collection.getSourceItems()).toEqual(SOURCE);
      expect(collection.getSourceEntities()).toMatchObject(EXPECTED_ENTITIES);
      // dataの状態
      expect(collection.getSize()).toBe(5);
      expect(collection.getItems()).toEqual([ITEM2, ITEM4, ITEM3, ITEM0, ITEM1]);
      expect(collection.getEntities()).toMatchObject([
        EXPECTED_ENTITY2,
        EXPECTED_ENTITY4,
        EXPECTED_ENTITY3,
        EXPECTED_ENTITY0,
        EXPECTED_ENTITY1,
      ]);
    });
  });
});
