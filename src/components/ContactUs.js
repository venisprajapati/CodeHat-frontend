import React, { Component } from 'react'

class ContactUs extends Component {
    render() {
        return (
            <div>
                <div id="googlemaps" class="google-map mt-0" style="height: 500px;"></div>

                <div className="container">

                    <div className="row py-4">
                        <div className="col-lg-6">

                            <div className="overflow-hidden mb-1">
                                <h2 className="font-weight-normal text-7 mt-2 mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="200"><strong class="font-weight-extra-bold">Contact</strong> Us</h2>
                            </div>
                            <div className="overflow-hidden mb-4 pb-3">
                                <p className="mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="400">Feel free to ask for details, don't save any questions!</p>
                            </div>

                            <form className="contact-form" action="php/contact-form.php" method="POST">
                                <div className="contact-form-success alert alert-success d-none mt-4">
                                    <strong>Success!</strong> Your message has been sent to us.
                                </div>

                                <div className="contact-form-error alert alert-danger d-none mt-4">
                                    <strong>Error!</strong> There was an error sending your message.
                                    <span className="mail-error-message text-1 d-block"></span>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-lg-6">
                                        <label className="required font-weight-bold text-dark text-2">Full Name</label>
                                        {/* <input type="text" data-msg-required="Please enter your name." maxlength="100" className="form-control" name="name" required> */}
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <label className="required font-weight-bold text-dark text-2">Email Address</label>
                                        {/* <input type="email" value="" data-msg-required="Please enter your email address." data-msg-email="Please enter a valid email address." maxlength="100" class="form-control" name="email" required> */}
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col">
                                        <label className="font-weight-bold text-dark text-2">Subject</label>
                                        {/* <input type="text" value="" data-msg-required="Please enter the subject." maxlength="100" class="form-control" name="subject" required> */}
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col">
                                        <label className="required font-weight-bold text-dark text-2">Message</label>
                                        <textarea maxlength="5000" data-msg-required="Please enter your message." rows="8" class="form-control" name="message" required></textarea>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col">
                                        {/* <input type="submit" value="Send Message" className="btn btn-primary btn-modern" data-loading-text="Loading..."> */}
                                    </div>
                                </div>
                            </form>

                        </div>
                        <div className="col-lg-6">
                            <div className="appear-animation" data-appear-animation="fadeIn" data-appear-animation-delay="800">
                                <h4 className="mt-2 mb-1">Get in touch</h4>
                                <ul className="list list-icons list-icons-style-2 mt-2">
                                    <li><i className="fas fa-map-marker-alt top-6"></i> <strong class="text-dark">Address:</strong> Near Valetva Crossing, District Anand, Changa, Gujarat 388421</li>
                                    <li><i className="fas fa-phone top-6"></i> <strong class="text-dark">Phone:</strong> 02697-265169</li>
                                    <li><i className="fas fa-envelope top-6"></i> <strong class="text-dark">Email:</strong> <a href="mailto:mail@example.com"> pramodpatel.lib@charusat.ac.in</a></li>
                                </ul>
                            </div>

                            <div className="appear-animation" data-appear-animation="fadeIn" data-appear-animation-delay="950">
                                <h4 className="pt-5">Circulation timing</h4>
                                <ul className="list list-icons list-dark mt-2">
                                    <li><i className="far fa-clock top-6"></i> Monday - Friday - 9am to 5pm</li>
                                </ul>
                            </div>

                            <h4 className="pt-5">Ask A Librarian</h4>
                            <p className="lead mb-0 text-4">
                                <li><i className="fas fa-phone top-6"></i> <strong class="text-dark">Phone:</strong> 02697-265169</li>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs
