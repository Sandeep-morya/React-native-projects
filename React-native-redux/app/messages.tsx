import { View, Text } from "react-native";
import React from "react";
import { useSlice } from "../utils/redux";

export default function Messages() {
	const mode = useSlice("theme");

	const bg = mode === "dark" ? "bg-[#124]" : "bg-[#fff]";
	return (
		<View className={`${bg} flex-1`}>
			<Text>messages</Text>
		</View>
	);
}
