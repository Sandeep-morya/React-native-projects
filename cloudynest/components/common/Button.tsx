import { HStack, Icon, Text } from "native-base";
import { Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { ThemeComponentSizeType } from "native-base/lib/typescript/components/types";
import theme from "../../theme";
interface IconType {
	Vector: any;
	name: any;
	iconSize?: ThemeComponentSizeType<"Icon">;
	titleSize?: any;
}
interface Props {
	children: string;
	onPress?: () => void;
	LeftIcon?: IconType;
}

export default function Button({ children, onPress, LeftIcon }: Props) {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [
				{ backgroundColor: pressed ? theme.colors.teal[100] : "transparent" },
			]}>
			<HStack py={3} alignItems={"center"} space={2}>
				{LeftIcon && (
					<Icon
						size={LeftIcon?.iconSize || 6}
						as={<LeftIcon.Vector name={LeftIcon.name} />}
					/>
				)}
				<Text fontSize={LeftIcon?.titleSize || 16}>{children}</Text>
			</HStack>
		</Pressable>
	);
}
