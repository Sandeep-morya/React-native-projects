import {
	Avatar,
	Button,
	Flex,
	HStack,
	Heading,
	IconButton,
	Text,
	VStack,
	theme,
	View,
} from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Screens, trending_products } from "../data";
import { sellerProfile } from "../data";
import {
	FontAwesome,
	Ionicons,
	AntDesign,
	MaterialIcons,
} from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import CartItemCard from "../components/CartItemCard";

const cart = trending_products;
const user = sellerProfile;

export default function CartScreen(props: any) {
	return (
		<View style={{ flex: 1, backgroundColor: theme.colors.teal[500] }}>
			<VStack flex={1} p="2">
				<Heading size={"xl"} fontWeight={"900"}>
					My Cart List
				</Heading>
				<Text fontSize="18" color={"gray.800"}>
					Number of items: 3
				</Text>
				<FlatList
					data={cart}
					keyExtractor={(item) => item._id + "cart"}
					renderItem={({ item }) => <CartItemCard />}
					contentContainerStyle={{
						marginTop: 50,
						rowGap: 20,
					}}
				/>
			</VStack>

			{/*---:: Footer ::---*/}
			<HStack
				alignItems={"center"}
				justifyContent={"space-between"}
				p={2}
				h={70}
				bg="white">
				<VStack>
					<Heading color="black" size={"sm"}>
						Total Amount
					</Heading>
					<Heading color="black"> ₹ {"2175"}</Heading>
				</VStack>
				<Button
					onPress={() => props.navigation.navigate(Screens.Checkout)}
					size="lg"
					colorScheme={"teal"}
					rounded={"full"}>
					Proceed to checkout
				</Button>
			</HStack>
		</View>
	);
}
