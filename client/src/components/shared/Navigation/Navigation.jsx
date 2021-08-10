import React from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "../../../pages/Home/Home";

import styles from "./Navigation.module.css";

function Navigation() {
	const brandStyle = {
		color: "#fff",
		textDecoration: "none",
		fontWeight: "bold",
		fontSize: "22px",
		display: "flex",
		alignItems: "center",
	};

	return (
		<>
			<nav className={`${styles.navbar} container`}>
				<Link style={brandStyle} to='/'>
					<img src='/images/logo.png' />
					<span>Awazdo</span>
				</Link>
			</nav>

			<BrowserRouter>
				<Switch>
					<Route path='/' exact>
						<Home />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}
export default Navigation;
