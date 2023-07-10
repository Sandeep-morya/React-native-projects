import { View, Text, ActivityIndicator, TextInput, Button } from "react-native";
import { useState, useCallback, useRef, useEffect } from "react";
import { useSlice } from "../utils/redux";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Feather } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import Message from "../components/Message";
import User from "../components/User";

const GET_MESSAGES = gql`
	query Messages {
		messages {
			id
			content
			user
		}
	}
`;

const CREATE_MESSAGE = gql`
	mutation createMessage($content: String!, $user: String!) {
		createMessage(content: $content, user: $user)
	}
`;

interface IMessages {
	id: string;
	content: string;
	user: string;
}

export default function Messages() {
	const mode = useSlice("theme");
	const { loading, error, data } = useQuery(GET_MESSAGES, {
		pollInterval: 500,
	});
	const [createMessage] = useMutation(CREATE_MESSAGE);
	const [activeUser, setActiveUser] = useState("sandeep");
	const [message, setMessage] = useState("");
	const flashListRef = useRef<any>(null);

	const toggleUser = useCallback(() => {
		setActiveUser((prev) => (prev === "sandeep" ? "akash" : "sandeep"));
	}, []);

	const sendMessage = useCallback(
		(user: string, content: string) => {
			createMessage({
				variables: { content, user },
			});
			setMessage("");
		},
		[createMessage],
	);

	const bg = mode === "dark" ? "bg-[#124]" : "bg-[#eee]";
	if (loading) return <ActivityIndicator size={"large"} />;
	if (error) return <Text>Internal Server Error</Text>;

	return (
		<View className={`${bg} flex-1`}>
			<View className="flex-row p-4">
				<User
					name="akash"
					active={activeUser === "akash"}
					onPress={toggleUser}
				/>
				<User
					name="sandeep"
					active={activeUser === "sandeep"}
					onPress={toggleUser}
				/>
			</View>
			<View className="flex-1 p-2">
				<FlashList
					ref={flashListRef}
					data={data.messages as IMessages[]}
					renderItem={({ item }) => <Message {...item} />}
					estimatedItemSize={50}
					onContentSizeChange={() => {
						if (flashListRef.current) {
							setTimeout(() => {
								flashListRef.current.scrollToEnd({ animated: true });
							}, 100);
						}
					}}
				/>
			</View>
			<View className="flex-row items-center w-full h-[80] border border-gray-200 bg-white rounded-t-xl px-4">
				<TextInput
					className="flex-1 bg-gray-200 p-2 px-4 text-base rounded-full mr-4"
					placeholder="Enter Message"
					value={message}
					onChangeText={(e) => setMessage(e)}
				/>
				<Feather
					name="send"
					size={24}
					color="black"
					onPress={() => sendMessage(activeUser, message)}
				/>
			</View>
		</View>
	);
}
