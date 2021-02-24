import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class Login extends Form {
	state = {
		details: {
			username: "",
			password: "",
		},
		errors: {},
	};

	schema = {
		username: Joi.string().required().label("Username"),
		password: Joi.string().required().label("Password"),
	};

	doSubmit = () => {
		console.log("submitted");
	};

	render() {
		return (
			<React.Fragment>
				<h1 className="mb-5">Login</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("username", "Username")}
					{this.renderInput("password", "Password", "password")}
					{this.renderButton("submit")}
				</form>
			</React.Fragment>
		);
	}
}

export default Login;
