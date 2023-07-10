import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "../redux/store";
import HeaderRight from "../components/HeaderRight";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
	uri: "http://192.168.1.4:4000/graphql",
	cache: new InMemoryCache(),
});

export default () => (
	<ApolloProvider client={client}>
		<Provider store={store}>
			<Stack
				screenOptions={{
					headerRight: (props) => <HeaderRight />,
					// headerTransparent: true,
				}}>
				<Stack.Screen
					name="index"
					options={{ headerTitle: "GraphQL Practice" }}
				/>
				<Stack.Screen
					name="messages"
					options={{ headerTitle: "Subscriptions" }}
				/>
			</Stack>
		</Provider>
	</ApolloProvider>
);
