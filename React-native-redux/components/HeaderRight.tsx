import { View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import useAppDispatch, { useSlice } from "../utils/redux";
import { toggleTheme } from "../redux/slices/themeSlice";
import { useRouter } from "expo-router";

export default function HeaderRight() {
	const mode = useSlice("theme");
	const dispatch = useAppDispatch();
	const router = useRouter();
	return (
		<View className="flex-row gap-4 items-center">
			<Feather
				name="message-circle"
				size={24}
				color="black"
				onPress={() => router.push("messages")}
			/>
			<Feather
				name={mode === "dark" ? "moon" : "sun"}
				size={24}
				color="black"
				onPress={() => dispatch(toggleTheme())}
			/>
		</View>
	);
}
