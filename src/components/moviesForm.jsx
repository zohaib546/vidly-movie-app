import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getGenres } from "./../services/fakeGenreService";
import { saveMovie, getMovie } from "./../services/fakeMovieService";

class MoviesForm extends Form {
	state = {
		details: {
			title: "",
			genreId: "",
			numberInStock: "",
			dailyRentalRate: "",
		},
		genres: [],
		errors: {},
	};

	componentDidMount() {
		const movieId = this.props.match.params.movieId;
		const movie = getMovie(movieId);

		if (movieId && !movie) return this.props.history.replace("/not-found");

		const genres = getGenres();
		this.setState({ genres });

		const details = { ...this.state.details };

		if (movieId) {
			details._id = movie._id;
			details.title = movie.title;
			details.genreId = movie.genre._id;
			details.numberInStock = movie.numberInStock;
			details.dailyRentalRate = movie.dailyRentalRate;

			this.setState({ details });
		}
	}

	schema = {
		_id: Joi.string(),
		title: Joi.string().required().label("Title"),
		genreId: Joi.string().required().label("Genre"),
		numberInStock: Joi.number().integer().required().min(0).max(100).label("Number In Stock"),
		dailyRentalRate: Joi.number().required().min(0).max(10).label("Daily Rental Rate"),
	};

	doSubmit = () => {
		const newMovie = this.fixKeyValues();
		saveMovie(newMovie);
		this.props.history.push("/movies");
	};

	fixKeyValues = () => {
		const details = { ...this.state.details };
		return {
			_id: details._id || "",
			title: details.title,
			genreId: details.genreId,
			numberInStock: details.numberInStock,
			dailyRentalRate: details.dailyRentalRate,
		};
	};

	render() {
		return (
			<div className="">
				<h1 className="mb-5">Movies Form {this.props.match.params.movieId}</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("title", "Title")}
					{this.renderSelect("genreId", "Genre", this.state.genres)}
					{this.renderInput("numberInStock", "Number In Stock")}
					{this.renderInput("dailyRentalRate", "Daily Rental Rate")}
					{this.renderButton("Save")}
				</form>
			</div>
		);
	}
}

export default MoviesForm;
