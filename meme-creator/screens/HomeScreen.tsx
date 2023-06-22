import { ScrollView, Stack, VStack, FlatList, Text, Image } from "native-base";
import React, { useCallback, useEffect, useState } from "react";
import MemeSkeleton from "../components/MemeSkeleton";
import axios, { AxiosResponse } from "axios";
import { ImageLoadEventData, NativeSyntheticEvent } from "react-native";

const API_URL = "https://facebook-clone-server-ouj0.onrender.com";
const TOKEN_SECRET = "sandeep-morya-facebook-clone-secret-key";
interface PostType {
	_id: string;
	type: string;
	text: string;
	url: string;
	user_id: string;
	likes: number;
	hearts: number;
	wows: number;
	sads: number;
	cares: number;
	hahas: number;
	angries: number;
	comments: string[];
	shares: number;
	tags: string[];
	createdAt: Date;
	updatedAt: Date;
}

export default function HomeScreen() {
	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useState<PostType[]>([]);

	const [aspectRatio, setAspectRatio] = useState(1);

	const calculateAspectRatio = (
		event: NativeSyntheticEvent<ImageLoadEventData>,
	) => {
		const { width, height } = event.nativeEvent.source;
		const imageAspectRatio = width / height;
		setAspectRatio(imageAspectRatio);
	};

	const getPosts = useCallback(async () => {
		setLoading(true);
		try {
			const { data }: AxiosResponse<PostType[]> = await axios.get(
				API_URL + "/posts/all",
				{
					headers: { Authorization: TOKEN_SECRET },
				},
			);
			setPosts(data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		getPosts();
	}, [getPosts]);

	return (
		<ScrollView p={3}>
			{loading ? (
				<Stack space={3}>
					<MemeSkeleton />
					<MemeSkeleton />
					<MemeSkeleton />
				</Stack>
			) : (
				<VStack space={5}>
					{posts.map((post) => (
						<Image
							key={post._id}
							w={"full"}
							borderRadius={"md"}
							resizeMode="contain"
							style={{ aspectRatio: aspectRatio }}
							source={{ uri: post.url }}
							alt="post"
							onLoad={calculateAspectRatio}
						/>
					))}
				</VStack>
			)}
		</ScrollView>
	);
}
