import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-light bg-light mb-5">
			<Link className="navbar-brand" to="/movies">
				Vidly
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<NavLink className="nav-link " to="/movies">
						Movies
					</NavLink>
					<NavLink className="nav-link" to="/customers">
						Customers
					</NavLink>
					<NavLink className="nav-link" to="/rentals">
						Rentals
					</NavLink>
					<NavLink className="nav-link" to="/login">
						Login
					</NavLink>
					<NavLink className="nav-link" to="/register">
						Register
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
