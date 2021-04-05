import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../faculty1.css';


class Faculty1 extends Component {
	state = {
		classes: ["CRNS 6IT1", "Adv Java 6IT", "CRNS 6IT2", "Java 4IT2", "Python 6IT2", "AWT 6IT1"],
	};
	render() {
		return (
			<>
				<div className="header">
					<h3 className="header" >
						Welcome Dr.Parth Shah !
					</h3>
					<nav aria-label="breadcrumb">
						<ul className="breadcrumb">
							<li>
								<span></span>
								<Link to="/general-pages/faculty-pages/add-class">
									<button className="button button2">
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
			<div className="grid-container">
				<Link
					to={{ pathname: setpath, data: props.className }}
					style={{ textDecoration: "none" }}
				>
					<div className="grid-item">
						<div class="cardnew">
							<div class="cardheadernew">{props.className}</div>
							<div class="cardbodynew">
								<h6 >
									Lorem ipsum dolor sit amet, magna aliqua.
							</h6>
							</div>
						</div>
					</div>
				</Link>

			</div>
		</>
	);
};
export default Faculty1;
