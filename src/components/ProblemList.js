import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import ProblemService from "../components/services/ProblemService";

export class ProblemList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			problems: [],
			bookmarkIcon: "mdi mdi-bookmark-outline",
			taskCompleted: false,
			filters: [
				{
					heading: "Status",
					lists: [
						{ title: "Done", isChecked: false },
						{ title: "Pending", isChecked: false },
					],
				},
				{
					heading: "Difficulty",
					lists: [
						{ title: "Easy", isChecked: false },
						{ title: "Medium", isChecked: false },
						{ title: "Hard", isChecked: false },
					],
				},
				{
					heading: "Domain",
					lists: [
						{ title: "Array", isChecked: false },
						{ title: "Linked List", isChecked: false },
						{ title: "Tree", isChecked: false },
						{ title: "Graph", isChecked: false },
						{ title: "Greedy", isChecked: false },
						{ title: "DP", isChecked: false },
					],
				},
			],
		};
	}
	componentDidMount() {
		ProblemService.getProblem().then((response) => {
            this.setState({
                problems: response.data
            });
		});
	}

	changeBookmark = () => {
		if (this.state.bookmarkIcon === "mdi mdi-bookmark")
			this.setState({ bookmarkIcon: "mdi mdi-bookmark-outline" });
		else this.setState({ bookmarkIcon: "mdi mdi-bookmark" });
	};

	render() {
		return (
			<div className="main-panel">
				<div className="row">
					<div className="col-lg-10">
						<div className="col-lg-12 search-field d-none d-md-block">
							<form
								className="d-flex align-items-center h-100"
								action="#"
							>
								<div className="input-group">
									<i className="input-group-text border-0 mdi mdi-magnify"></i>

									<input
										type="text"
										className="form-control text-white bg-dark border-0"
										placeholder="Search problem"
									/>
								</div>
							</form>
						</div>
					</div>
					<div className="col-lg-2 grid-margin strech-card">
						<Dropdown>
							<Dropdown.Toggle
								variant="btn btn-primary btn-sm"
								id="dropdownMenuSizeButton3"
							>
								Order by
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Header>A-Z</Dropdown.Header>
								<Dropdown.Item>Z-A</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</div>
				<div className="row">
                    <div className="col-lg-8 grid-margin strech-card">
                        
						{/* Problem def. */}
                        {
                            this.state.problems.map((problem) => (
                                      
                                // <div>
                                //     <p key={problem.id}>{ problem.id }</p>
                                // </div>

                                <div className="row">
                                    <div className="col-sm-12 grid-margin stretch-card">
                                        <div class="card text-white bg-dark mb-3">
                                            <div class="card-header" key={problem.title}>
                                                {problem.title}
                                                <label
                                                    className="badge badge-primary"
                                                    style={{ float: "right" }}
                                                >
                                                    <i className="mdi mdi-star" />
                                                    <i className="mdi mdi-star" />
                                                    <i className="mdi mdi-star" />
                                                    <i className="mdi mdi-star-outline" />
                                                    <i className="mdi mdi-star-outline" />
                                                </label>
                                            </div>
                                            <div class="card-body">
                                                <div className="row">
                                                    <span class="col card-text">
                                                        <ul className="list-inline">
                                                            <li>
                                                                <i className="mdi mdi-bullseye"></i>{problem.difficulty}
                                                            </li>
                                                            <li>
                                                                <i className=" mdi mdi-account-box-outline"></i>
                                                                {problem.author.firstName}
                                                            </li>
                                                            <li></li>
                                                            <li>Topics-list</li>
                                                        </ul>
                                                    </span>
                                                    <button
                                                        style={{ float: "right", height: "32px" }}
                                                        className="col-lg-4 btn btn-danger btn-sm"
                                                    >
                                                        Solve Challenge
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
					</div>

					{/* filters */}
					<div className="col-lg-4 grid-margin stretch-card">
						<div className="card">
							<div className="card-body">
								{this.state.filters.map((filter, index) => {
									return (
										<div style={{ position: "sticky" }}>
											<ListItems
												heading={filter.heading}
												list={filter.lists}
												listIndex={index}
											/>
											{index ===
											this.state.filters.length -
												1 ? null : (
												<hr />
											)}
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const ListItems = (props) => {
	return (
		<>
			<h4 className="card-title">{props.heading}</h4>
			<ul className="list-inline">
				{props.list.map((item, index) => {
					return (
						<li>
							<div className="form-check">
								<label className="form-check-label">
									<input
										type="checkbox"
										checked={item.isChecked}
										onChange={() => {}}
										className="form-check-input"
									/>
									<i className="input-helper"></i>
									{item.title}
								</label>
							</div>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default ProblemList;
