import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TRPCProvider } from './utils/trpc';

// import { HomeScreen } from './screens/home';
import LoginScreen from './screens/login';

export default function App() {
	<TRPCProvider>
		<SafeAreaProvider>
			<LoginScreen />
			<StatusBar />
		</SafeAreaProvider>
	</TRPCProvider>;
}
