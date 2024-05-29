import standardize from '../../string/standardize';
import { InsensitiveObjectOptions } from './types';

export class InsensitiveObject extends Object {
  private _options: InsensitiveObjectOptions;

  constructor(values: Object, options?: InsensitiveObjectOptions) {
    super();
    this._options = { ...options };
    if (values) {
      for (const key in values) {
        if (values.hasOwnProperty(key)) {
          this[key] = values[key];
        }
      }
    }
  }
}
