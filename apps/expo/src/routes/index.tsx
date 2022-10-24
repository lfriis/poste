import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeScreen, LoginScreen } from '../screens';

const Tab = createMaterialBottomTabNavigator();

export default function AppRouter() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="Login" component={LoginScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
