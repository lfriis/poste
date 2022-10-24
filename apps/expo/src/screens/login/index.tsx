import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, Text } from 'react-native';
import { LoginUser } from '../../components';

export default function LoginScreen() {
	return (
		<SafeAreaView>
			<View className="h-full w-full p-4">
				<Text className="text-5xl font-bold mx-auto pb-2">
					<Text className="text-indigo-500">poste</Text>
				</Text>

				<LoginUser />
			</View>
			<StatusBar />
		</SafeAreaView>
	);
}
