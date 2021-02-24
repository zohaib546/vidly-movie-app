import React from "react";
import { Link } from "react-router-dom";
import Like from "./common/like";
import Button from "./common/button";
import Table from "./common/table";

const MoviesTable = ({ movies, sortColumn, onSort, onLike, onDelete }) => {
	const columns = [
		{
			path: "title",
			label: "Title",
			content: (movie) => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>,
		},
		{ path: "genre.name", label: "Genre" },
		{ path: "numberInStock", label: "Stock" },
		{ path: "dailyRentalRate", label: "Rate" },
		{ key: "like", content: (movie) => <Like onLike={() => onLike(movie)} item={movie} /> },
		{
			key: "delete",
			content: (movie) => (
				<Button clickEvent={() => onDelete(movie)} item={movie} buttonType="danger" />
			),
		},
	];

	return <Table rows={movies} columns={columns} sortColumn={sortColumn} onSort={onSort} />;
};

export default MoviesTable;
