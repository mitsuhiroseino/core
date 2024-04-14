import { CollectionFactory } from 'src/data/collections';
import DataCollection, { DataCollectionEvents } from 'src/data/collections/DataCollection';
import { NumberFilterConfig, RELATIONAL_OPERATOR } from 'src/filters/NumberFilter';
import { LengthSorterConfig } from 'src/sorters/LengthSorter';
import { NumberSorterConfig } from 'src/sorters/NumberSorter';
import { ValueSorterConfig } from 'src/sorters/ValueSorter';

const getData = () => {
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
    SOURCE5 = [ITEM0, ITEM1, ITEM2, ITEM3, ITEM4],
    SOURCE3 = [ITEM0, ITEM1, ITEM2],
    SOURCE0 = [],
    EXPECTED_ENTRY0 = { item: ITEM0 },
    EXPECTED_ENTRY1 = { item: ITEM1 },
    EXPECTED_ENTRY2 = { item: ITEM2 },
    EXPECTED_ENTRY3 = { item: ITEM3 },
    EXPECTED_ENTRY4 = { item: ITEM4 },
    EXPECTED_ENTRIES5 = [EXPECTED_ENTRY0, EXPECTED_ENTRY1, EXPECTED_ENTRY2, EXPECTED_ENTRY3, EXPECTED_ENTRY4],
    EXPECTED_ENTRIES3 = [EXPECTED_ENTRY0, EXPECTED_ENTRY1, EXPECTED_ENTRY2],
    EXPECTED_ENTRIES0 = [];
  return {
    VALUE_RULES,
    ITEM0,
    ITEM1,
    ITEM2,
    ITEM3,
    ITEM4,
    SOURCE5,
    SOURCE3,
    SOURCE0,
    ENTRY0: EXPECTED_ENTRY0,
    ENTRY1: EXPECTED_ENTRY1,
    ENTRY2: EXPECTED_ENTRY2,
    ENTRY3: EXPECTED_ENTRY3,
    ENTRY4: EXPECTED_ENTRY4,
    ENTRIES5: EXPECTED_ENTRIES5,
    ENTRIES3: EXPECTED_ENTRIES3,
    ENTRIES0: EXPECTED_ENTRIES0,
  };
};

