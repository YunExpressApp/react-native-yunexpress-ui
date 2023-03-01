/*
 * @Author: 1418220302@qq.com 1418220302@qq.com
 * @Date: 2023-03-01 10:28:47
 * @LastEditors: 1418220302@qq.com 1418220302@qq.com
 * @LastEditTime: 2023-03-01 16:13:52
 * @Module Name: 
 * @Description: 
 */
import { defineConfig } from 'dumi';

export default defineConfig({
	title: 'APP组件库',
	favicon:
		'/assets/logo.png',
	logo: '/assets/logo.png',
	outputPath: 'docs-dist',
	mode: 'doc',
	publicPath: './',
	// more config: https://d.umijs.org/config
	// 单语言配置方式如下
	navs: [
		null, 
	],
});
