import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation as useRoute } from "@react-navigation/native";

import React from "react";
type DrawerParamList = {
	Home: undefined;
	Login: undefined;
	AllProducts: { category: string };
	SingleProduct: { id: number | string };
	Cart: undefined;
	Checkout: undefined;
	Payment: undefined;
};

export default function useNavigation() {
	return useRoute<DrawerNavigationProp<DrawerParamList>>();
}
