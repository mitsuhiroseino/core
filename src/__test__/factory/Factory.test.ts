import Base from 'src/base/Base';
import Factory, { IFactoryable } from 'src/factory/Factory';
import initFactoryable from 'src/helpers/initFactoryable';

// productのインターフェイス
interface ITestProduct extends IFactoryable {
  getType(): string;
  isSingleton(): boolean;
}

// productの抽象クラス
export default abstract class TestProductBase extends Base<any> implements ITestProduct {
  /**
   * カテゴリー
   */
  static readonly CATEGORY = 'testproduct';

  /**
   * ID
   */
  readonly $id!: string;

  /**
   * 種別
   */
  readonly type!: string;

  constructor(config?: any) {
    super(config);
    initFactoryable(this, this.config);
  }

  getType() {
    return this.type;
  }
  abstract isSingleton(): boolean;
}

class ClassProduct1 extends TestProductBase {
  /**
   * 種別
   */
  static TYPE = 'class1';

  /**
   * 代替種別
   */
  static ALTS = ['c1'];

  isSingleton(): boolean {
    return false;
  }
}

class ClassProduct2 extends TestProductBase {
  /**
   * 種別
   */
  static TYPE = 'class2';

  /**
   * 代替種別
   */
  static ALTS = ['c2'];

  isSingleton(): boolean {
    return false;
  }
}

class InstanceProduct1 extends TestProductBase {
  /**
   * 種別
   */
  static TYPE = 'instance1';

  /**
   * 代替種別
   */
  static ALTS = ['i1'];

  isSingleton(): boolean {
    return true;
  }
}

class InstanceProduct2 extends TestProductBase {
  /**
   * 種別
   */
  static TYPE = 'instance2';

  /**
   * 代替種別
   */
  static ALTS = ['i2'];

  isSingleton(): boolean {
    return true;
  }
}

class TestFactory extends Factory<ITestProduct> {}
const FACTORY = new TestFactory({
  category: 'test',
  products: [ClassProduct1, ClassProduct2, new InstanceProduct1(), new InstanceProduct2()],
});

describe('Factory', () => {
  describe('config', () => {
    describe('products', () => {
      test('class', () => {
        const product: ITestProduct = FACTORY.create(ClassProduct1.TYPE);
        expect(product.getType()).toBe(ClassProduct1.TYPE);
        expect(product.isSingleton()).toBe(false);
      });
      test('instance', () => {
        const product: ITestProduct = FACTORY.create(InstanceProduct1.TYPE);
        expect(product.getType()).toBe(InstanceProduct1.TYPE);
        expect(product.isSingleton()).toBe(true);
      });
    });
  });
});
