import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';

function SubmissionComponent(props) {
    return (
        <div className="main-panel">
            <div className="container sm-12 pl-5">
                <h4 className="font-weight-light">You have not submitted any solutions</h4>
            </div>

            <div className="col-xl-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Submissions</h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th> # </th>
                        <th> Result </th>
                        <th> Score </th>
                        <th> Language </th>
                        <th> Date </th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 1 </td>
                        <td> Accepted </td>
                        <td>
                          <ProgressBar variant="success" now={100} />
                        </td>
                        <td> Python 3 </td>
                        <td> 10/03/2021 </td>
                        <td> <Link>View Results</Link> </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
                <nav aria-label="...">
                    <ul class="pagination">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li class="page-item active" aria-current="page">
                            <a class="page-link" href="#">1  <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
          </div>
        </div>
    )
}

export default SubmissionComponent;