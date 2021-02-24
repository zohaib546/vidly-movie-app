import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import Navbar from "./components/navBar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import Notfound from "./components/not-found";
import MoviesForm from "./components/moviesForm";
import Login from "./components/loginForm";
import Register from "./components/registerForm";

const App = () => {
	return (
		<React.Fragment>
			<Navbar />
			<section className="container">
				<Switch>
					<Route path="https://zohaib546.github.io/new" component={MoviesForm} />
					<Route path="https://zohaib546.github.io/login" component={Login} />
					<Route path="https://zohaib546.github.io/register" component={Register} />
					<Route path="https://zohaib546.github.io/movies/:movieId" component={MoviesForm} />
					<Route path="https://zohaib546.github.io/movies" component={Movies} />
					<Route path="https://zohaib546.github.io/customers" component={Customers} />
					<Route path="https://zohaib546.github.io/rentals" component={Rentals} />
					<Route path="https://zohaib546.github.io/not-found" component={Notfound} />
					<Redirect from="https://zohaib546.github.io/" exact to="/movies" />
					<Redirect to="https://zohaib546.github.io/not-found" />
				</Switch>
			</section>
		</React.Fragment>
	);
};

export default App;
