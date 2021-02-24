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
					<Route path="/" exact component={Movies} />
					<Route path="/new" component={MoviesForm} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
					<Route path="/movies/:movieId" component={MoviesForm} />
					<Route path="/movies" component={Movies} />
					<Route path="/customers" component={Customers} />
					<Route path="/rentals" component={Rentals} />
					<Route path="/not-found" component={Notfound} />
					{/* <Redirect from="/" exact to="/movies" />
					<Redirect to="/not-found" /> */}
				</Switch>
			</section>
		</React.Fragment>
	);
};

export default App;
