import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({ items, pageSize, onPaginate, pageNo }) => {
	const nums = Math.ceil(items / pageSize);
	const pagiLength = _.range(1, nums + 1);

	if (nums <= 1) return null;

	return (
		<div className="">
			<ul className="pagination">
				{pagiLength.map((num) => (
					<li key={num} className={pageNo === num ? "page-item active" : "page-item"}>
						<a onClick={() => onPaginate(num)} className="page-link">
							{num}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

Pagination.propTypes = {
	items: PropTypes.number.isRequired,
	pageSize: PropTypes.number.isRequired,
	pageNo: PropTypes.number.isRequired,
	onPaginate: PropTypes.func.isRequired,
};

export default Pagination;
