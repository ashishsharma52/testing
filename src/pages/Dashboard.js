import React from 'react'

export default function Dashboard() {
    return (
        <>
            <section className="dashboard-banner">
                <div className="container">
                    <div className="row">
                        <h1>Customer - Dashboard</h1>
                    </div>
                </div>
            </section>
            <section className="main-dashboard">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 ">
                            <div>
                                <h3>MY ACCOUNT</h3>
                                <ul>
                                    <li>
                                        <a href="#" className="active">
                                            <i className="fa-solid fa-gauge"></i>
                                            Dashboard
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-solid fa-pen-to-square"></i>
                                            Edit Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-solid fa-unlock"></i>
                                            Change Password
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3>TOUR BOOKING</h3>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fa-solid fa-file-lines"></i>
                                            MY Bookings
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-solid fa-folder-open"></i>
                                            Invoices
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-solid fa-star"></i>
                                            Reviews
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-regular fa-heart"></i>
                                            Wish List
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <hr />
                            <a href="#">
                                <i className="fa-solid fa-unlock"></i>
                                Sing Out
                            </a>
                            <hr />
                            <div className="need-help">
                                <h2>Need Help ?</h2>
                                <span>
                                    <i className="fa-solid fa-phone"></i>
                                    1.828.456.345
                                </span>
                                <p>
                                    <a href="#">Help@traveltourwp.com</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-9 ">
                            <div className="side-bar">
                                <div className="db-card">
                                    <div className="d-flex d-flex justify-content-between">
                                        <a href="#">My Profile</a>
                                        <a href="#">Edit Profile</a>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="col-md-5 ">
                                            <div className="row ">
                                                <div className="col-5">
                                                    <p>Name</p>
                                                    <p>Birth Date</p>
                                                    <p>Email</p>
                                                    <p>Contact Address</p>
                                                </div>
                                                <div className="col-6 bold-font">
                                                    <p>John Smith</p>
                                                    <p>1987-9-3</p>
                                                    <p>demo@goodlayer.com</p>
                                                    <p>34 Main Street</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 ">
                                            <div className="row ">
                                                <div className="col-6">
                                                    <p>Gender</p>
                                                    <p>Countary</p>
                                                    <p>Phone</p>
                                                </div>
                                                <div className="col-6 bold-font">
                                                    <p>Male</p>
                                                    <p>Australia</p>
                                                    <p>+1-2342-2234</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="db-card mt-5">
                                    <div className="d-flex d-flex justify-content-between">
                                        <a href="#">Current Booking</a>
                                        <a href="#">View All Booking</a>
                                    </div>
                                    <hr />
                                    <table className="table table-borderless">
                                        <thead>
                                            <tr>
                                                <th scope="col">Tour Name</th>
                                                <th scope="col">Travel Date</th>
                                                <th scope="col">Total</th>
                                                <th scope="col">Payment Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="end-padding">America-Grand canyon, Golden Gate</td>
                                                <td>January 30,2017</td>
                                                <td><b>$2,616.00</b></td>
                                                <td> <i className="fa-solid fa-check"></i>Approved</td>
                                            </tr>
                                            <tr>
                                                <td className="end-padding">5-days Johannesburg</td>
                                                <td>January 30,2017</td>
                                                <td><b>$2,616.00</b></td>
                                                <td className="pending">Pending</td>
                                            </tr>
                                            <tr>
                                                <td className="end-padding">5-days Johannesburg</td>
                                                <td>January 30,2017</td>
                                                <td><b>$2,616.00</b></td>
                                                <td className="pending">Pending</td>
                                            </tr>
                                            <tr>
                                                <td className="end-padding">5-days Johannesburg</td>
                                                <td>January 30,2017</td>
                                                <td><b>$2,616.00</b></td>
                                                <td className="pending">Pending</td>
                                            </tr>
                                            <tr>
                                                <td className="end-padding">5-days Johannesburg</td>
                                                <td>January 30,2017</td>
                                                <td><b>$2,616.00</b></td>
                                                <td className="pending">Pending</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="db-card mt-5">
                                    <div className="d-flex d-flex justify-content-between">
                                        <a href="#">Reviews</a>
                                        <a href="#">View All Reviews</a>
                                    </div>
                                    <hr />
                                    <table className="table table-borderless">
                                        <thead>
                                            <tr>
                                                <th scope="col">Tour Name</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>America-Grand canyon, Golden Gate</td>
                                                <td>January 30,2017</td>
                                                <td className="end-padding">View Review</td>
                                            </tr>
                                            <tr>
                                                <td >5-days Johannesburg</td>
                                                <td>January 30,2017</td>
                                                <td className="end-padding">View Review</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
