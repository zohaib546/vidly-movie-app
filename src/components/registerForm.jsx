import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class Register extends Form {
	state = {
		details: {
			username: "",
			password: "",
			name: "",
		},
		errors: {},
	};

	schema = {
		username: Joi.string().email().required("Username"),
		password: Joi.string().min(5).required("Password"),
		name: Joi.string().required().label("Name"),
	};

	doSubmit = () => {
		console.log("registered");
	};

	render() {
		return (
			<React.Fragment>
				<h1 className="mb-5">Register Form</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("username", "Username", "email")}
					{this.renderInput("password", "Password", "password")}
					{this.renderInput("name", "Name")}
					{this.renderButton("register")}
				</form>
			</React.Fragment>
		);
	}
}

export default Register;
