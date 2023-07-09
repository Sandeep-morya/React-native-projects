import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Theme = "light" | "dark";

const themeSlice = createSlice({
	name: "theme",
	initialState: "light" as Theme,
	reducers: {
		toggleTheme(state) {
			return state === "light" ? "dark" : "light";
		},
		setColorMode(state, action: PayloadAction<Theme>) {
			return action.payload;
		},
	},
});

export const { toggleTheme, setColorMode } = themeSlice.actions;
export default themeSlice.reducer;
