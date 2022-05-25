import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './views/Home';
const Stack = createStackNavigator();
import ComponentMenu from './views/Menu';

const pages: Array<any> = ComponentMenu;

export default function App() {


	return (
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
	);
}