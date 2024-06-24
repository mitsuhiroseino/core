import { AnyOptions } from '@visue/utils/types';
import { ExtractOptionsBase, ExtractorConfigBase } from '../ExtractorBase';

/**
 * extractメソッドのオプション
 */
export type AnyExtractOptions = ExtractOptionsBase & AnyOptions;

/**
 * コンフィグ
 */
export type AnyExtractorConfig<
  S = { [property: string]: any },
  V = any,
  C extends AnyExtractorConfig<S, V, any> = AnyExtractorConfig<S, V, any>,
> = ExtractorConfigBase &
  AnyExtractOptions & {
    /**
     * 対象の値から検証対象とする任意の値を取得するための関数
     * 当項目が設定されている場合、propertyは無効
     * @param value
     * @returns
     */
    extract?: (value: S, config: C) => V;

    /**
     * バリデーション
     * @param source
     */
    validate?: (source: S, config: C) => boolean;
  };
