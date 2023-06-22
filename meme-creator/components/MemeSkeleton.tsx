import React from "react";
import { VStack, Skeleton } from "native-base";

export default function MemeSkeleton() {
	return (
		<VStack
			maxW="400"
			borderWidth="1"
			space={8}
			pb={3}
			overflow="hidden"
			rounded="md"
			_dark={{
				borderColor: "coolGray.500",
			}}
			_light={{
				borderColor: "coolGray.300",
			}}>
			<Skeleton h="40" />
			<Skeleton.Text px="4" />
		</VStack>
	);
}
