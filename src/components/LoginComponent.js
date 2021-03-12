import React, { Component } from "react";
import {
	Container,
	Col,
	Form,
	FormGroup,
	Input,
	Button,
	Row,
	Jumbotron,
} from "reactstrap";
import { Link } from "react-router-dom";

class Login extends Component {
	constructor() {
		super();
		this.state = {
			input: {},
			errors: {},
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		let input = this.state.input;
		input[event.target.name] = event.target.value;
		this.setState({
			input,
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		if (this.validate()) {
			console.log(this.state);

			let input = {};
			input["email"] = "";
			this.setState({ input: input });
			alert("Logged In successfully...");
		}
	}

	validate() {
		let input = this.state.input;
		let errors = {};
		let isValid = true;
		var studentEmail = new RegExp("@charusat.edu.in");
		var facultyEmail = new RegExp("@charusat.ac.in");

		if (
			!studentEmail.test(input["email"]) &&
			!facultyEmail.test(input["email"])
		) {
			isValid = false;
			errors["email"] = "Please enter Charusat email.";
		}

		if (!input["email"]) {
			isValid = false;
			errors["email"] = "Please enter your email Address.";
		}

		if (typeof input["email"] !== "undefined") {
			var pattern = new RegExp(
				/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
			);
			if (!pattern.test(input["email"])) {
				isValid = false;
				errors["email"] = "Please enter valid email address.";
			}
		}

		this.setState({
			errors: errors,
		});
		return isValid;
	}

	render() {
		const jumbotronStyle = {
			backgroundColor: "white",
			borderRadius: "50px",
			marginTop: "100px",
			marginBottom: "80px",
			maxWidth: "475px",
		};

		const head1Style = {
			fontWeight: "bold",
			alignSelf: "center",
			backgroundColor: "#EBEBEB",
			borderRadius: "50px",
			width: "20vh",
			height: "60px",
			maxWidth: "200px",
			maxHeight: "150px",
			marginBottom: "20px",
		};

		const head4Style = {
			fontWeight: "bold",
			textAlign: "left",
			margin: "auto",
		};

		const inputStyle = {
			backgroundColor: "#EBEBEB",
			borderRadius: "50px",
			margin: "15px 0px",
			fontSize: "24px",
			maxWidth: "400px",
		};

		const buttonStyle = {
			fontWeight: "bold",
			backgroundColor: "indigo",
			borderRadius: "50px",
			width: "125px",
			marginTop: "40px",
			marginBottom: "25px",
		};

		return (
			<Container>
				<Row>
					<Col>
						<center>
							<Jumbotron
								className="jumbotron"
								style={jumbotronStyle}
							>
								<center>
									<h1 style={head1Style}>Login</h1>
								</center>
								<Form
									onSubmit={this.handleSubmit}
									className="form"
								>
									<Col>
										<FormGroup>
											<h4 style={head4Style}>Email</h4>
											<div align="left">
												<Input
													type="email"
													name="email"
													id="exampleEmail"
													value={
														this.state.input.email
													}
													onChange={this.handleChange}
													style={inputStyle}
												/>
												<div className="error-1">
													{this.state.errors.email}
												</div>
											</div>
										</FormGroup>
									</Col>
									<br />
									<Col>
										<FormGroup>
											<h4 style={head4Style}>Password</h4>
											<div align="left">
												<Input
													type="password"
													name="password"
													id="examplePassword"
													style={inputStyle}
												/>
											</div>
										</FormGroup>
									</Col>
									<Button type="submit" style={buttonStyle}>
										<h2>Get In</h2>
									</Button>
								</Form>
								<h2>Sign in With: </h2>
							</Jumbotron>
							<h2
								style={{
									color: "white",
									marginBottom: "100px",
								}}
							>
								New Member ? <Link to="/signup">Sign Up</Link>
							</h2>
						</center>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Login;
