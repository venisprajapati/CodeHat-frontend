import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Container, Row, Col, Form, Button, Carousel, Card } from 'react-bootstrap';
import '../styles1.css';
import one from '../images/one.jpg'
import two from '../images/two.jpg'
import three from '../images/three.jpg'

class MainPage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="trying">
                <Container>
                    <Row className='carousel'>
                        <Col className='col-md-12'>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        id="cimg"
                                        src={require('../images/4.jpg').default}
                                        alt="First slide"
                                        height="650" width="650"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Random Description Typed</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        id="cimg"
                                        src={require('../images/5.jpg').default}
                                        alt="Second slide"
                                        height="650" width="650"
                                    />

                                    <Carousel.Caption className='carouseleffect'>
                                        <h3>Second slide label</h3>
                                        <p>Description Random Typed</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        id="cimg"
                                        src={require('../images/6.jpg').default}
                                        alt="Third slide"
                                        height="650" width="650"
                                    />

                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Typed Random Description</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <br />
                    </Row>

                    <br />
                    <br />
                    <br />
                    <Row>
                        <Col className='col-md-4'>
                            {/* <div className="col-3"> */}
                                <Card style={{ width: '22rem' }}>
                                    <Card.Img
                                        variant="top"
                                        src={one}
                                        alt='Image'
                                        height="250 " width="250"
                                    />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            {/* </div> */}
                        </Col>
                        <Col className='col-md-4'>
                            {/* <div className="col-3"> */}
                                <Card style={{ width: '22rem' }}>
                                    <Card.Img
                                        variant="top"
                                        src={two}
                                        alt='Image'
                                        height="250 " width="250"
                                    />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the car d title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            {/* </div> */}
                        </Col>
                        <Col className='col-md-4'>
                            {/* <div className="col-3"> */}
                                <Card style={{ width: '22rem' }}>
                                    <Card.Img
                                        variant="top"
                                        src={three}
                                        alt='Image'
                                        height="250 " width="250"
                                    />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the car d title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            {/* </div> */}
                        </Col>
                    </Row>
                    <br />
                    <Form>
                        <Row className='formcolor'>
                            <Col className="col-md-4  mt-3">
                                <h2>Contact Us</h2>
                                <br />
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">

                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formSubject">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control placeholder="Enter subject" />
                                </Form.Group>
                                <Form.Group controlId="formDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control placeholder="Enter description" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Col>
                            <Col className="col-md-3 ml-5 mt-3">
                                <h2>Topics</h2>
                                <br />
                                <ul>
                                    <li>Problems</li>
                                    <li>Courses</li>
                                    <li>Languages</li>
                                    <li>Events</li>
                                    <li>Contribute</li>
                                    <li>Sponsors</li>
                                    <li>About Us</li>
                                </ul>
                            </Col>
                            <Col className="col-md-4  mt-5">
                                <img src={require('../images/3.jpg').default} />
                            </Col>
                        </Row>
                    </Form>
                </Container>
                
            </div>
        )
    }
}

export default MainPage
