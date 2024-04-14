import I18nResources from './I18nResources';
import Translator from './Translator';

export const i18nResources = new I18nResources();
const translator = new Translator({ resources: i18nResources });
export const t = translator.translate.bind(translator);
