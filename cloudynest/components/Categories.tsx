import { Image, Heading, VStack, Box, Stack, Flex } from "native-base";
import React from "react";
const images = [
	{
		image: require(`../assets/Categories/smartphones.png`),
		title: "Smartphones",
		color: "teal.100",
	},
	{
		image: require(`../assets/Categories/laptops.png`),
		title: "Laptops",
		color: "red.100",
	},
	{
		image: require(`../assets/Categories/mens.png`),
		title: "Mens",
		color: "blue.100",
	},
	{
		image: require(`../assets/Categories/womens.png`),
		title: "Womens",
		color: "green.100",
	},
	{
		image: require(`../assets/Categories/shoes.png`),
		title: "Shoes",
		color: "yellow.100",
	},
	{
		image: require(`../assets/Categories/shorts.png`),
		title: "Shorts",
		color: "cyan.100",
	},
	// {
	// 	image: require(`../assets/Categories/jackets.png`),
	// 	title: "Jackets",
	// 	color: "blue.100",
	// },
	// {
	// 	image: require(`../assets/Categories/t-shirts.png`),
	// 	title: "T-shirts",
	// 	color: "green.100",
	// },
];

export default function Categories() {
	return (
		<VStack mt={3} p={2} space={2}>
			<Heading mx="auto" size={"xl"}>
				Top Categories
			</Heading>

			<Stack direction="row" flexWrap={"wrap"}>
				{images.map(({ image, title, color }, index) => (
					<Flex
						style={{
							width: "45%",
							aspectRatio: 1,
							borderRadius: 8,
							overflow: "hidden",
							borderColor: "rgba(0,0,0,0.1)", // if you need
							borderWidth: 1,
							shadowColor: "black",
							elevation: 4,
							shadowOpacity: 1,
						}}
						alignItems="center"
						justify="space-evenly"
						bg={color}
						m={2}
						key={title + color}>
						<Image
							style={{
								height: "80%",
								aspectRatio: 1,
							}}
							resizeMode="contain"
							source={image}
							alt="Categories"
						/>
						<Heading size={"sm"}>{title}</Heading>
					</Flex>
				))}
			</Stack>
		</VStack>
	);
}
