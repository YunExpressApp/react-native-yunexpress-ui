// import i18n from 'react-native-i18n';

import en from './en/en'; //暂时用中文 后面复制字典翻译

import zh from './zh/zh';

import fr from './fr/fr';
import Theme from '../themes/Theme';

export default class i18n {

	static isValidKey(
		key: string | number | symbol,
		object: object
	): key is keyof typeof object {
		return key in object;
	}

	/**
	 * 模拟i18n   自己实现国际化
	 * @param key 
	 * @returns 
	 */
	static t(key: string) {
		let loc = Theme.locale || "en";
		if (loc == 'en' && this.isValidKey(key, en)) {
			return en[key] || key;
		}
		if (loc == 'zh' && this.isValidKey(key, zh)) {
			return zh[key] || key;
		}
		if (loc == 'fr' && this.isValidKey(key, fr)) {
			return fr[key] || key;
		}
		return key;
	}

}

// export { i18n };