describe('DataCollection', () => {
  describe('Factory', () => {
    test('create', () => {
      const result: DataCollection = CollectionFactory.create(DataCollection.TYPE);
      expect(result).toBeInstanceOf(DataCollection);
    });
  });

  describe('コレクションの操作', () => {
    test('初期状態', () => {
      const { VALUE_RULES, SOURCE5, ENTRIES5 } = getData();
      const collection = new DataCollection({
        source: SOURCE5,
        valueRules: VALUE_RULES,
      });

      // sourceの状態
      expect(collection.getSourceSize()).toBe(5);
      expect(collection.getSourceItems()).toEqual(SOURCE5);
      expect(collection.getSourceEntries()).toMatchObject(ENTRIES5);
      // dataの状態
      expect(collection.getSize()).toBe(5);
      expect(collection.getItems()).toEqual(SOURCE5);
      expect(collection.getEntries()).toMatchObject(ENTRIES5);
    });

    test('フィルタリング', () => {
      const {
        VALUE_RULES,
        ITEM0,
        ITEM1,
        ITEM2,
        ITEM3,
        ITEM4,
        SOURCE5,
        ENTRY0,
        ENTRY1,
        ENTRY2,
        ENTRY3,
        ENTRY4,
        ENTRIES5,
      } = getData();

      const filters: NumberFilterConfig = { $id: 'filter0', type: 'number', path: 'field1', not: true, value: 2 },
        collection = new DataCollection({
          source: SOURCE5,
          filters,
          valueRules: VALUE_RULES,
        });

      // sourceの状態
      expect(collection.getSourceSize()).toBe(5);
      expect(collection.getSourceItems()).toEqual(SOURCE5);
      expect(collection.getSourceEntries()).toMatchObject(ENTRIES5);
      // dataの状態
      expect(collection.getSize()).toBe(4);
      expect(collection.getItems()).toEqual([ITEM0, ITEM1, ITEM3, ITEM4]);
      expect(collection.getEntries()).toMatchObject([ENTRY0, ENTRY1, ENTRY3, ENTRY4]);

      const filter: NumberFilterConfig = {
        $id: 'filter1',
        type: 'number',
        path: 'field0',
        value: 1,
        operator: RELATIONAL_OPERATOR.GT,
      };
      collection.addFilters(filter);

      // sourceの状態
      expect(collection.getSourceSize()).toBe(5);
      expect(collection.getSourceItems()).toEqual(SOURCE5);
      expect(collection.getSourceEntries()).toMatchObject(ENTRIES5);
      // dataの状態
      expect(collection.getSize()).toBe(2);
      expect(collection.getItems()).toEqual([ITEM3, ITEM4]);
      expect(collection.getEntries()).toMatchObject([ENTRY3, ENTRY4]);

      collection.removeFilters('filter0');

      // sourceの状態
      expect(collection.getSourceSize()).toBe(5);
      expect(collection.getSourceItems()).toEqual(SOURCE5);
      expect(collection.getSourceEntries()).toMatchObject(ENTRIES5);
      // dataの状態
      expect(collection.getSize()).toBe(3);
      expect(collection.getItems()).toEqual([ITEM2, ITEM3, ITEM4]);
      expect(collection.getEntries()).toMatchObject([ENTRY2, ENTRY3, ENTRY4]);
    });

    test('ソーティング', () => {
      const {
        VALUE_RULES,
        ITEM0,
        ITEM1,
        ITEM2,
        ITEM3,
        ITEM4,
        SOURCE5,
        ENTRY0,
        ENTRY1,
        ENTRY2,
        ENTRY3,
        ENTRY4,
        ENTRIES5,
      } = getData();

      const sorters: NumberSorterConfig = { $id: 'sort0', type: 'number', path: 'field2' },
        collection = new DataCollection({
          source: SOURCE5,
          sorters,
          valueRules: VALUE_RULES,
        });

      // sourceの状態
      expect(collection.getSourceSize()).toBe(5);
      expect(collection.getSourceItems()).toEqual(SOURCE5);
      expect(collection.getSourceEntries()).toMatchObject(ENTRIES5);
      // dataの状態
      expect(collection.getSize()).toBe(5);
      expect(collection.getItems()).toEqual([ITEM0, ITEM2, ITEM4, ITEM1, ITEM3]);
      expect(collection.getEntries()).toMatchObject([ENTRY0, ENTRY2, ENTRY4, ENTRY1, ENTRY3]);

      const sorter: LengthSorterConfig = { $id: 'sort1', type: 'length', path: 'field3' };
      collection.addSorters(sorter);

      // sourceの状態
      expect(collection.getSourceSize()).toBe(5);
      expect(collection.getSourceItems()).toEqual(SOURCE5);
      expect(collection.getSourceEntries()).toMatchObject(ENTRIES5);
      // dataの状態
      expect(collection.getSize()).toBe(5);
      expect(collection.getItems()).toEqual([ITEM2, ITEM4, ITEM3, ITEM0, ITEM1]);
      expect(collection.getEntries()).toMatchObject([ENTRY2, ENTRY4, ENTRY3, ENTRY0, ENTRY1]);

      collection.removeSorters('sort0');

      // sourceの状態
      expect(collection.getSourceSize()).toBe(5);
      expect(collection.getSourceItems()).toEqual(SOURCE5);
      expect(collection.getSourceEntries()).toMatchObject(ENTRIES5);
      // dataの状態
      expect(collection.getSize()).toBe(5);
      expect(collection.getItems()).toEqual([ITEM2, ITEM3, ITEM4, ITEM0, ITEM1]);
      expect(collection.getEntries()).toMatchObject([ENTRY2, ENTRY3, ENTRY4, ENTRY0, ENTRY1]);
    });
  });

  describe('events', () => {
    test('constructer', () => {
      const { VALUE_RULES, SOURCE5, SOURCE3, ENTRIES3, ITEM0, ITEM1, ITEM2 } = getData();

      const onSourceChange = jest.fn(),
        onDataChange = jest.fn(),
        collection = new DataCollection({
          source: SOURCE5,
          handlers: {
            [DataCollectionEvents.sourcechange]: onSourceChange,
            [DataCollectionEvents.datachange]: onDataChange,
          },
          valueRules: VALUE_RULES,
        });

      // イベントの発火状況
      expect(onSourceChange).toBeCalledTimes(0);
      expect(onDataChange).toBeCalledTimes(0);

      onSourceChange.mockReset();
      onDataChange.mockReset();

      // ソースの差し替え
      collection.setSource(SOURCE3);

      // イベントの発火状況
      expect(onSourceChange).toBeCalledTimes(1);
      expect(onSourceChange).toBeCalledWith(
        expect.objectContaining({
          type: DataCollectionEvents.sourcechange,
          params: expect.objectContaining({
            source: [
              expect.objectContaining({ item: ITEM0 }),
              expect.objectContaining({ item: ITEM1 }),
              expect.objectContaining({ item: ITEM2 }),
            ],
          }),
        }),
      );
      expect(onDataChange).toBeCalledTimes(1);
      expect(onDataChange.mock.calls[0][0]).toMatchObject({
        type: DataCollectionEvents.datachange,
        params: { data: ENTRIES3 },
      });
    });

    test('sourcechange & datachange', () => {
      const { VALUE_RULES, SOURCE5, SOURCE0, ENTRIES5 } = getData();

      const onSourceChange = jest.fn(),
        onDataChange = jest.fn(),
        collection = new DataCollection({ source: SOURCE0, valueRules: VALUE_RULES });
      // sourceの変更
      collection.on(DataCollectionEvents.sourcechange, onSourceChange);
      // dataの変更
      collection.on(DataCollectionEvents.datachange, onDataChange);

      // イベントの発火状況
      expect(onSourceChange).toBeCalledTimes(0);
      expect(onDataChange).toBeCalledTimes(0);

      onSourceChange.mockReset();
      onDataChange.mockReset();

      // ソースの差し替え
      collection.setSource(SOURCE5);

      // イベントの発火状況
      expect(onSourceChange).toBeCalledTimes(1);
      expect(onSourceChange.mock.calls[0][0]).toMatchObject({
        type: DataCollectionEvents.sourcechange,
        params: { source: ENTRIES5 },
      });
      expect(onDataChange).toBeCalledTimes(1);
      expect(onDataChange.mock.calls[0][0]).toMatchObject({
        type: DataCollectionEvents.datachange,
        params: { data: ENTRIES5 },
      });
    });

    test('filterchange & datachange', () => {
      const { VALUE_RULES, SOURCE5, ENTRY1, ENTRY2, ENTRY3, ENTRY4 } = getData();

      const onFilterChange = jest.fn(),
        onDataChange = jest.fn(),
        filters: NumberFilterConfig = {
          $id: 'filter0',
          type: 'number',
          path: 'field0',
          value: 4,
          operator: RELATIONAL_OPERATOR.LT,
        },
        collection = new DataCollection({
          source: SOURCE5,
          filters,
          handlers: {
            [DataCollectionEvents.filterchange]: onFilterChange,
            [DataCollectionEvents.datachange]: onDataChange,
          },
          valueRules: VALUE_RULES,
        });

      // イベントの発火状況
      expect(onFilterChange).toBeCalledTimes(0);
      expect(onDataChange).toBeCalledTimes(0);

      onFilterChange.mockReset();
      onDataChange.mockReset();

      // フィルターの追加
      const filter: NumberFilterConfig = {
        $id: 'filter1',
        type: 'number',
        path: 'field0',
        value: 0,
        operator: RELATIONAL_OPERATOR.GT,
      };
      collection.addFilters(filter);

      // イベントの発火状況
      expect(onFilterChange).toBeCalledTimes(1);
      expect(onDataChange).toBeCalledTimes(1);
      expect(onDataChange.mock.calls[0][0]).toMatchObject({
        type: DataCollectionEvents.datachange,
        params: {
          data: [ENTRY1, ENTRY2, ENTRY3],
        },
      });

      onFilterChange.mockReset();
      onDataChange.mockReset();

      // フィルターの削除
      collection.removeFilters('filter0');

      // イベントの発火状況
      expect(onFilterChange).toBeCalledTimes(1);
      expect(onDataChange).toBeCalledTimes(1);
      expect(onDataChange.mock.calls[0][0]).toMatchObject({
        type: DataCollectionEvents.datachange,
        params: {
          data: [ENTRY1, ENTRY2, ENTRY3, ENTRY4],
        },
      });
    });

    test('sortchange & datachange', () => {
      const { VALUE_RULES, SOURCE5, ENTRY0, ENTRY1, ENTRY2, ENTRY3, ENTRY4 } = getData();

      const onSortChange = jest.fn(),
        onDataChange = jest.fn(),
        sorters: ValueSorterConfig = { $id: 'sort0', type: 'value', path: 'field2' },
        collection = new DataCollection({
          source: SOURCE5,
          sorters,
          handlers: {
            [DataCollectionEvents.sortchange]: onSortChange,
            [DataCollectionEvents.datachange]: onDataChange,
          },
          valueRules: VALUE_RULES,
        });

      // イベントの発火状況
      expect(onSortChange).toBeCalledTimes(0);
      expect(onDataChange).toBeCalledTimes(0);

      onSortChange.mockReset();
      onDataChange.mockReset();

      // ソーターの追加
      const sorter: ValueSorterConfig = { $id: 'sort1', type: 'value', path: 'field3' };
      collection.addSorters(sorter);

      // イベントの発火状況
      expect(onSortChange).toBeCalledTimes(1);
      expect(onDataChange).toBeCalledTimes(1);
      expect(onDataChange.mock.calls[0][0]).toMatchObject({
        type: DataCollectionEvents.datachange,
        params: {
          data: [ENTRY2, ENTRY4, ENTRY3, ENTRY0, ENTRY1],
        },
      });

      onSortChange.mockReset();
      onDataChange.mockReset();

      // フィルターの削除
      collection.removeSorters('sort0');

      // イベントの発火状況
      expect(onSortChange).toBeCalledTimes(1);
      expect(onDataChange).toBeCalledTimes(1);
      expect(onDataChange.mock.calls[0][0]).toMatchObject({
        type: DataCollectionEvents.datachange,
        params: {
          data: [ENTRY2, ENTRY3, ENTRY4, ENTRY0, ENTRY1],
        },
      });
    });

    test('update', () => {
      const { VALUE_RULES, ITEM2, SOURCE5 } = getData();

      const onUpdate = jest.fn(),
        collection = new DataCollection({
          source: SOURCE5,
          handlers: {
            [DataCollectionEvents.entriesupdate]: onUpdate,
          },
          valueRules: VALUE_RULES,
        });

      // イベントの発火状況
      expect(onUpdate).toBeCalledTimes(0);

      onUpdate.mockReset();

      // entryを更新
      const entry = collection.get(ITEM2.$id);
      entry?.update({ field0: 20 });

      // 更新状況
      expect(entry?.get('field0')).toBe(20);
      // イベントの発火状況
      expect(onUpdate).toBeCalledTimes(1);
      expect(onUpdate.mock.calls[0][0]).toMatchObject({
        type: DataCollectionEvents.entriesupdate,
        params: {
          entries: [entry],
        },
      });
    });

    test('destroy', () => {
      const { VALUE_RULES, SOURCE5 } = getData();

      const onDestroy = jest.fn(),
        collection = new DataCollection({
          source: SOURCE5,
          handlers: {
            [DataCollectionEvents.destroy]: onDestroy,
          },
          valueRules: VALUE_RULES,
        });

      // 破棄
      collection.destructor();

      // イベントの発火状況
      expect(onDestroy).toBeCalledTimes(1);
      expect(onDestroy.mock.calls[0][0]).toMatchObject({
        type: DataCollectionEvents.destroy,
        params: {},
      });
    });
  });
});
