import React from "react";
import PropTypes from "prop-types";

const Input = ({ name, label, error, ...rest }) => {
	return (
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<input {...rest} className="form-control" name={name} id={name} autoComplete="off" />
			{error && <div className="alert alert-warning">{error}</div>}
		</div>
	);
};

Input.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.any.isRequired,
	onChange: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired,
	error: PropTypes.string,
};

Input.defaultProps = {
	type: "text",
};

export default Input;
