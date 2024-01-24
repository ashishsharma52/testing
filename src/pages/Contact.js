import React from 'react'

export default function Contact() {
    return (
        <>
            <section className='contact-banner'>
                <div className="container">
                    <div className="row">
                        <h1>CONTACT US</h1>
                        <p>Get Intouch</p>
                    </div>
                </div>
            </section>
            <section className='main-contact-section py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2>
                                Leave us your info
                            </h2>
                            <div className="divider-2">
                                <span></span>
                            </div>
                            <form action="post" className='mt-4 contact-form'>
                                <input type="text" placeholder='Full Name*' />
                                <input type="e-mail" placeholder='E-Mail*' />
                                <input type="text" placeholder='Subject*' />
                                <input type="text" placeholder='Message*' />
                                <button>SUBMIT NOW</button>
                            </form>
                        </div>
                        <div className="col-lg-4 contactSideBar">
                            <div>
                                <h3>
                                    Location
                                </h3>
                                <div className="divider-2">
                                    <span></span>
                                </div>
                                <p>4 apt. Flawing Street. The Grand
                                    <span>Avenue.</span>
                                    <span>Liverpool, UK 33342</span>
                                </p>
                                <div className="contactUs">
                                    <span>
                                        <i className="fa-solid fa-envelope"></i>
                                        Contact@TravelTourWP.com
                                    </span>
                                    <i className="fa-solid fa-phone"></i>
                                    1.820.3345.33
                                </div>
                            </div>
                            <div>
                                <h3>
                                    Map
                                </h3>
                                <div className="divider-2">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="social-contact py-5">
                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i class="fa-solid fa-envelope"></i></a>
                <a href="#"> <i class="fa-brands fa-linkedin"></i></a>
                <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
                <a href="#"><i class="fa-brands fa-skype"></i></a>
                <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
            </div>
        </>
    )
}
