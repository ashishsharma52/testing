import React from 'react'
import { Image } from 'react-bootstrap'

export default function TourSideThumbnail() {
    return (
        <>
            <section className="dashboard-banner">
                <div className="container">
                    <div className="row py-5">
                        <h1>Tour Side Thumbnail With Frame Left Sidebar</h1>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mt-3">
                            <div className="bg-light p-2">
                                <h4 className='py-3'>LATEST TOURS</h4>
                                <div className='d-flex gap-3 py-3 side-tour-bar'>
                                    <div>
                                        <img src="images/card.jpg" height={60} width={70} />
                                    </div>
                                    <div>
                                        <a href="#"><h3>Africa – Amazing African Safari</h3></a>
                                        <p>From <span>$100</span></p>
                                    </div>
                                </div>
                                <div className='d-flex gap-3 py-3 side-tour-bar'>
                                    <div>
                                        <img src="images/card.jpg" height={60} width={70} />
                                    </div>
                                    <div>
                                        <a href="#"><h3>Africa – Amazing African Safari</h3></a>
                                        <p>From <span>$100</span></p>
                                    </div>
                                </div>
                                <div className='d-flex gap-3 py-3 side-tour-bar'>
                                    <div>
                                        <img src="images/card.jpg" height={60} width={70} />
                                    </div>
                                    <div>
                                        <a href="#"><h3>Africa – Amazing African Safari</h3></a>
                                        <p>From <span>$100</span></p>
                                    </div>
                                </div>
                                <div className='d-flex gap-3 py-3 side-tour-bar'>
                                    <div>
                                        <img src="images/card.jpg" height={60} width={70} />
                                    </div>
                                    <div>
                                        <a href="#"><h3>Africa – Amazing African Safari</h3></a>
                                        <p>From <span>$100</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className='getQuestion'>
                                <h4>Get a Question?</h4>
                                <p>Do not hesitage to give us a call. We are an expert team and we are happy to talk to you.</p>
                                <span className='d-block mb-3'>
                                    <i className="fa-solid fa-phone"></i>
                                    1.820.3345.33
                                </span>
                                <span>
                                    Contact@TravelTourWP.com
                                </span>
                            </div>
                            <div className='tour-category bg-light p-2'>
                                <h3>TOUR CATEGORY</h3>
                                <ul>
                                    <li><a href="#">Outdoor Activites</a></li>
                                    <li><a href="#">City Tours</a></li>
                                    <li><a href="#">Outdoor Activites</a></li>
                                    <li><a href="#">City Tours</a></li>
                                    <li><a href="#">Outdoor Activites</a></li>
                                    <li><a href="#">City Tours</a></li>
                                </ul>
                            </div>
                            <div className='bg-light p-2'>
                                <h4 className='py-2'>LATEST TOURS</h4>
                                <div className='d-flex gap-3 py-3 populer-tour'>
                                    <div>
                                        <img src="images/card.jpg" height={60} width={70} />
                                    </div>
                                    <div>
                                        <a href="#"><h3>How to travel with paper map</h3></a>
                                        <p>
                                            <i class="fa-regular fa-clock"></i>June 6, 2016 &nbsp;&nbsp;&nbsp;<i class="fa-regular fa-copy"></i>JOHN SMITH
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex gap-3 py-3 populer-tour'>
                                    <div>
                                        <img src="images/card.jpg" height={60} width={70} />
                                    </div>
                                    <div>
                                        <a href="#"><h3>How to travel with paper map</h3></a>
                                        <p>
                                            <i class="fa-regular fa-clock"></i>June 6, 2016 &nbsp;&nbsp;&nbsp;<i class="fa-regular fa-copy"></i>JOHN SMITH
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex gap-3 py-3 populer-tour'>
                                    <div>
                                        <img src="images/card.jpg" height={60} width={70} />
                                    </div>
                                    <div>
                                        <a href="#"><h3>How to travel with paper map</h3></a>
                                        <p>
                                            <i class="fa-regular fa-clock"></i>June 6, 2016 &nbsp;&nbsp;&nbsp;<i class="fa-regular fa-copy"></i>JOHN SMITH
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex gap-3 py-3 populer-tour'>
                                    <div>
                                        <img src="images/card.jpg" height={60} width={70} />
                                    </div>
                                    <div>
                                        <a href="#"><h3>How to travel with paper map</h3></a>
                                        <p>
                                            <i class="fa-regular fa-clock"></i>June 6, 2016 &nbsp;&nbsp;&nbsp;<i class="fa-regular fa-copy"></i>JOHN SMITH
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-3">
                            <div className="container">
                                <div className="row">
                                    <div className="tour-card mt-3">
                                        <Image src='images/tour-card.jpg' />
                                        <div className="row m-2">
                                            <div className="col-md-9 tour-card-content">
                                                <h3>DUBAI – ALL STUNNING PLACES</h3>
                                                <span>
                                                    <i class="fa-regular fa-clock"></i>
                                                    8 Hours
                                                </span>
                                                <span>
                                                    <i class="fa-regular fa-calendar-days"></i>
                                                    Availability : Jan 16’ - Dec 16’
                                                </span>
                                                <span>
                                                    <i class="fa-solid fa-plane"></i>
                                                    Dubai
                                                </span>
                                                <p>
                                                    Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero,
                                                    a pharetra augue. Etiam porta sem malesuada magna mollis euismod.
                                                    Donec ullamcorper nulla non metus auctor […]
                                                </p>
                                            </div>
                                            <div className="col-md-3 price text-center">
                                                <p>Form</p>
                                                <span className='d-block'>$1200</span>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-regular fa-star"></i>
                                                <p>
                                                    (6 Reviews)
                                                </p>
                                                <button>
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="tour-card mt-4">
                                        <Image src='images/card.jpg' />
                                        <div className="row m-2">
                                            <div className="col-md-9 tour-card-content">
                                                <h3>DUBAI – ALL STUNNING PLACES</h3>
                                                <span>
                                                    <i class="fa-regular fa-clock"></i>
                                                    8 Hours
                                                </span>
                                                <span>
                                                    <i class="fa-regular fa-calendar-days"></i>
                                                    Availability : Jan 16’ - Dec 16’
                                                </span>
                                                <span>
                                                    <i class="fa-solid fa-plane"></i>
                                                    Dubai
                                                </span>
                                                <p>
                                                    Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero,
                                                    a pharetra augue. Etiam porta sem malesuada magna mollis euismod.
                                                    Donec ullamcorper nulla non metus auctor […]
                                                </p>
                                            </div>
                                            <div className="col-md-3 price text-center">
                                                <p>Form</p>
                                                <span className='d-block'>$1200</span>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-regular fa-star"></i>
                                                <p>
                                                    (6 Reviews)
                                                </p>
                                                <button>
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="tour-card my-4">
                                        <Image src='images/tour-card.jpg' />
                                        <div className="row m-2">
                                            <div className="col-md-9 tour-card-content">
                                                <h3>DUBAI – ALL STUNNING PLACES</h3>
                                                <span>
                                                    <i class="fa-regular fa-clock"></i>
                                                    8 Hours
                                                </span>
                                                <span>
                                                    <i class="fa-regular fa-calendar-days"></i>
                                                    Availability : Jan 16’ - Dec 16’
                                                </span>
                                                <span>
                                                    <i class="fa-solid fa-plane"></i>
                                                    Dubai
                                                </span>
                                                <p>
                                                    Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero,
                                                    a pharetra augue. Etiam porta sem malesuada magna mollis euismod.
                                                    Donec ullamcorper nulla non metus auctor […]
                                                </p>
                                            </div>
                                            <div className="col-md-3 price text-center">
                                                <p>Form</p>
                                                <span className='d-block'>$1200</span>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-regular fa-star"></i>
                                                <p>
                                                    (6 Reviews)
                                                </p>
                                                <button>
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="tour-card my-4">
                                        <Image src='images/tour-card.jpg' />
                                        <div className="row m-2">
                                            <div className="col-md-9 tour-card-content">
                                                <h3>DUBAI – ALL STUNNING PLACES</h3>
                                                <span>
                                                    <i class="fa-regular fa-clock"></i>
                                                    8 Hours
                                                </span>
                                                <span>
                                                    <i class="fa-regular fa-calendar-days"></i>
                                                    Availability : Jan 16’ - Dec 16’
                                                </span>
                                                <span>
                                                    <i class="fa-solid fa-plane"></i>
                                                    Dubai
                                                </span>
                                                <p>
                                                    Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero,
                                                    a pharetra augue. Etiam porta sem malesuada magna mollis euismod.
                                                    Donec ullamcorper nulla non metus auctor […]
                                                </p>
                                            </div>
                                            <div className="col-md-3 price text-center">
                                                <p>Form</p>
                                                <span className='d-block'>$1200</span>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-regular fa-star"></i>
                                                <p>
                                                    (6 Reviews)
                                                </p>
                                                <button>
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="tour-card my-4">
                                        <Image src='images/card.jpg' />
                                        <div className="row m-2">
                                            <div className="col-md-9 tour-card-content">
                                                <h3>DUBAI - ALL STUNNING PLACES</h3>
                                                <span>
                                                    <i class="fa-regular fa-clock"></i>
                                                    8 Hours
                                                </span>
                                                <span>
                                                    <i class="fa-regular fa-calendar-days"></i>
                                                    Availability : Jan 16’ - Dec 16’
                                                </span>
                                                <span>
                                                    <i class="fa-solid fa-plane"></i>
                                                    Dubai
                                                </span>
                                                <p>
                                                    Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero,
                                                    a pharetra augue. Etiam porta sem malesuada magna mollis euismod.
                                                    Donec ullamcorper nulla non metus auctor […]
                                                </p>
                                            </div>
                                            <div className="col-md-3 price text-center">
                                                <p>Form</p>
                                                <span className='d-block'>$1200</span>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-regular fa-star"></i>
                                                <p>
                                                    (6 Reviews)
                                                </p>
                                                <button>
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
