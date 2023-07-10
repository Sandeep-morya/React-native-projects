import { Text, Pressable } from "react-native";

interface IProps {
	name: string;
	active: boolean;
	onPress?: () => void;
}

export default function User({ name, onPress, active }: IProps) {
	const bg = active ? "bg-lime-500" : "bg-white";
	return (
		<Pressable
			onPress={onPress}
			className={`mx-2 ${bg} py-2 px-3 rounded-full`}>
			<Text className={`capitalize ${active && "text-white"} font-semibold`}>
				{name}
			</Text>
		</Pressable>
	);
}
