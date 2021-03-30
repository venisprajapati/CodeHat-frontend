import React, { Component, useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Footer from "./Footer";

const Navigation = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	const navbarstyle = {
		fontSize: "30px",
		width: "210vh",
	};

	return (
		<div>
			<Navbar
				style={navbarstyle}
				collapseOnSelect
				expand="lg"
				bg="dark"
				variant="dark"
			>
				<Navbar.Brand href="/">Charusat CodeHat</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#features">Features</Nav.Link>
						<NavDropdown
							title="Dropdown"
							id="collasible-nav-dropdown"
						>
							<NavDropdown.Item href="#action/3.1">
								Action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">
								Something
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Separated 
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="/addnewproblem"> Add New Problem </Nav.Link>
						<Nav.Link href="/problemdefinition"> Problem Definition </Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="/login"> Login </Nav.Link>
						<Nav.Link eventKey={2} href="/signup"> Sign Up </Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

class HomePage extends Component {
	render() {
		return (
			<div>
				<Navigation></Navigation>
				<Footer></Footer>
			</div>
		);
	}
}

export default HomePage;
