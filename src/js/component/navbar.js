import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<div className="btn-group btn-primary" role="group" aria-label="Button group with nested dropdown">
						<div className="btn-group btn-primary" role="group">
							<button
								id="btnGroupDrop1"
								type="button"
								className="btn btn-primary dropdown-toggle"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Favorites
								<span className="badge badge-secondary ml-1">4</span>
							</button>
							<div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
								<a name="txtanchor" className="dropdown-content" href="#">
									Dropdown link
								</a>
								<a name="txtanchor" className="dropdown-content" href="#">
									Dropdown link
								</a>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</nav>
	);
};
