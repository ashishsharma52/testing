import React from 'react'
import { Image } from 'react-bootstrap'
import TourPackages from './TourPack'
import Banner from './Banner'

function home() {
    return (
        <>   
            <section className="banner ">
                <Banner />
            </section>
            <section className="traveltour-about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 d-flex text-center align-items-center justify-content-evenly">
                            <div className="icons">
                                <Image src="images/icon-1.png" alt="" />
                            </div>
                            <div>
                                <h4>500+ DESTINATIONS</h4>
                                <p>Morbi leo risus, porta ac</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex text-center align-items-center justify-content-evenly">
                            <div className="icons">
                                <Image src="images/icon-2.png" alt="" />
                            </div>
                            <div>
                                <h4>500+ DESTINATIONS</h4>
                                <p>Morbi leo risus, porta ac</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex text-center align-items-center justify-content-evenly">
                            <div className="icons">
                                <Image src="images/icon-3.png" alt="" />
                            </div>
                            <div>
                                <h4>500+ DESTINATIONS</h4>
                                <p>Morbi leo risus, porta ac</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex text-center align-items-center justify-content-evenly">
                            <div className="icons">
                                <Image src="images/icon-4.png" alt="" />
                            </div>
                            <div>
                                <h4>500+ DESTINATIONS</h4>
                                <p>Morbi leo risus, porta ac</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="popular-packages">
                <div className="cover">
                    <div className="form-barr py-5">
                        <div className="container">
                            <form method="GET" className="align-items-center search-form row">
                                <div className="col-lg-2 col-md-4 col-sm-12">
                                    <label for="#">Keywords</label>
                                    <input type="text" />
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-12">
                                    <label for="#">Activity</label>
                                    <select name="cars" id="cars">
                                        <option value="any">Any</option>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-12">
                                    <label for="#">Destination</label>
                                    <select name="cars" id="cars">
                                        <option value="any">Any</option>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-12">
                                    <label for="#">Duration</label>
                                    <select name="cars" id="cars">
                                        <option value="any">Any</option>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-12">
                                    <label for="#">Date</label>
                                    <input type="date" />
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-12 mt-4">
                                    <button> search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="popular-heading ">
                                <h2>Popular Tour Packages <span><a href="#"> &nbsp;&nbsp;&nbsp;/&nbsp; &nbsp;View All Tours</a></span></h2>
                            </div>
                            <TourPackages />
                        </div>
                    </div>
                </div>
            </section>
            <section className="destination">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10">
                            <h1>
                                <i className="fa-solid fa-location-dot"></i>
                                &nbsp;Popular Destinations<span>
                                    <a href="#"> &nbsp;&nbsp;&nbsp;/&nbsp; &nbsp;View All Destinations</a>
                                </span>
                            </h1>
                            <p>Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit
                                amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                        </div>
                    </div>
                </div>
                <div className="destination-img">
                    <div className="images ">
                        <Image src="images/pexels-photo-164276-600x800.jpg" alt="" />
                        <div className="position">
                            <div className="d-flex gap-5">
                                <h5>
                                    South America
                                </h5>
                                <p>
                                    3 tours
                                </p>
                            </div>
                            <div className="display-none">
                                VIEW ALL TOURS
                            </div>
                        </div>
                    </div>
                    <div className="images ">
                        <Image src="images/shutterstock_149105702-600x600.jpg" alt="" />
                        <div className="position">
                            <div className="d-flex gap-5">
                                <h5>
                                    South America
                                </h5>
                                <p>
                                    3 tours
                                </p>
                            </div>
                            <div className="display-none">
                                VIEW ALL TOURS
                            </div>
                        </div>
                    </div>
                    <div className="images ">
                        <Image src="images/shutterstock_120562819-600x600.jpg" alt="" />
                        <div className="position">
                            <div className="d-flex gap-5">
                                <h5>
                                    South America
                                </h5>
                                <p>
                                    3 tours
                                </p>
                            </div>
                            <div className="display-none">
                                VIEW ALL TOURS
                            </div>
                        </div>
                    </div>
                    <div className="images ">
                        <Image src="images/pexels-photo-47426-600x800.jpg" alt="" />
                        <div className="position">
                            <div className="d-flex gap-5">
                                <h5>
                                    South America
                                </h5>
                                <p>
                                    3 tours
                                </p>
                            </div>
                            <div className="display-none">
                                VIEW ALL TOURS
                            </div>
                        </div>
                    </div>
                    <div className="images ">
                        <Image src="images/pexels-photo-176400-600x800.jpg" alt="" />
                        <div className="position">
                            <div className="">
                                <div className="d-flex gap-5">
                                    <h5>
                                        South America
                                    </h5>
                                    <p>
                                        3 tours
                                    </p>
                                </div>
                                <div className="display-none">
                                    VIEW ALL TOURS
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="newsletter py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-6">
                            <h4>
                                <i className="fa-solid fa-sliders"></i>
                                Browse Tours By Activity
                            </h4>
                            <ul>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <li><a href="#"> Outdoor Activites</a></li>
                                    </div>
                                    <div className="col-lg-6">
                                        <li><a href="#">City Tours</a></li>
                                    </div>
                                    <div className="col-lg-6">
                                        <li><a href="#"> Cultural & Thematic Tours</a></li>
                                    </div>
                                    <div className="col-lg-6">
                                        <li><a href="#">Indulgence & Luxury Tours</a></li>
                                    </div>
                                    <div className="col-lg-6">
                                        <li><a href="#"> Family Friendly Tours</a></li>
                                    </div>
                                    <div className="col-lg-6">
                                        <li><a href="#"> Relaxation Tours</a></li>
                                    </div>
                                    <div className="col-lg-6">
                                        <li><a href="#">Holiday & Seasonal Tours</a></li>
                                    </div>
                                    <div className="col-lg-6">
                                        <li><a href="#"> Wild & Adventure Tours</a></li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h4>
                                <i className="fa-regular fa-envelope"></i>
                                Newsletter
                            </h4>
                            <p>Subscribe for updates & promotions</p>
                            <div className="newsletter-form ">
                                <input type="text" placeholder="Your Email Address" />
                                <button>Subscribe</button>
                            </div>
                            <div className="social-icon">
                                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i className="fa-solid fa-envelope"></i></a>
                                <a href="#"> <i className="fa-brands fa-linkedin"></i></a>
                                <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
                                <a href="#"><i className="fa-brands fa-skype"></i></a>
                                <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="discount">
                    <div className="container">
                        <div className="row">
                            <div className="offset-md-6 col-md-6">
                                <h3>Discount <span> 10-30% Off</span></h3>
                                <p>Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Maecenas faucibus
                                    mollis interdum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                                    lacinia odio sem nec elit.</p>
                                <button>See Promotion Tours</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="destination">
                <div className="container">
                    <div className="row">
                        <h1>
                            <i className="fa-regular fa-lightbulb"></i>
                            Travel Articles <span>&nbsp;&nbsp;/&nbsp;&nbsp;Read All Articles</span>
                        </h1>
                        <div className="col-lg-3 col-md-6 ">
                            <div className="travel ">
                                <Image src="images/sunrise-phu-quoc-island-ocean-700x660.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 ">
                            <div className="travel ">
                                <Image src="images/shutterstock_195507533.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 ">
                            <div className="travel ">
                                <Image src="images/shutterstock_198556997.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 ">
                            <div className="travel ">
                                <Image src="images/shutterstock_210601591-600x800.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="us-with">
                <div className="container">
                    <div className="row book-items">
                        <div className="col-lg-3 award col-md-6 col-sm-12 ">
                            <h4>Why Book With Us?</h4>
                        </div>
                        <div className="col-lg-3 bg-blue  col-md-6  col-sm-12 ">
                            <div className="row d-flex ">
                                <div className="col-md-3">
                                    <Image src="images/icon-10.png" alt="" />
                                </div>
                                <div className="col-md-9">
                                    <h5>
                                        40,000+ CUSTOMERS
                                        <span>Morbi leo risus, porta ac</span>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 bg-blue  col-md-6 col-sm-12 ">
                            <div className="row">
                                <div className="col-md-3">
                                    <Image src="images/icon-11.png" alt="" />
                                </div>
                                <div className="col-md-9">
                                    <h5>
                                        AWARD WINNING
                                        <span>Morbi leo risus, porta ac</span>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 bg-blue  col-md-6 col-sm-12 ">
                            <div className="row">
                                <div className="col-md-3 ">
                                    <Image src="images/icon-12.png" alt="" />
                                </div>
                                <div className="col-md-9">
                                    <h5>
                                        SECURE PAYMENT
                                        <span>Morbi leo risus, porta ac</span>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
        </>
    )
}

export default home