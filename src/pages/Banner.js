import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        const banner = [
            {
                heading: "Find your perfect",
                img: "images/slider-1.jpg",
            },
            {
                heading: "Find your perfect",
                img: "images/slider-2.jpg",
            },
            {
                heading: "Find your perfect",
                img: "images/slider-3.jpg",
            },

        ]
        return (
            <>
                <Slider {...settings}>
                    {banner.map((card, index) => {
                        return (
                            <div class="item" key={index}>
                                <img src={card.img} alt="" />
                                <div className="container">
                                    <div class=" item-content">
                                        <h1>{card.heading}
                                            <span>Vacation </span>
                                            Italy, Rome, Venice, Milan
                                        </h1>
                                        <button>LEARN MORE</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </>
        );
    }
}