import React from "react";
import _ from "lodash";

const TableBody = ({ rows, columns }) => {
	const renderCell = (row, column) => {
		if (column.content) return column.content(row);

		// if (column.path.includes(".")) {
		// 	let splitter = column.path.split(".");

		// 	return row[splitter[0]][splitter[1]];
		// }

		// return row[column.path];

		return _.get(row, column.path);
	};

	const generateKey = (row, column) => {
		return row._id + (column.path || column.key);
	};

	return (
		<tbody>
			{rows.map((row) => (
				<tr key={row._id}>
					{columns.map((column) => (
						<td key={generateKey(row, column)}>{renderCell(row, column)}</td>
					))}
				</tr>
			))}
		</tbody>
	);
};

export default TableBody;
