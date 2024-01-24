import React from 'react'
import { Image } from 'react-bootstrap'

export default function Footer() {
    return (
        <>
            <section className="footer py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div>
                                <Image src="images/logo.png" alt="Logo" />
                            </div>
                            <div>
                                <p>
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                    there live the blind texts.
                                </p>
                            </div>
                            <div className="d-flex gap-5 award-logo">
                                <Image src="images/award-1.png" alt="" width="140px" height="90px" />
                                <Image src="images/award-2.png" alt="" width="100px" height="90px" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h3 className="px-4">
                                TOP DESTINATIONS
                            </h3>
                            <div className="footer-images">
                                <div className="imagess">
                                    <div className="cover d-flex align-items-center justify-content-center">
                                        <h6>Africa</h6>
                                    </div>
                                </div>
                                <div className="imagess">
                                    <div className="cover d-flex align-items-center justify-content-center">
                                        <h6>Africa</h6>
                                    </div>
                                </div>
                                <div className="imagess">
                                    <div className="cover d-flex align-items-center justify-content-center">
                                        <h6>Africa</h6>
                                    </div>
                                </div>
                                <div className="imagess">
                                    <div className="cover d-flex align-items-center justify-content-center">
                                        <h6>Africa</h6>
                                    </div>
                                </div>
                                <div className="imagess">
                                    <div className="cover d-flex align-items-center justify-content-center">
                                        <h6>Africa</h6>
                                    </div>
                                </div>
                                <div className="imagess">
                                    <div className="cover d-flex align-items-center justify-content-center">
                                        <h6>Africa</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 contact-us">
                            <h3>
                                CONTACT INFO
                            </h3>
                            <p>Address : 12 Main Street Pt. London</p>
                            <p>Phone : +44 3656 4567</p>
                            <p>contact@traveltourtheme.com</p>
                            <div className="social pt-3">
                                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
                                <a href="#"><i className="fa-brands fa-vimeo-v"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="copyright">
                <p className="pt-3">COPYRIGHT 2023 GOODLAYERS, ALL RIGHT RESERVED</p>

            </section>
        </>
    )
}
