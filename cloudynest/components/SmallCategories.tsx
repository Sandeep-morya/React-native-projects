import React from "react";
import { FlatList, Image, Text, VStack } from "native-base";
const images = [
	{
		image: require(`../assets/Categories/smartphones.png`),
		title: "Mobile",
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
	{
		image: require(`../assets/Categories/jackets.png`),
		title: "Jackets",
		color: "blue.100",
	},
	{
		image: require(`../assets/Categories/t-shirts.png`),
		title: "T-shirts",
		color: "green.100",
	},
];
export default function SmallCategories() {
	return (
		<FlatList
			bg={"gray.100"}
			shadow={5}
			data={images.reverse()}
			renderItem={({ item }) => (
				<VStack py={2} px={1}>
					<Image
						w={50}
						h={50}
						resizeMode="contain"
						source={item.image}
						alt={item.title}
					/>
					<Text>{item.title}</Text>
				</VStack>
			)}
			keyExtractor={({ title }, index) => title + index}
			horizontal
			contentContainerStyle={{ columnGap: 5 }}
			showsHorizontalScrollIndicator={false}
		/>
	);
}
