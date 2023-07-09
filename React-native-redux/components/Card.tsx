import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSlice } from "../utils/redux";
interface ICreatedBy {
	name: string;
}
export interface IProps {
	__typename: string;
	completed: boolean;
	id: string;
	title: string;
	createdBy: ICreatedBy;
}
const Card = (item: IProps) => {
	const mode = useSlice("theme");
	const { id, title, completed, createdBy } = item;

	return (
		<LinearGradient
			className="w-[95%] mx-auto rounded-md p-4"
			colors={
				mode === "light"
					? ["rgba(0,0,0,0.07)", "rgba(0,0,0,0.03)"]
					: ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.05)"]
			}
			start={[0, 0]}
			end={[1, 1]}>
			<View className="gap-2 mb-4 relative">
				<Text className="font-semibold text-xl capitalize text-gray-500 w-[80%]">
					{title}
				</Text>
				<Text
					className={`${
						completed ? "text-green-500" : "text-amber-500"
					} font-semibold`}>
					{completed ? "Completed" : "Not Completed"}
				</Text>
				<View className="absolute top-0 right-0 bg-gray-300 w-[30] h-[30] rounded-full justify-center items-center">
					<Text className="font-lg font-semibold">{id}</Text>
				</View>
				<Text className="text-gray-500">Created By: {createdBy.name}</Text>
			</View>

			<View className="flex-row justify-between">
				<Button
					title={completed ? "Mark Incomplete" : "Mark Complete"}
					color="#007AFF"
				/>
				<Button title="Delete" color="#FF3B30" />
			</View>
		</LinearGradient>
	);
};

export default Card;
