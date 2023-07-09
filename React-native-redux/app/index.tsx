import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
// import Input from "../components/Input";
import { useSlice } from "../utils/redux";
import { useQuery, gql } from "@apollo/client";
import { FlatList } from "react-native";
import { FlashList } from "@shopify/flash-list";
import Card, { IProps } from "../components/Card";

const GET_TODOS = gql`
	query GetTodos {
		todos {
			title
			completed
			id
			createdBy {
				name
			}
		}
	}
`;

export default function index() {
	const mode = useSlice("theme");
	const { loading, error, data } = useQuery(GET_TODOS);

	const bg = mode === "dark" ? "bg-[#124]" : "bg-[#fff]";
	if (loading) return <ActivityIndicator size={"large"} />;
	if (error) return <Text>Internal Server Error</Text>;
	// console.log(data.todos[0].createdBy);

	return (
		<View className={`${bg} flex-1`}>
			{/* <FlatList
				data={data.todos}
				renderItem={({ item }) => <Card {...item} />}
				contentContainerStyle={{ rowGap: 10 }}

			/> */}
			<FlashList
				data={data.todos as IProps[]}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <Card {...item} />}
				estimatedItemSize={100}
				contentContainerStyle={{
					paddingTop: 10,
				}}
				ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
}
