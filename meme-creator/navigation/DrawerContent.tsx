import React from "react";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import {
	Text,
	VStack,
	Icon,
	HStack,
	Pressable,
	Heading,
	Center,
} from "native-base";
import { theme } from "../theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const getIconName = (name: string) => {
	switch (name) {
		case "Home":
			return "home";
		case "Creator":
			return "fire";
		case "About":
			return "information";
		default:
			return "home";
	}
};

const getColor = (x: number, y: number) => {
	return x === y ? theme.colors.primary[500] : theme.colors.gray[500];
};

export default function DrawerContent(props: DrawerContentComponentProps) {
	return (
		<VStack>
			<Center p={3}>
				<Heading color={theme.colors.primary[500]}>Menu</Heading>
			</Center>

			{props.state.routeNames.map((name, index) => (
				<Pressable
					rounded={"lg"}
					key={name}
					android_ripple={{
						color: theme.colors.primary[500],
					}}
					style={{
						backgroundColor:
							index === props.state.index
								? theme.colors.primary[100]
								: "transparent",
					}}
					onPress={() => props.navigation.navigate(name)}>
					<HStack pl={2} alignItems={"center"}>
						<Icon
							as={<MaterialCommunityIcons name={getIconName(name)} />}
							size={7}
							color={getColor(index, props.state.index)}
						/>
						<Text
							color={getColor(index, props.state.index)}
							p={4}
							fontSize={16}
							fontWeight={600}>
							{name}
						</Text>
					</HStack>
				</Pressable>
			))}
		</VStack>
	);
}
