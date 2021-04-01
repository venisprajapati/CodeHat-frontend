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
import Faculty from "./components/Faculty";
import ProblemList from "./components/ProblemList";
import MainProblemPage from "./components/MainProblemPage";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Nav>
						<Switch>
							<Route path="/" exact component={HomePage} />
							<Route
								path="/problemdepage"
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
								path="/problempage"
								exact
								component={MainProblemPage}
							/>
							<Route path="/faculty" exact component={Faculty} />
						</Switch>
					</Nav>
				</div>
			</Router>
		);
	}
}

export default App;
