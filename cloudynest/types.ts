import { ResponsiveValue } from "native-base/lib/typescript/components/types";
import { trending_products } from "./data";

export type ProductType = (typeof trending_products)[0];
export type ButtonVariantType = ResponsiveValue<
	"outline" | (string & {}) | "link" | "ghost" | "solid" | "subtle" | "unstyled"
>;
