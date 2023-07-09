import { Pressable, Text } from "react-native";
import { useState, PropsWithChildren } from "react";
import { styled } from "nativewind";

interface Props extends PropsWithChildren {
	onPress?: () => void;
}

const S = {
	Pressable: styled(
		Pressable,
		"bg-white border border-gray-200 px-5 py-3 rounded-full active:bg-blue-100",
	),
	Text: styled(Text, "font-bold text-blue-500 text-lg"),
};

export default function Button(props: Props) {
	return (
		<S.Pressable onPress={props.onPress}>
			<S.Text>{props.children}</S.Text>
		</S.Pressable>
	);
}
