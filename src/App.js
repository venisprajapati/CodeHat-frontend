import React, { Component } from "react";
import MainLogin from "./components/MainLogin";
import MainSignup from "./components/MainSignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Nav } from "reactstrap";
import HomePage from "./components/HomePage";
import ProblemDefinitionPage from "./components/ProblemDefinitionPage";
import AddNewProblem from "./components/AddNewProblem";
import Dashboard from "./components/Dashboard";
import Leaderboard from "./components/Leaderboard";
import Discussion from "./components/Discussion";
import Faculty from "./components/Faculty";
import ProblemList from "./components/ProblemList";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Nav>
						<Switch>
							<Route path="/" exact component={HomePage} />
							<Route
								path="/problemdefinition"
								exact
								component={ProblemDefinitionPage}
							/>
							<Route
								path="/addnewproblem"
								exact
								component={AddNewProblem}
							/>
							<Route path="/login" exact component={MainLogin} />
							<Route
								path="/signup"
								exact
								component={MainSignup}
							/>
							<Route
								path="/dashboard"
								exact
								component={Dashboard}
							/>
							<Route
								path="/leaderboard"
								exact
								component={Leaderboard}
							/>
							<Route
								path="/problemlist"
								exact
								component={ProblemList}
							/>
							<Route
								path="/discussion"
								exact
								component={Discussion}
							/>
							<Route path="/faculty1" exact component={Faculty} />
						</Switch>
					</Nav>
				</div>
			</Router>
		);
	}
}

export default App;
