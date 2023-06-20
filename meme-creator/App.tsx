import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";

import { NativeBaseProvider } from "native-base";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { theme } from "./theme";
import Drawer from "./navigation/MyDrawer";

export default function App() {
	return (
		<NativeBaseProvider theme={theme}>
			<SafeAreaProvider>
				<NavigationContainer>
					<Drawer />
					<StatusBar
						barStyle="default"
						backgroundColor={theme.colors.primary[500]}
					/>
				</NavigationContainer>
			</SafeAreaProvider>
		</NativeBaseProvider>
	);
}
