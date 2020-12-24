import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { PluggableSignupForm } from "../components/SignUp/SignupForm";

describe("Signup Inputs Validation on dirty and blur", () => {
	it("shows that name input is required", async () => {
		const handleSubmit = jest.fn();
		const { getByTestId } = render(
			<PluggableSignupForm handleSubmit={handleSubmit} />
		);

		await waitFor(() => {
			fireEvent.changeText(getByTestId("nameField"), "");
			expect(getByTestId("nameFieldError")).toHaveTextContent(
				"Name is required"
			);
		});
	});

	it("shows email is required", async () => {
		const handleSubmit = jest.fn();
		const { getByTestId } = render(
			<PluggableSignupForm handleSubmit={handleSubmit} />
		);
		fireEvent.changeText(getByTestId("emailField"), "");
		await waitFor(() => {
			expect(getByTestId("emailFieldError")).toHaveTextContent(
				"Email is required"
			);
		});
	});

	it("shows email must be a valid email", async () => {
		const handleSubmit = jest.fn();
		const { getByTestId } = render(
			<PluggableSignupForm handleSubmit={handleSubmit} />
		);
		fireEvent.changeText(getByTestId("emailField"), "johndoe@");
		await waitFor(() => {
			expect(getByTestId("emailFieldError")).toHaveTextContent(
				"Valid mail required"
			);
		});
	});

	it("shows pin is required", async () => {
		const handleSubmit = jest.fn();
		const { getByTestId } = render(
			<PluggableSignupForm handleSubmit={handleSubmit} />
		);
		fireEvent.changeText(getByTestId("pinField"), "");
		await waitFor(() => {
			expect(getByTestId("pinFieldError")).toHaveTextContent("Pin is required");
		});
	});
	it("shows pin must be of type number", async () => {
		const handleSubmit = jest.fn();
		const { getByTestId } = render(
			<PluggableSignupForm handleSubmit={handleSubmit} />
		);
		fireEvent.changeText(getByTestId("pinField"), "4sa");
		await waitFor(() => {
			expect(getByTestId("pinFieldError")).toHaveTextContent(
				"must be a number"
			);
		});
	});

	it("shows address is NOT required", async () => {
		const handleSubmit = jest.fn();
		const { getByTestId } = render(
			<PluggableSignupForm handleSubmit={handleSubmit} />
		);
		fireEvent.changeText(getByTestId("addressField"), "");
		await waitFor(() => {
			expect(getByTestId("addressFieldError")).toHaveTextContent("");
		});
	});
});

describe("SignUp Submit", () => {
	it("doesn't call the provided handleSubmit prop when form is not validated with appropiate feedback messages", async () => {
		const handleSubmit = jest.fn();
		const { getByTestId } = render(
			<PluggableSignupForm handleSubmit={handleSubmit} />
		);
		fireEvent.press(getByTestId("submitButton"));
		await waitFor(() => {
			expect(handleSubmit).toHaveBeenCalledTimes(0);

			expect(getByTestId("nameFieldError")).toHaveTextContent(
				"Name is required"
			);
			expect(getByTestId("emailFieldError")).toHaveTextContent(
				"Email is required"
			);
			expect(getByTestId("pinFieldError")).toHaveTextContent("Pin is required");
		});
	});
	it("calls the provided handleSubmit prop when all form inputs are validated", async () => {
		const handleSubmit = jest.fn();
		const { getByTestId } = render(
			<PluggableSignupForm handleSubmit={handleSubmit} />
		);
		fireEvent.changeText(getByTestId("nameField"), "John Doe");
		fireEvent.changeText(getByTestId("emailField"), "johndoe@gmail.com");
		fireEvent.changeText(getByTestId("pinField"), "4580");
		fireEvent.press(getByTestId("submitButton"));
		await waitFor(() => {
			expect(handleSubmit).toHaveBeenCalledTimes(1);

			expect(getByTestId("nameFieldError")).toHaveTextContent("");
			expect(getByTestId("emailFieldError")).toHaveTextContent("");
			expect(getByTestId("pinFieldError")).toHaveTextContent("");
		});
	});
});
