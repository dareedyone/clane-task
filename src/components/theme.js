import { Platform } from "react-native";

const theme = {
	colors: {
		textPrimary: "#24292e",
		textSecondary: "#586069",
		primary: "#0366d6",
		bgPrimary: "#24292e",
		colorWhite: "#FFFFFF",
		bgSecondary: "#e1e4e8",
		btnPrimary: "#147EF0",
		danger: "#d73a4a",
	},
	fontSizes: {
		body: 14,
		subheading: 16,
		heading: 22,
		tiny: 10,
	},
	fonts: {
		main: Platform.select({
			android: "Roboto",
			ios: "Arial",
			default: "System",
		}),
	},
	fontWeights: {
		normal: "400",
		bold: "700",
	},
};

export default theme;
