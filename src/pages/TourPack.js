import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            infinite: true,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ],
            speed: 600,
            slidesToShow: 3,
            slidesToScroll: 1
        };

        const cardData = [
            {
                heading: "SWITZERLAND - 7 DAYS IN ZURICH, ZERMATT",
                img: "images/card.jpg",
                time: "7 Days",
                price: "$160"
            },
            {
                heading: "SWITZERLAND - 7 DAYS IN ZURICH, ZERMATT",
                img: "images/card.jpg",
                time: "7 Days",
                price: "$260"
            },
            {
                heading: "SWITZERLAND - 7 DAYS IN ZURICH, ZERMATT",
                img: "images/card.jpg",
                time: "7 Days",
                price: "$360"
            },
            {
                heading: "SWITZERLAND - 7 DAYS IN ZURICH, ZERMATT",
                img: "images/card.jpg",
                time: "7 Days",
                price: "$460"
            },
            {
                heading: "SWITZERLAND - 7 DAYS IN ZURICH, ZERMATT",
                img: "images/card.jpg",
                time: "7 Days",
                price: "$560"
            },
            {
                heading: "SWITZERLAND - 7 DAYS IN ZURICH, ZERMATT",
                img: "images/card.jpg",
                time: "7 Days",
                price: "$660"
            }
        ]
        return (
            <div>
                <Slider {...settings}>
                    {cardData.map((card, index) => {
                        return (
                            <div className="col-md-4" key={index}>
                                <div className="card">
                                    <img src={card.img} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <h1>
                                                    {card.heading}
                                                </h1>
                                                <p className="time">
                                                    <i className="fa-solid fa-clock"></i>
                                                    {card.time}
                                                </p>
                                            </div>
                                            <div className="col-md-4">
                                                <span>From</span>
                                                <h3>
                                                    {card.price}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        );
    }
}