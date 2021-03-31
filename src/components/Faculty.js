import React, { Component } from "react";
import { Link } from "react-router-dom";

class Faculty extends Component {
	state = {
		classes: ["CRNS 6IT1", "Adv Java 6IT", "CRNS 6IT2", "Java 4IT2"],
	};
	render() {
		return (
			<>
				<div className="page-header">
					<h3 className="page-title">
						<span className="page-title-icon bg-gradient-primary text-white mr-2">
							<i className="mdi mdi-account-box"></i>
						</span>{" "}
						Parth Shah{" "}
					</h3>
					<nav aria-label="breadcrumb">
						<ul className="breadcrumb">
							<li
								className="breadcrumb-item active"
								aria-current="page"
							>
								<span></span>
								<Link to="/general-pages/faculty-pages/add-class">
									<button className="btn btn-primary btn-sm">
										Add Class
									</button>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
				<div className="row">
					{this.state.classes.map((title, index) => {
						return <ClassCard className={title} />;
					})}
				</div>
			</>
		);
	}
}
const ClassCard = (props) => {
	const setpath = "/general-pages/faculty-pages/subject/" + props.className;
	return (
		<>
			<div className="col-3">
				<Link
					to={{ pathname: setpath, data: props.className }}
					style={{ textDecoration: "none" }}
				>
					<div class="card text-white bg-info mb-3">
						<div class="card-header">{props.className}</div>
						<div class="card-body">
							<h6 class="card-title text-white">
								Lorem ipsum dolor sit amet, magna aliqua.
							</h6>
						</div>
					</div>
				</Link>
			</div>
		</>
	);
};
export default Faculty;
