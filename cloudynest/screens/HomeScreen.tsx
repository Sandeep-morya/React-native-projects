import { DrawerContentComponentProps } from "@react-navigation/drawer";
import {
	Stack,
	Text,
	Flex,
	VStack,
	HStack,
	IconButton,
	Pressable,
	Input,
	Icon,
	Button,
	ScrollView,
} from "native-base";
import React from "react";
import {
	FontAwesome,
	Ionicons,
	AntDesign,
	MaterialIcons,
} from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import TopProducts from "../components/TopProducts";
import SmallCategories from "../components/SmallCategories";
export default function HomeScreen(props: any) {
	return (
		<>
			<VStack pt={6}>
				<Flex
					py={2}
					px={3}
					bg="teal.500"
					direction="row"
					justify="space-between"
					alignItems={"center"}>
					<IconButton
						onPress={() => props.navigation.openDrawer()}
						variant="unstyled"
						_icon={{
							as: AntDesign,
							name: "menufold",
							color: "white",
							size: 6,
						}}
					/>
					<Input
						placeholder="Search"
						variant="filled"
						borderRadius="10"
						size={"xl"}
						colorScheme={"teal"}
						focusOutlineColor={"white"}
						_focus={{
							backgroundColor: "rbga(255,255,255,0.9)",
						}}
						rounded="full"
						width={"70%"}
						InputLeftElement={
							<Icon
								ml={3}
								size="5"
								color="gray.400"
								as={<Ionicons name="ios-search" />}
							/>
						}
					/>

					<IconButton
						variant="unstyled"
						onPress={() => props.navigation.navigate("Cart")}
						_icon={{
							as: MaterialIcons,
							name: "shopping-cart",
							color: "white",
							size: 6,
						}}
					/>
				</Flex>
			</VStack>
			<ScrollView bg={"white"}>
				<Stack flex={1}>
					{/*---:: Header ::---*/}

					{/*---:: User Delivery Location ::---*/}
					{/* <Button colorScheme={"teal"} size="lg" variant={"subtle"}>
					Hello Sir,
				</Button> */}

					<SmallCategories />

					{/*---:: Carousel ::---*/}
					<Carousel />
					{/*---:: Catrgories ::---*/}
					<Categories />

					<TopProducts />
				</Stack>
			</ScrollView>
		</>
	);
}
