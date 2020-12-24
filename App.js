import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import SignUp from "./src/components/SignUp";

export default function App() {
	return (
		<View style={styles.container}>
			<SignUp />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingLeft: 25,
		paddingRight: 25,
		alignItems: "center",
	},
});
