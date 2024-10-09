/*
 * @Author: 康乐 yuankangle@yunexpress.cn
 * @Date: 2022-06-13 09:31:56
 * @LastEditors: 康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2024-10-09 13:57:30
 * @FilePath: \react-native-yunexpress-ui\example\src\App.tsx
 */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './views/Home';
const Stack = createStackNavigator();
import ComponentMenu from './views/Menu';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const pages: Array<any> = ComponentMenu;

export default function App() {


	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1 }}>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen name="Home" component={Home} />
						{
							pages.map(item => (
								<Stack.Screen key={item.name} name={item.name} component={item.page} />
							))
						}
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}