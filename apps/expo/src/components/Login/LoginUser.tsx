import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { trpc } from '../../utils/trpc';

export default function LoginUser() {
	const mutation = trpc.user.login.useMutation();
	const [email, onChangeEmail] = useState('');
	const [password, onChangePassword] = useState('');

	const handleLoginUser = async () => {
		mutation.mutate(
			{ email, password },
			{
				onSuccess(data) {
					console.log({ data });
				},
				onError(err) {
					console.error(err);
				},
			},
		);
	};

	return (
		<View className="p-4 border-t-2 border-gray-500 flex flex-col">
			<TextInput
				className="border-2 border-gray-500 rounded p-2 mb-2"
				onChangeText={onChangeEmail}
				placeholder="Email"
			/>
			<TextInput
				className="border-2 border-gray-500 rounded p-2 mb-2"
				onChangeText={onChangePassword}
				placeholder="Password"
			/>
			<TouchableOpacity
				className="bg-indigo-500 rounded p-2"
				onPress={handleLoginUser}
			>
				<Text className="text-white font-semibold">Login</Text>
			</TouchableOpacity>
		</View>
	);
}
