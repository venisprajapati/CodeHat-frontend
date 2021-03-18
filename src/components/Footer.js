import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
	render() {
		const footerStyle = {
			alignItems: "center",
			backgroundColor: "#F2F2F2",
			borderTop: "1px solid #E7E7E7",
			textAlign: "center",
			padding: "20px",
			position: "fixed",
			marginBottom: "0px",
			height: "100px",
		};

		return (
			<center>
			<div>
				
				<footer className="footer fixed-bottom justify-content-center" style={footerStyle}>
					<div className="navbar-menu-wrapper d-flex align-items-stretch">
						<ul>
							<li className="nav-item nav-logout d-none d-lg-block">
								<span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
									Copyright ©
									<a
										href="https://www.charusat.ac.in/cspit/it/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Charotar University
									</a>
									2021
								</span>
							</li>
							<li className="nav-item nav-logout d-none d-lg-block">
								<Link className="navbar-brand " to="/">
									Home
								</Link>
								<Link className="navbar-brand " to="/">
									Scoring System
								</Link>
								<Link className="navbar-brand " to="/">
									About us
								</Link>
								<Link className="navbar-brand " to="/">
									Contact us
								</Link>
							</li>
						</ul>
					</div>
					</footer>
					
			</div>
			</center>
		);
	}
}

export default Footer;
