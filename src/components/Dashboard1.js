import React, { Component } from 'react';
import { Container, Col, Row, Card, ListGroup, ListGroupItem, ProgressBar } from 'react-bootstrap';
import dp from '../images/dp.jpg';
import course1 from '../images/course1.jpg';
import course2 from '../images/course2.jpg';
import course3 from '../images/course3.jpg';
import course4 from '../images/course4.jpg';

class Dashboard1 extends Component {
  render() {

    const courseimg = {
      height: '275px',
      width: '100px',
      // paddingBottom: '20px',
    }

    const toppadding = {
      paddingTop: '20px',
    }

    const coursestyle = {      
      paddingLeft: '40px',
      paddingTop: '20px',
      width: '1150px',
    }

    const backgroundcolor = {
      background: 'rgb(231, 205, 240)',
    }

    return (
      <div class="main-panel">
        <Container fluid>
          <Row style={backgroundcolor}>
            <Col sm={3} style={toppadding}>
              <Card>

                <Card.Body>
                  <Card.Img
                    src={dp}
                    roundedCircle
                  />
                  <Card.Title>Rohit Sharma</Card.Title>
                  <Card.Text>
                    I am currently in my third year of Bachelors in Information and Technology.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Rank</ListGroupItem>
                  <ListGroupItem>Score</ListGroupItem>
                  <ListGroupItem>Problems solved</ListGroupItem>
                </ListGroup>
                <Card.Body style={{ alignContent: "center" }}>
                  <Card.Link href="#">Link</Card.Link>
                  <Card.Link href="#">Link</Card.Link>
                  <Card.Link href="#">Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={9} style={coursestyle}>
              <div className="col-lg-32 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Enrolled Courses </h4>
                    <div className="row">

                      <div className="col-md-3 stretch-card grid-margin" style={courseimg}>

                        <div className="card bg-gradient-danger card-img-holder text-white">

                          <div className="card-body">

                            {/* <img src={require("../../assets/images/dashboard/circle.svg")}  alt="circle" /> */}
                            <Card.Img
                              className="card-img-absolute"
                              src={course1}
                              alt='course1'
                            />
                            <h4 className="font-weight-normal mb-3">Java <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                            </h4>
                            <h2 className="mb-5">Rank</h2>
                            <h6 className="card-text">Problems solved</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 stretch-card grid-margin" style={courseimg}>
                        <div className="card bg-gradient-info card-img-holder text-white">
                          <div className="card-body">
                            {/* <img src={require("../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" /> */}
                            <Card.Img
                              className="card-img-absolute"
                              src={course2}
                              alt='course2'
                            />
                            <h4 className="font-weight-normal mb-3">Python  <i className="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                            </h4>
                            <h2 className="mb-5">Rank</h2>
                            <h6 className="card-text">Problems Solved</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 stretch-card grid-margin" style={courseimg}>
                        <div className="card bg-gradient-success card-img-holder text-white">
                          <div className="card-body">
                            {/* <img src={require("../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" /> */}
                            <Card.Img
                              className="card-img-absolute"
                              src={course3}
                              alt='course3'
                            />
                            <h4 className="font-weight-normal mb-3">DSA<i className="mdi mdi-diamond mdi-24px float-right"></i>
                            </h4>
                            <h2 className="mb-5">Rank</h2>
                            <h6 className="card-text">Problems Solved</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 stretch-card grid-margin" style={courseimg}>
                        <div className="card bg-gradient-info card-img-holder text-white">
                          <div className="card-body">
                            {/* <img src={require("../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" /> */}
                            <Card.Img
                              className="card-img-absolute"
                              src={course4}
                              alt='course4'
                            />
                            <h4 className="font-weight-normal mb-3">Python  <i className="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                            </h4>
                            <h2 className="mb-5">Rank</h2>
                            <h6 className="card-text">Problems Solved</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-32 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Recently Solved Problems</h4>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>Problem Code</th>
                            <th>Problem Name</th>
                            <th>Language</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>P01</td>
                            <td>Reverse array</td>
                            <td className="text-success"> Java </td>
                            <td><label className="badge badge-danger">Wrong Answer</label></td>
                          </tr>
                          <tr>
                            <td>P06</td>
                            <td>Sort an array</td>
                            <td className="text-success"> Java </td>
                            <td><label className="badge badge-warning">Time Limit Exceeded</label></td>
                          </tr>
                          <tr>
                            <td>P12</td>
                            <td>Matrix Multiplication</td>
                            <td className="text-success"> C++</td>
                            <td><label className="badge badge-info">Partially Correct</label></td>
                          </tr>
                          <tr>
                            <td>P07</td>
                            <td>Prime Numbers</td>
                            <td className="text-success"> C++ </td>
                            <td><label className="badge badge-success">Correct Answer</label></td>
                          </tr>
                          <tr>
                            <td>P04</td>
                            <td>Pascal Triangle</td>
                            <td className="text-success"> Python </td>
                            <td><label className="badge badge-warning">Time Limit Exceeded</label></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-32 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Assignments Due</h4>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>Course</th>
                            <th>Faculty name</th>
                            <th>Assignment </th>
                            <th>Due on</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Java Programming</td>
                            <td>Dr. Parth Shah</td>
                            <td className="text-success"> Practical 3 </td>
                            <td><label className="badge badge-danger">09/03/21,11:59PM</label></td>
                          </tr>
                          <tr>
                            <td>Java Programming</td>
                            <td>Dr. Parth Shah</td>
                            <td className="text-success"> Practical 3 </td>
                            <td><label className="badge badge-danger">09/03/21,11:59PM</label></td>
                          </tr>
                          <tr>
                            <td>Java Programming</td>
                            <td>Dr. Parth Shah</td>
                            <td className="text-success"> Practical 3 </td>
                            <td><label className="badge badge-danger">09/03/21,11:59PM</label></td>
                          </tr>
                          <tr>
                            <td>Java Programming</td>
                            <td>Dr. Parth Shah</td>
                            <td className="text-success"> Practical 3 </td>
                            <td><label className="badge badge-danger">09/03/21,11:59PM</label></td>
                          </tr>
                          <tr>
                            <td>Java Programming</td>
                            <td>Dr. Parth Shah</td>
                            <td className="text-success"> Practical 3 </td>
                            <td><label className="badge badge-danger">09/03/21,11:59PM</label></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

          </Row>

        </Container>
      </div>
    )
  };
}

export default Dashboard1;