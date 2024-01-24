import React from 'react'
import { Image } from 'react-bootstrap'

export default function Destination() {
    return (
        <>
            <section className="dashboard-banner">
                <div className="container">
                    <div className="row pt-4">
                        <h1>America</h1>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className='destination-card d-flex my-4'>
                                <Image src="images/tour-card.jpg" alt="..." width={240} height={280} />
                                <div class="row mt-3 py-4 px-3">
                                    <div class="col-md-9 tour-card-content">
                                        <h3>DUBAI – ALL STUNNING PLACES</h3>
                                        <span><i class="fa-regular fa-clock"></i>8 Hours</span>
                                        <span><i class="fa-regular fa-calendar-days"></i>Availability : Jan 16’ - Dec 16’</span>
                                        <p>Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue.
                                            Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor […]</p>
                                    </div>
                                    <div class="col-md-3 price text-center py-3">
                                        <p>Form</p><span class="d-block">$1200</span>
                                        <button>View Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className='destination-card d-flex my-4'>
                                <Image src="images/tour-card.jpg" alt="..." width={240} height={280} />
                                <div class="row mt-3 py-4 px-3">
                                    <div class="col-md-9 tour-card-content">
                                        <h3>DUBAI – ALL STUNNING PLACES</h3>
                                        <span><i class="fa-regular fa-clock"></i>8 Hours</span>
                                        <span><i class="fa-regular fa-calendar-days"></i>Availability : Jan 16’ - Dec 16’</span>
                                        <p>Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue.
                                            Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor […]</p>
                                    </div>
                                    <div class="col-md-3 price text-center py-3">
                                        <p>Form</p><span class="d-block">$1200</span>
                                        <button>View Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className='destination-card d-flex my-4'>
                                <Image src="images/tour-card.jpg" alt="..." width={240} height={280} />
                                <div class="row mt-3 py-4 px-3">
                                    <div class="col-md-9 tour-card-content">
                                        <h3>DUBAI – ALL STUNNING PLACES</h3>
                                        <span><i class="fa-regular fa-clock"></i>8 Hours</span>
                                        <span><i class="fa-regular fa-calendar-days"></i>Availability : Jan 16’ - Dec 16’</span>
                                        <p>Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue.
                                            Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor […]</p>
                                    </div>
                                    <div class="col-md-3 price text-center py-2">
                                        <p>Form</p><span class="d-block">$1200</span>
                                        <button>View Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='book-with-us mt-4'>
                                <ul>
                                   <li>
                                        <i class="fa-solid fa-dollar-sign"></i>
                                        <p>No-hassle best price guarantee</p>
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-dollar-sign"></i>
                                        <p>No-hassle best price guarantee</p>
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-dollar-sign"></i>
                                        <p>No-hassle best price guarantee</p>
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-dollar-sign"></i>
                                        <p>No-hassle best price guarantee</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='getQuestion my-4'>
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
