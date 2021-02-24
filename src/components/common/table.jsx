import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ sortColumn, rows, columns, onSort }) => {
	return (
		<table className="table mb-3">
			<TableHeader onSort={onSort} sortColumn={sortColumn} columns={columns} />
			<TableBody rows={rows} columns={columns} />
		</table>
	);
};

export default Table;
