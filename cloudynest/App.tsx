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
import AllProductsScreen from "./screens/AllProductsScreen";
import SingleProductScreen from "./screens/SingleProductScreen";
import PaymentScreen from "./screens/PaymentScreen";
import { Screens } from "./data";
import Header from "./components/Header";
import CheckoutScreen from "./screens/CheckoutScreen";
import HeaderSecondary from "./components/HeaderSecondary";

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NativeBaseProvider>
			<NavigationContainer>
				<Drawer.Navigator
					initialRouteName="Home"
					drawerContent={(props) => <DrawerContent {...props} />}
					screenOptions={{
						// headerShown: false,

						drawerStyle: {
							width: "100%",
						},
					}}>
					<Drawer.Screen
						name={Screens.Home}
						component={HomeScreen}
						options={{
							header: (props) => <Header {...props} />,
						}}
					/>
					<Drawer.Screen
						options={{
							headerShown: false,
							swipeEnabled: false,
						}}
						name={Screens.Login}
						component={LoginScreen}
					/>
					<Drawer.Screen
						name={Screens.AllProducts}
						component={AllProductsScreen}
						options={{
							header: (props) => <Header {...props} />,
						}}
					/>
					<Drawer.Screen
						name={Screens.SingleProduct}
						component={SingleProductScreen}
						options={{
							header: (props) => <Header {...props} />,
						}}
					/>
					<Drawer.Screen
						name={Screens.Cart}
						component={CartScreen}
						options={{
							header: (props) => <HeaderSecondary {...props} />,
						}}
					/>
					<Drawer.Screen
						name={Screens.Checkout}
						component={CheckoutScreen}
						options={{
							header: (props) => <HeaderSecondary {...props} />,
						}}
					/>
					<Drawer.Screen
						name={Screens.Payment}
						component={PaymentScreen}
						options={{
							header: (props) => <HeaderSecondary {...props} />,
						}}
					/>
				</Drawer.Navigator>
				<StatusBar style="auto" backgroundColor={theme.colors.teal[500]} />
			</NavigationContainer>
		</NativeBaseProvider>
	);
}
