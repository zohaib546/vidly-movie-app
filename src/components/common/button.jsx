import React from "react";
import PropTypes from "prop-types";

const Button = ({ clickEvent, item, buttonType }) => {
	return (
		<button onClick={() => clickEvent(item)} className={`btn btn-${buttonType} btn-sm`}>
			Delete
		</button>
	);
};

Button.propTypes = {
	item: PropTypes.object.isRequired,
	clickEvent: PropTypes.func.isRequired,
	buttonType: PropTypes.string.isRequired,
};

Button.defaultProps = {
	buttonType: "success",
};

export default Button;
