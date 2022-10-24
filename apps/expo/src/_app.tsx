import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TRPCProvider } from './utils/trpc';
import AppRouter from './routes';

export default function App() {
	return (
		<TRPCProvider>
			<SafeAreaProvider>
				<AppRouter />
				<StatusBar />
			</SafeAreaProvider>
		</TRPCProvider>
	);
}
