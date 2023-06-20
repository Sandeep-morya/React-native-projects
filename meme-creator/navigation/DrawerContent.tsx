import React from "react";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Text, VStack } from "native-base";
import { Pressable } from "react-native";
import { theme } from "../theme";

export default function DrawerContent(props: DrawerContentComponentProps) {
	return (
		<VStack pt={3}>
			{props.state.routeNames.map((name, index) => (
				<Pressable
					key={name}
					style={({ pressed }) => [
						{
							backgroundColor: pressed
								? theme.colors.primary[50]
								: "transparent",
						},
					]}
					onPress={() => props.navigation.navigate(name)}>
					<Text
						color={
							index === props.state.index
								? theme.colors.primary[500]
								: theme.colors.black
						}
						p={3}
						fontSize={16}
						fontWeight={600}>
						{name}
					</Text>
				</Pressable>
			))}
		</VStack>
	);
}
