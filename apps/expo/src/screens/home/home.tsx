import React from 'react';
import {
	SafeAreaView,
	View,
	Text,
	TouchableOpacity,
	TextInput,
} from 'react-native';
import { FlashList } from '@shopify/flash-list';
import type { inferProcedureOutput } from '@trpc/server';
import type { AppRouter } from '@acme/api';
import { trpc } from '../../utils/trpc';

const PostCard: React.FC<{
	post: inferProcedureOutput<AppRouter['user']['all']>[number];
}> = ({ post }) => (
	<View className="p-4 border-2 border-gray-500 rounded-lg">
		<Text className="text-xl font-semibold text-gray-800">{post.username}</Text>
		<Text className="text-gray-600">{post.password}</Text>
	</View>
);

const CreateUser: React.FC = () => {
	const utils = trpc.useContext();

	const { mutate } = trpc.user.create.useMutation({
		async onSuccess() {
			await utils.user.all.invalidate();
		},
	});

	const [username, onChangeUsername] = React.useState('');
	const [password, onChangePassword] = React.useState('');

	return (
		<View className="p-4 border-t-2 border-gray-500 flex flex-col">
			<TextInput
				className="border-2 border-gray-500 rounded p-2 mb-2"
				onChangeText={onChangeUsername}
				placeholder="Username"
			/>
			<TextInput
				className="border-2 border-gray-500 rounded p-2 mb-2"
				onChangeText={onChangePassword}
				placeholder="Password"
			/>
			<TouchableOpacity
				className="bg-indigo-500 rounded p-2"
				onPress={() => {
					mutate({
						username,
						password,
						firstName: 'firstname',
						lastName: 'lastname',
						email: 'lastname@test.com',
						phoneNumber: 'lastname@test.com',
					});
				}}
			>
				<Text className="text-white font-semibold">Create user</Text>
			</TouchableOpacity>
		</View>
	);
};

export default function HomeScreen() {
	const postQuery = trpc.user.all.useQuery();
	const [showUser, setShowUser] = React.useState<string | null>(null);

	return (
		<SafeAreaView>
			<View className="h-full w-full p-4">
				<Text className="text-5xl font-bold mx-auto pb-2">
					Create <Text className="text-indigo-500">T3</Text> Turbo
				</Text>

				<View className="py-2">
					{showUser ? (
						<Text>
							<Text className="font-semibold">Selected user:</Text>
							{showUser}
						</Text>
					) : (
						<Text className="italic font-semibold">Press on a user</Text>
					)}
				</View>

				<FlashList
					data={postQuery.data}
					estimatedItemSize={20}
					ItemSeparatorComponent={() => <View className="h-2" />}
					renderItem={(p) => (
						<TouchableOpacity onPress={() => setShowUser(p.item.id)}>
							<PostCard post={p.item} />
						</TouchableOpacity>
					)}
				/>

				<CreateUser />
			</View>
		</SafeAreaView>
	);
}
