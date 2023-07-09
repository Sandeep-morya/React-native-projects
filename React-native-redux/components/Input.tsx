import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import Button from "./Button";

export default function Input() {
	return (
		<View className="w-full items-center">
			<TextInput
				className="w-[80%] rounded-md my-2 bg-white shadow-md p-3 text-lg"
				placeholder="Enter new Todo"
			/>
			<Button>Add Todo</Button>
		</View>
	);
}
