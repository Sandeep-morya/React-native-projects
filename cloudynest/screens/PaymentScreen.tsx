import {
	Heading,
	VStack,
	View,
	ScrollView,
	Button,
	theme,
	Icon,
} from "native-base";
import React from "react";
import { Alert } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import PaymentMethods from "../components/PaymentMethods";
import { Screens } from "../data";

export default function PaymentScreen(props: any) {
	return (
		<View style={{ flex: 1 }}>
			<VStack flex={1} p="2">
				<Heading size={"xl"} fontWeight={"900"}>
					Choose
				</Heading>
				<Heading size={"xl"} fontWeight={"900"}>
					Payment Method
				</Heading>
				<ScrollView mt={3} rounded={"xl"}>
					<PaymentMethods />
				</ScrollView>
			</VStack>

			<Button
				onPress={() =>
					Alert.alert(
						"Successfull",
						"Odrder Placed Successfully",
						[
							{
								text: "Track Status",
								onPress: () => props.navigation.navigate(Screens.Home),
							},
						],
						{
							cancelable: true,
							onDismiss: () => props.navigation.navigate(Screens.Home),
						},
					)
				}
				size="lg"
				py={6}
				android_ripple={{ color: theme.colors.teal[500] }}
				leftIcon={
					<Icon size={6} mr={4} as={<FontAwesome5 name="shopping-bag" />} />
				}
				colorScheme={"teal"}>
				<Heading textTransform={"uppercase"} color="white" size="md">
					Place Order
				</Heading>
			</Button>
		</View>
	);
}
