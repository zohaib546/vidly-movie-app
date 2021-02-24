import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";

class Form extends Component {
	state = {
		details: {},
		errors: {},
	};

	renderInput = (name, label, type = "text") => {
		const { details, errors } = this.state;
		return (
			<Input
				name={name}
				type={type}
				label={label}
				value={details[name]}
				error={errors[name]}
				onChange={this.handleChange}
			/>
		);
	};

	validateOnSubmit = () => {
		const details = { ...this.state.details };
		const errors = { ...this.state.errors };
		const options = { abortEarly: false };
		const { error } = Joi.validate(details, this.schema, options);
		if (!error) return null;

		for (const item of error.details) {
			errors[item.path[0]] = item.message;
		}

		return !error ? null : errors;
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const errors = this.validateOnSubmit();

		if (errors) {
			this.setState({ errors });
			return;
		}

		this.doSubmit();
	};

	validateInput = (input) => {
		const { name, value } = input;
		const target = { [name]: value };
		const schema = { [name]: this.schema[name] };

		const { error } = Joi.validate(target, schema);
		return error !== null ? error.details[0].message : null;
	};

	handleChange = (e) => {
		const errors = { ...this.state.errors };
		const details = { ...this.state.details };
		const input = e.target;

		const errorMessage = this.validateInput(input);
		errors[input.name] = errorMessage;
		this.setState({ errors });

		details[input.name] = input.value;
		this.setState({ details });
	};

	renderButton = (value) => {
		return (
			<button className="btn btn-primary" disabled={this.validateOnSubmit()}>
				{value}
			</button>
		);
	};

	renderSelect = (name, label, options) => {
		const { details, errors } = this.state;
		return (
			<Select
				name={name}
				label={label}
				options={options}
				value={details[name]}
				error={errors[name]}
				onChange={this.handleChange}
			/>
		);
	};
}

export default Form;
