import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					{" "}
					<img
						src="https://www.vippng.com/png/detail/1-13632_star-wars-logo-png-star-wars-logo-black.png"
						width="70"
						height="45"
						className="d-inline-block align-top"
						alt="React Bootstrap logo"
					/>
				</span>
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
