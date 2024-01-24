import React from 'react'
import { Image } from 'react-bootstrap'

export default function Header() {
  return (
    <section className="header-top">
                <div className="container">
                    <div className="row pt-2 ">
                        <div className="col-md-6">
                            <div className="traveltour text-start">
                                <i className="fa-solid fa-phone"></i>
                                1.820.3345.33
                                <span className="ps-5">
                                    <i className="fa-solid fa-envelope"></i>
                                </span>
                                Contact@TravelTourWP.com
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="login-bar text-end">
                                <div className="social">
                                    <a href="#" target="_blank" className="infinite-top-bar-social-icon" title="facebook">
                                        <i className="fa-brands fa-facebook"></i>
                                    </a>
                                    <a href="#" target="_blank" className="infinite-top-bar-social-icon" title="flickr">
                                        <i className="fa-brands fa-flickr"></i>
                                    </a>
                                    <a href="#" target="_blank" className="infinite-top-bar-social-icon" title="twitter">
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </a>
                                </div>
                                <div className="user-bar">
                                    <a className="tourmaster-user-top-bar-login" href="#">
                                        <i className="fa-solid fa-lock"></i>
                                        <span className="tourmaster-text">Login</span>
                                    </a>
                                    <a className="tourmaster-user-top-bar-signup" href="#">
                                        <i className="fa fa-user"></i>
                                        <span className="tourmaster-text">Sign Up</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center py-3">
                        <div className="col-lg-3">
                            <a href="#">
                                <Image src="images/logo.png" alt="Logo" />
                            </a>
                        </div>
                        <div className="col-lg-9">
                            <nav className="navbar navbar-expand-lg">
                                <div className="container-fluid">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav sf-menu">
                                            <li className="nav-item">
                                                <a className="nav-link active sf-with-ul-pre sf-with-ul" aria-current="page"
                                                    href="#">Home</a>
                                                <ul className="sub-menu d-none">
                                                    <li><a href="#">...</a></li>
                                                    <li><a href="#">...</a></li>
                                                    <li><a href="#">...</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link sf-with-ul-pre sf-with-ul " aria-current="page"
                                                    href="#">Page</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link sf-with-ul-pre sf-with-ul" aria-current="page" href="#">Tour
                                                    List</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link sf-with-ul-pre sf-with-ul" aria-current="page"
                                                    href="#">Destinations</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
  )
}
