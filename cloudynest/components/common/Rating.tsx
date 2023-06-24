import React from "react";
import { HStack, Icon } from "native-base";
interface Props {
	count: number;
	size?: any;
	color?: any;
}
import {
	FontAwesome,
	Ionicons,
	AntDesign,
	MaterialIcons,
} from "@expo/vector-icons";
export default function Rating({ count, size, color }: Props) {
	return (
		<HStack>
			{Array.from({ length: 5 }).map((_, index) => {
				const target = index + 1;
				const totalStar = Math.floor(count);
				return (
					<Icon
						key={index}
						size="5"
						color={"orange.500"}
						as={<FontAwesome name={target > totalStar ? "star-o" : "star"} />}
					/>
				);
			})}
		</HStack>
	);
}
