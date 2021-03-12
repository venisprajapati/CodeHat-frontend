import React, { Component } from "react";
import MainLogin from "./components/MainLogin";
import MainSignup from "./components/MainSignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Nav } from "reactstrap";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Nav>
						<Switch>
							<Route path="/" exact />
							<Route path="/login" exact component={MainLogin} />
							<Route path="/signup" exact component={MainSignup} />
						</Switch>
					</Nav>
				</div>
			</Router>
		);
	}
}

export default App;
