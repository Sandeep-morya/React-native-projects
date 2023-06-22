import {
	Stack,
	Text,
	Flex,
	Box,
	Heading,
	Pressable,
	Input,
	Button,
	Icon,
	IconButton,
	View,
	HStack,
} from "native-base";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import React from "react";

export default function LoginScreen(props: any) {
	const [show, setShow] = React.useState(false);

	return (
		<Stack mt={3} flex={1} space={10} p={2}>
			<Flex alignItems={"flex-end"} p={5}>
				<Pressable onPress={() => props.navigation.navigate("Home")}>
					<Text color={"teal.500"} fontSize={18} fontWeight={"600"}>
						Skip
					</Text>
				</Pressable>
			</Flex>
			<Box>
				<Heading size={"3xl"} fontWeight={"900"}>
					Sign in to CloudyNest
				</Heading>
			</Box>

			<Stack space={4} w="100%" alignItems="center">
				<Input
					w={"90%"}
					size={"xl"}
					focusOutlineColor={"teal.500"}
					py={3}
					colorScheme={"teal"}
					InputLeftElement={
						<Icon
							as={<MaterialIcons name="person" />}
							size={6}
							ml="2"
							color="muted.400"
						/>
					}
					placeholder="Email"
				/>
				<Input
					w={"90%"}
					size={"xl"}
					py={3}
					focusOutlineColor={"teal.500"}
					colorScheme={"teal"}
					type={show ? "text" : "password"}
					InputRightElement={
						<Pressable onPress={() => setShow(!show)}>
							<Icon
								as={
									<MaterialIcons
										name={show ? "visibility" : "visibility-off"}
									/>
								}
								size={6}
								mr="2"
								color="muted.400"
							/>
						</Pressable>
					}
					placeholder="Password"
				/>
			</Stack>

			<Button
				bg="teal.500"
				w={"90%"}
				alignSelf={"center"}
				size="lg"
				py={4}
				variant="solid">
				Login to Continue
			</Button>

			<Flex mx="auto" w="90%" direction="row" alignItems={"center"}>
				<View h={0.5} w="40%" bg="teal.500"></View>
				<Text mx="auto">OR</Text>
				<Box h={0.5} w="40%" bg="teal.500"></Box>
			</Flex>

			<HStack mx="auto" space={2}>
				<Text fontSize={18} fontWeight={"600"}>
					Don't have an account ?{" "}
				</Text>
				<Pressable>
					<Text color={"teal.500"} fontSize={18} fontWeight={"600"}>
						SignUp
					</Text>
				</Pressable>
			</HStack>

			<Flex w="80%" mx="auto" direction="row" justify="space-between">
				<IconButton
					variant="unstyled"
					_icon={{
						as: FontAwesome,
						name: "google-plus-circle",
						color: "red.500",
						size: 16,
					}}
				/>
				<IconButton
					variant="unstyled"
					_icon={{
						as: MaterialIcons,
						name: "facebook",
						color: "blue.500",
						size: 16,
					}}
				/>
				<IconButton
					variant="unstyled"
					_icon={{
						as: FontAwesome,
						name: "github",
						color: "black",
						size: 16,
					}}
				/>
			</Flex>
		</Stack>
	);
}
