import React from "react";
import PropTypes from "prop-types";

const Select = ({ name, label, error, options, ...rest }) => {
	return (
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<select className="form-control" id={name} name={name} {...rest}>
				<option value=""></option>
				{options.map((item) => (
					<option key={item._id} value={item._id}>
						{item.name}
					</option>
				))}
			</select>
			{error && <div className="alert alert-warning">{error}</div>}
		</div>
	);
};

Select.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	options: PropTypes.array.isRequired,
	error: PropTypes.string,
};

export default Select;
