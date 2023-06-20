import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import CreatorScreen from "../screens/CreatorScreen";
import AboutScreen from "../screens/AboutScreen";
import HomeScreen from "../screens/HomeScreen";

import DrawerContent from "./DrawerContent";

import { theme } from "../theme";

export default function MyDrawer() {
	return (
		<Drawer.Navigator
			drawerContent={(props) => <DrawerContent {...props} />}
			screenOptions={{
				// drawerPosition: "left",
				// drawerType: "front",
				headerTitleAlign: "center",
				// headerTitleStyle: {
				// 	fontWeight: "900",
				// },
				headerStyle: {
					backgroundColor: theme.colors.primary[500],
				},
				headerTintColor: theme.colors.white,
				// headerShown: false,
				// overlayColor: "rgba(255,255,0,0.4)",
				// swipeEnabled: false,

				drawerStyle: {
					// backgroundColor: "rgba(255,89,80,0.4)",
					width: 250,
				},
			}}>
			<Drawer.Screen
				name="Home"
				component={HomeScreen}
				options={{
					title: "Trending Memes",
				}}
			/>
			<Drawer.Screen name="Creator" component={CreatorScreen} />
			<Drawer.Screen name="About" component={AboutScreen} />
		</Drawer.Navigator>
	);
}
