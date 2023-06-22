import "react-native-gesture-handler";

import { View, Text, Button, NativeBaseProvider, useTheme } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import DrawerContent from "./navigation/DrawerContent";
import theme from "./theme";
import CartScreen from "./screens/CartScreen";

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NativeBaseProvider>
			<NavigationContainer>
				<Drawer.Navigator
					initialRouteName="Home"
					drawerContent={(props) => <DrawerContent {...props} />}
					screenOptions={{
						headerShown: false,
						drawerStyle: {
							width: "100%",
						},
					}}>
					<Drawer.Screen name="Home" component={HomeScreen} />
					<Drawer.Screen
						options={{
							headerShown: false,
							swipeEnabled: false,
						}}
						name="Login"
						component={LoginScreen}
					/>
					<Drawer.Screen name="Cart" component={CartScreen} />
				</Drawer.Navigator>
				<StatusBar style="auto" backgroundColor={theme.colors.teal[500]} />
			</NavigationContainer>
		</NativeBaseProvider>
	);
}
