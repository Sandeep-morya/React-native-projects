import {
	View,
	Text,
	Stack,
	Flex,
	HStack,
	IconButton,
	Icon,
	Pressable,
	Divider,
	VStack,
	Box,
	Heading,
} from "native-base";
import React from "react";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import {
	FontAwesome,
	Ionicons,
	MaterialIcons,
	Foundation,
} from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import theme from "../theme";
import Button from "../components/common/Button";
import { Linking } from "react-native";
import { Screens } from "../data";

export default function DrawerContent(props: DrawerContentComponentProps) {
	return (
		<Stack flex={1} pt={6}>
			{/*---:: Drawer Header ::---*/}
			<Flex
				py={2}
				px={3}
				bg="teal.500"
				direction="row"
				justify="space-between"
				alignItems={"center"}>
				<HStack alignItems={"center"}>
					<IconButton
						onPress={() => props.navigation.closeDrawer()}
						variant="unstyled"
						_icon={{
							as: FontAwesome,
							name: "angle-left",
							color: "white",
							size: 8,
						}}
					/>
					<Text fontWeight={"bold"} fontSize={18} color="white">
						Hello
					</Text>
				</HStack>

				<Pressable
					borderWidth={1.5}
					borderColor={"white"}
					px={2.5}
					py={1}
					onPress={() => props.navigation.navigate(Screens.Login)}
					borderRadius={"full"}>
					<Text fontWeight={"bold"} fontSize={18} color="white">
						Sign In
					</Text>
				</Pressable>
			</Flex>

			{/*---:: Navlinks ::---*/}
			<VStack p={3}>
				{/*---:: Section - 2 ::---*/}
				<Heading size={"md"}>Profile</Heading>
				<Button LeftIcon={{ Vector: Ionicons, name: "ios-shirt" }}>
					Your Orders
				</Button>

				<Divider />

				<Button LeftIcon={{ Vector: MaterialIcons, name: "shopping-cart" }}>
					Cart
				</Button>
				<Divider />
				<Button LeftIcon={{ Vector: MaterialIcons, name: "favorite" }}>
					WishList
				</Button>

				{/*---:: Section - 3 ::---*/}
				<Heading mt={4} size={"md"}>
					More
				</Heading>
				<Button LeftIcon={{ Vector: MaterialIcons, name: "card-giftcard" }}>
					Coupons
				</Button>
				<Divider />
				<Button LeftIcon={{ Vector: MaterialIcons, name: "local-offer" }}>
					Offers
				</Button>
				<Divider />
				<Button LeftIcon={{ Vector: MaterialIcons, name: "support" }}>
					Support
				</Button>
				<Heading mt={4} size={"md"}>
					Sell products
				</Heading>
				<Button
					onPress={() =>
						Linking.openURL("https://cloudynest.vercel.app/supplier/")
					}
					LeftIcon={{ Vector: FontAwesome, name: "users" }}>
					Login As Supplier
				</Button>
			</VStack>

			{/*---:: Footer ::---*/}
			<HStack flex="1" alignItems={"flex-end"}>
				<Flex
					flex={1}
					p={2}
					bg="gray.200"
					direction="row"
					borderTopRadius={"xl"}
					shadow={"9"}
					justify="space-between">
					<VStack>
						<Text fontSize={15}>
							Copyright &copy;{new Date().getFullYear()}
						</Text>
						<Text fontSize={13}>All rights reserved by CloudyNest</Text>
					</VStack>
					<HStack>
						<IconButton
							onPress={() => Linking.openURL("https://cloudynest.vercel.app/")}
							variant="unstyled"
							_icon={{
								as: Foundation,
								name: "web",
								size: 6,
							}}
						/>
						<IconButton
							onPress={() =>
								Linking.openURL("https://github.com/Sandeep-morya/")
							}
							variant="unstyled"
							_icon={{
								as: FontAwesome,
								name: "github",
								size: 6,
							}}
						/>
						<IconButton
							onPress={() =>
								Linking.openURL(
									"https://api.whatsapp.com/send?phone=919988885304",
								)
							}
							variant="unstyled"
							_icon={{
								as: FontAwesome,
								name: "whatsapp",
								size: 6,
							}}
						/>
					</HStack>
				</Flex>
			</HStack>

			<StatusBar style="auto" backgroundColor={theme.colors.teal[500]} />
		</Stack>
	);
}
