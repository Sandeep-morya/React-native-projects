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

const Drawer = createDrawerNavigator();
export default function App() {
	return (
		<NativeBaseProvider>
			<NavigationContainer>
				{/* <LoginScreen />
				 */}
				<Drawer.Navigator
					drawerContent={(props) => <DrawerContent {...props} />}
					screenOptions={{
						headerTitle: "CloudyNest",
						headerTintColor: "teal",
						headerTitleAlign: "center",
						headerTitleStyle: {
							fontWeight: "700",
							fontSize: 30,
						},
						headerStyle: {
							backgroundColor: "transparent",
							shadowColor: "transparent",
						},
						drawerStyle: {
							width: "100%",
						},
					}}>
					<Drawer.Screen
						options={{
							headerShown: false,
							swipeEnabled: false,
						}}
						name="Login"
						component={LoginScreen}
					/>
					<Drawer.Screen name="Home" component={HomeScreen} />
				</Drawer.Navigator>
				<StatusBar style="auto" backgroundColor={theme.colors.teal[500]} />
			</NavigationContainer>
		</NativeBaseProvider>
	);
}
