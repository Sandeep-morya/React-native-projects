import { Image, View } from "native-base";
import React from "react";

import Swiper from "react-native-swiper";
const images = [
	"https://res.cloudinary.com/due9pi68z/image/upload/v1684426762/hi2ilkoczrgwhip9rt3h.png",
	"https://res.cloudinary.com/due9pi68z/image/upload/v1684426764/ksiz5kouhe4lexjg4aqb.png",
	"https://res.cloudinary.com/due9pi68z/image/upload/v1684426765/lnupuousyrho1ebcpc2s.png",
	"https://res.cloudinary.com/due9pi68z/image/upload/v1684426762/jd4erqwxepaqo7spb99t.png",
	"https://res.cloudinary.com/due9pi68z/image/upload/v1684426764/pxgwvltd5x7s56om27p6.png",
	"https://res.cloudinary.com/due9pi68z/image/upload/v1684426764/jv2zjdoe3fvnyxf3evp5.png",
];

export default function Carousel() {
	return (
		<View height={200} my={5}>
			<Swiper
				horizontal
				loop
				autoplay
				showsPagination={false}
				showsButtons={false}>
				{images.map((e) => (
					<Image
						key={e}
						flex={1}
						resizeMode="cover"
						source={{ uri: e }}
						alt="post"
					/>
				))}
			</Swiper>
		</View>
	);
}
