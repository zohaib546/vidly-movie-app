import React from "react";
import PropTypes from "prop-types";

const Like = ({ onLike, item }) => {
	return (
		<i
			onClick={() => onLike(item)}
			style={{ cursor: "pointer" }}
			className={item.liked === true ? "fa fa-thumbs-up" : "fa fa-thumbs-o-up"}
		></i>
	);
};

Like.propTypes = {
	item: PropTypes.object.isRequired,
	onLike: PropTypes.func.isRequired,
};

export default Like;
