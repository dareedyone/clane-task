import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";
const styles = StyleSheet.create({
	input: {
		padding: 0,
	},
});

const TextInput = ({ ...props }) => {
	return <NativeTextInput style={styles.input} {...props} />;
};

export default TextInput;
