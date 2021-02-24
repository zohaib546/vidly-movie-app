import React from "react";
import PropTypes from "prop-types";

const ListGroup = ({ list, onItemSelect, idProperty, nameProperty, selectedGenre }) => {
	const renderClass = (item) => {
		return selectedGenre !== item[nameProperty] ? "list-group-item" : "list-group-item active";
	};

	return (
		<ul className="list-group">
			{list.map((item) => (
				<li
					key={item[idProperty] || item[nameProperty]}
					onClick={() => onItemSelect(item[nameProperty])}
					className={renderClass(item)}
				>
					{item[nameProperty]}
				</li>
			))}
		</ul>
	);
};

ListGroup.propTypes = {
	list: PropTypes.array.isRequired,
	onItemSelect: PropTypes.func.isRequired,
	selectedGenre: PropTypes.string.isRequired,
};

ListGroup.defaultProps = {
	idProperty: "_id",
	nameProperty: "name",
};

export default ListGroup;
