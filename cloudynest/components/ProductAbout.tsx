import React from "react";
import { ProductType } from "../types";
import { FlatList, HStack, Heading, VStack, Text, Badge } from "native-base";
import Rating from "./common/Rating";

export default function ProductAbout({
	title,
	price,
	rating,
	sizes,
	discount,
	brand,
}: ProductType) {
	return (
		<VStack flex={1} space={2} py={2}>
			<Heading size={"sm"} color={"gray.600"}>
				{brand}
			</Heading>
			<Heading numberOfLines={2} size={"md"}>
				{title}
			</Heading>
			<HStack space={2}>
				<Text>{rating}</Text>
				<Rating count={rating} />
			</HStack>

			<HStack space={4} alignItems={"baseline"}>
				<Heading> ₹ {price}</Heading>
				<Text
					textDecorationLine={"line-through"}
					textDecorationColor={"teal.500"}
					fontSize={"md"}
					color={"gray.600"}>
					₹ {Math.floor((price * 100) / discount)}
				</Text>
			</HStack>

			<FlatList
				horizontal
				data={sizes}
				renderItem={({ item }) => (
					<Badge colorScheme={"teal"} variant={"outline"} rounded={"full"}>
						{item}
					</Badge>
				)}
				keyExtractor={(item) => item + "sizes"}
				contentContainerStyle={{ alignItems: "center", columnGap: 5 }}
			/>
		</VStack>
	);
}
