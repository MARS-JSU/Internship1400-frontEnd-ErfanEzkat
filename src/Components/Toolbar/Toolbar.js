import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Toolbar.module.css";
const Toolbar = () => {
	return (
		<header className={classes.header}>
			<nav className={classes.navbar}>
				<ul>
					<li>
						<NavLink activeClassName={classes.active}  to="/interested">interested </NavLink>
					</li>
					<li>

						<NavLink activeClassName={classes.active} exact  to="/"> our tours</NavLink>
					</li>
					<li>
						<NavLink  activeClassName={classes.active}  to="/not-interested"> not interested</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Toolbar;
