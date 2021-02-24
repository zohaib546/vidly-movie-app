import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
	state = {
		movies: [],
		genres: [],
		pageSize: 4,
		pageNo: 1,
		selectedGenre: "",
		sortColumn: {
			name: "title",
			order: "asc",
		},
		searchQuery: "",
	};

	componentDidMount() {
		const genres = [{ name: "All Genres" }, ...getGenres()];
		this.setState({ movies: getMovies(), genres });
	}

	handleDelete = (item) => {
		let movies = [...this.state.movies];
		movies = movies.filter((movie) => movie._id !== item._id);
		this.setState({ movies });
	};

	handleLike = (item) => {
		let movies = [...this.state.movies];
		const index = movies.indexOf(item);
		movies[index] = { ...item };
		movies[index].liked = !movies[index].liked;
		this.setState({ movies });
	};

	handlePagination = (pageNo) => {
		this.setState({ pageNo });
	};

	handleGenreSelect = (genre) => {
		this.setState({ selectedGenre: genre, pageNo: 1, searchQuery: "" });
	};

	handleSort = (column) => {
		this.setState({ sortColumn: column });
	};

	handleChange = ({ target }) => {
		this.setState({ searchQuery: target.value, selectedGenre: "", pageNo: 1 });
	};

	getData = () => {
		const { pageSize, pageNo, selectedGenre, sortColumn, searchQuery, movies: count } = this.state;

		// const filteredMovies =
		// 	selectedGenre === "" || selectedGenre === "All Genres"
		// 		? count
		// 		: count.filter((c) => c.genre.name === selectedGenre);

		// let filteredMovies = [];

		let filteredMovies = count;
		if (searchQuery)
			filteredMovies = count.filter((m) =>
				m.title.toLowerCase().includes(searchQuery.toLowerCase())
			);
		else if (selectedGenre !== "" && selectedGenre !== "All Genres")
			filteredMovies = count.filter((c) => c.genre.name === selectedGenre);

		const sortedMovies = _.orderBy(filteredMovies, [sortColumn.name], [sortColumn.order]);

		const movies = paginate(sortedMovies, pageSize, pageNo);

		return { totalCount: filteredMovies, data: movies };
	};

	render() {
		const { pageSize, pageNo, genres, selectedGenre, sortColumn } = this.state;
		const { length } = this.state.movies;

		const { totalCount, data } = this.getData();

		if (length === 0) return <p>There are no movies in the database</p>;

		return (
			<div className="container">
				<div className="row">
					<div className="col-3">
						<ListGroup
							list={genres}
							onItemSelect={this.handleGenreSelect}
							selectedGenre={selectedGenre}
						/>
					</div>
					<div className="col">
						<Link to="/new" className="btn btn-primary mb-3">
							New Movie
						</Link>

						<p>There are {totalCount.length} movies in the database</p>

						<input
							type="text"
							placeholder="Search..."
							className="form-control"
							value={this.state.searchQuery}
							onChange={this.handleChange}
						/>

						<MoviesTable
							movies={data}
							sortColumn={sortColumn}
							onSort={this.handleSort}
							onLike={this.handleLike}
							onDelete={this.handleDelete}
						/>

						<Pagination
							items={totalCount.length}
							pageNo={pageNo}
							pageSize={pageSize}
							onPaginate={this.handlePagination}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Movies;
