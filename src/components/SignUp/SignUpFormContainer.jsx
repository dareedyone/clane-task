import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import SignUpForm from "./SignupForm";
const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight + 30,
	},
	header: {
		fontSize: theme.fontSizes.heading,
		fontWeight: theme.fontWeights.bold,
		textAlign: "center",
	},
	subheader: {
		fontSize: theme.fontSizes.subheading,
		color: theme.colors.textSecondary,
		textAlign: "center",
		marginTop: 20,
		marginBottom: 25,
	},
	submit: {
		backgroundColor: "purple",
		textAlign: "center",
		color: "white",
		paddingTop: 15,
		paddingBottom: 15,
		borderRadius: 5,
	},
});

const SignUp = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Welcome to Access!</Text>
			<Text style={styles.subheader}>
				Your details are confidential, let&apos;s get you registered by suppying
				the information below.
			</Text>
			<SignUpForm />
		</View>
	);
};

export default SignUp;
