import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import theme from "./theme";

const styles = StyleSheet.create({
	container: {
		borderColor: theme.colors.textSecondary,
		borderWidth: 1,
		borderRadius: 5,
		paddingLeft: 15,
		paddingRight: 14,
		paddingTop: 3,
		paddingBottom: 3,
		marginBottom: 10,
	},
	errorText: {
		marginLeft: "auto",
		color: "white",
		fontSize: theme.fontSizes.tiny,
	},
	placeholder: {
		fontSize: theme.fontSizes.tiny,
		color: "white",
	},
});

const FormikTextInput = ({ name, placeholder, testID, ...props }) => {
	const [field, meta, helpers] = useField(name);
	const showError = meta.touched && meta.error ? true : false;
	const errorTextStyles = [
		styles.errorText,
		showError && { color: theme.colors.danger },
	];
	const placeholderStyles = [
		styles.placeholder,
		field.value.length > 0 && { color: theme.colors.textSecondary },
	];
	const containerStyles = [
		styles.container,
		showError && { borderColor: theme.colors.danger },
	];
	return (
		<View style={containerStyles}>
			{<Text style={placeholderStyles}>{placeholder} </Text>}
			<TextInput
				onChangeText={(value) => helpers.setValue(value)}
				testID={testID}
				onBlur={() => helpers.setTouched(true)}
				value={field.value}
				placeholder={placeholder}
				{...props}
			/>

			<Text testID={`${testID}Error`} style={errorTextStyles}>
				{meta.error}
			</Text>
		</View>
	);
};

export default FormikTextInput;
