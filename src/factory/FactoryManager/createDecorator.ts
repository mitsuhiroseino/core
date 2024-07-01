import { FactoryableConstructor } from '../Factory/types';
import FactoryManager from './FactoryManager';

const createDecorator = function (manager: FactoryManager) {
  return function (...args) {
    console.log('This is product', args);
    return function (
      Target: FactoryableConstructor,
      context: {
        kind: 'class';
        name: string | undefined;
        addInitializer(initializer: () => void): void;
      },
    ) {
      context.addInitializer(() => {
        console.log(`initializer: ${Target.TYPE} (${context.kind}).`);
      });
      console.log(`The product is ${Target.TYPE} (${context.kind}).`);
      if (context.kind === 'class') {
        manager.register(Target);
      }
    };
  };
};
export default createDecorator;
