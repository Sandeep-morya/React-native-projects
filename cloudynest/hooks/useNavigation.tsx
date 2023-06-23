import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation as useRoute } from "@react-navigation/native";

import React from "react";
import { DrawerParamList } from "../data";

export default function useNavigation() {
	return useRoute<DrawerNavigationProp<DrawerParamList>>();
}
