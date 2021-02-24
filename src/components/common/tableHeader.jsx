import React from "react";

const TableHeader = ({ columns, onSort, sortColumn }) => {
	const renderClasses = (column) => {
		if (sortColumn.name === column && sortColumn.order === "asc") return "fa fa-sort-asc";
		if (sortColumn.name === column && sortColumn.order === "desc") return "fa fa-sort-desc";
	};

	const raiseSort = (path) => {
		if (!path) return null;

		const column = { ...sortColumn };
		if (column.name === path) {
			column.order = column.order === "asc" ? "desc" : "asc";
		}

		if (column.name !== path) {
			column.name = path;
			column.order = "asc";
		}

		onSort(column);
	};

	return (
		<thead>
			<tr>
				{columns.map((column) => (
					<th
						style={{ cursor: "pointer" }}
						key={column.label || column.key}
						onClick={() => raiseSort(column.path)}
					>
						{column.label} <i className={renderClasses(column.path)}></i>
					</th>
				))}
			</tr>
		</thead>
	);
};

export default TableHeader;
