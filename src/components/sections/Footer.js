import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../../App.css'

class Footer extends Component {
    render() {
        return (

            <footer id="footer">

                <div className="footer-top">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 footer-contact"><br />
                                <img src="assets/img/final_logo_PNG.png" height="70px" alt="LOGO" />
                                <br /><br /><br />
                                <p>A sister concern co.</p>
                                <img src="assets/img/ctppl_logo.png" height="70px" alt="LOGO" />


                            </div>
                            

                            {/* <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="bx bx-chevron-right"></i> <Link to="/">Home</Link></li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="bx bx-chevron-right"></i> <Link to="/AboutUs">About us</Link></li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="bx bx-chevron-right"></i> <Link to="/OurServices">Our Services</Link></li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="bx bx-chevron-right"></i> <Link to="/OurClientele">Our Clientele</Link></li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="bx bx-chevron-right"></i> <Link to="/Projects">Projects</Link></li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="bx bx-chevron-right"></i> <Link to="/ContactUs:0">Contact Us</Link></li>
                                </ul>
                            </div> */}
                            <div className="col-lg-4 col-md-6 footer-links">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d945.9932107651395!2d73.79774302922746!3d18.484889271127987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf6b2a100dd7%3A0x4b6ab53a6d78e7da!2sPatankar&#39;s%20Creative%20Turnkey%20Projects%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1617253516145!5m2!1sen!2sin" title="PCTPPL" width="350" height="300" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-contact">
                                <h2>PCTPPL</h2>
                                <p><a href="https://g.page/PCTPPL?share" target="_blank" rel="noreferrer">
                                    spandan office no.8,<br />above state bank of india,<br /> opp. mai mangeshkar hospital,<br />Mumbai Bengluru bypass,<br />411 058, Warje, Pune, Maharashtra 411058
                                    </a><br /><br />
                                    <strong>Phone:</strong> +91 9767726744<br />
                                    <strong>Email:</strong> prakash@patankarscreative.com<br />
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container d-md-flex py-4">

                    <div className="mr-md-auto text-center text-md-left">
                        <div className="copyright">
                            &copy; Copyright <strong><span>PCTPPL</span></strong>. All Rights Reserved
                        </div>
                        <div className="credits">
                            Made with ❤ by <a href="https://github.com/prajwalpatankar"><strong><span>PCTPPL </span></strong>Web Team. <br /></a>
                        </div>

                    </div>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        {/* <Link to="/" className="twitter"><i className="bx bxl-twitter"></i></Link>
                        <Link to="/" className="facebook"><i className="bx bxl-facebook"></i></Link> */}
                        <a href="https://www.instagram.com/patankars_creative_turnkey/"  target="_blank" rel="noreferrer" className="instagram"><i className="bx bxl-instagram"></i></a>
                        {/* <Link to="/" className="google-plus"><i className="bx bxl-skype"></i></Link> */}
                        {/* <Link to="/" className="linkedin"><i className="bx bxl-linkedin"></i></Link> */}
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;