import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import FormikTextInput from "../FormikTextInput";
import { Formik } from "formik";
import * as yup from "yup";
import theme from "../theme";

const styles = StyleSheet.create({
	submit: {
		backgroundColor: "purple",
		textAlign: "center",
		color: "white",
		paddingTop: 15,
		paddingBottom: 15,
		borderRadius: 5,
	},
	subheader: {
		fontSize: theme.fontSizes.subheading,
		color: theme.colors.textSecondary,
		textAlign: "center",
		marginTop: 20,
		marginBottom: 25,
	},
});
const inputFields = [
	{ name: "name", placeholder: "Name", testID: "nameField" },
	{ name: "email", placeholder: "E-mail", testID: "emailField" },
	{ name: "pin", placeholder: "Personal pin", testID: "pinField" },
	{ name: "address", placeholder: "Address", testID: "addressField" },
];
const validationSchema = yup.object().shape({
	email: yup
		.string()
		.required("Email is required")
		.email("Valid mail required"),
	name: yup.string().required("Name is required"),
	pin: yup
		.number("Must be number")
		.typeError("must be a number")
		.required("Pin is required"),
	address: yup.string(),
});

export const PluggableSignupForm = ({ handleSubmit }) => {
	const initialValues = { email: "", name: "", pin: "", address: "" };
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			{({ handleSubmit }) => (
				<View>
					{inputFields.map((i) => (
						<FormikTextInput
							key={i.name}
							name={i.name}
							placeholder={i.placeholder}
							testID={i.testID}
						/>
					))}
					<Text style={styles.subheader}>Already have an account? Log In!</Text>
					<TouchableOpacity testID="submitButton" onPress={handleSubmit}>
						<Text style={styles.submit}>Sign Up</Text>
					</TouchableOpacity>
				</View>
			)}
		</Formik>
	);
};

const SignUpForm = () => {
	const handleSubmit = () => {
		console.log("yeahhh");
	};
	return <PluggableSignupForm handleSubmit={handleSubmit} />;
};

export default SignUpForm;
