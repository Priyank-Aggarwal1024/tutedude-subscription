import React, { useState } from "react";
import "../styles/testimonials.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./reusable/NextArrow";
import PrevArrow from "./reusable/PrevArrow";
import Star from "./reusable/Star";
const testimonial = [
  {
    name: "Rahul Sharma",
    iconStyle: {
      background: "rgba(231, 143, 246, 0.31)",
      color: "#CD56E2",
    },
    star: Array(5).fill(1),
    message:
      "I have very good experience with them while learning MERN. The explanation of each topic is very clear and easy to understand. I am very happy with the services they provide. ",
  },
  {
    name: "Neha Jangra",
    iconStyle: {
      background: "rgba(235, 179, 118, 0.34)",
      color: "#FF864C",
    },
    star: Array(5).fill(1),
    message:
      "I have very good experience with them while learning MERN. The explanation of each topic is very clear and easy to understand. I am very happy with the services they provide. Thanks Upskill Mafia",
  },
  {
    name: "Rahul Sharma",
    iconStyle: {
      background: "rgba(231, 143, 246, 0.31)",
      color: "#CD56E2",
    },
    star: Array(5).fill(1),
    message:
      "I have very good experience with them while learning MERN. The explanation of each topic is very clear and easy to understand. I am very happy with the services they provide. ",
  },
  {
    name: "Neha Jangra",
    iconStyle: {
      background: "rgba(235, 179, 118, 0.34)",
      color: "#FF864C",
    },
    star: Array(5).fill(1),
    message:
      "I have very good experience with them while learning MERN. The explanation of each topic is very clear and easy to understand. I am very happy with the services they provide. Thanks Upskill Mafia",
  },
  {
    name: "Rahul Sharma",
    iconStyle: {
      background: "rgba(231, 143, 246, 0.31)",
      color: "#CD56E2",
    },
    star: Array(5).fill(1),
    message:
      "I have very good experience with them while learning MERN. The explanation of each topic is very clear and easy to understand. I am very happy with the services they provide. ",
  },
  {
    name: "Neha Jangra",
    iconStyle: {
      background: "rgba(235, 179, 118, 0.34)",
      color: "#FF864C",
    },
    star: Array(5).fill(1),
    message:
      "I have very good experience with them while learning MERN. The explanation of each topic is very clear and easy to understand. I am very happy with the services they provide. Thanks Upskill Mafia",
  },
];
function Testimonials() {
  const [wid, setWid] = useState(window.innerWidth);
  window.addEventListener("resize", (e) => {
    if (window.innerWidth < 880 && wid >= 880) {
      setWid(window.innerWidth);
    } else if (window.innerWidth >= 880 && wid < 880) {
      setWid(window.innerWidth);
    }
  });
  const settings = {
    dots: wid > 780 ? false : true,
    infinite: true,
    speed: 500,
    slidesToShow: wid < 880 ? 1 : 2,
    slidesToScroll: 1,
    prevArrow: wid > 780 ? <PrevArrow /> : <span></span>,
    nextArrow: wid > 780 ? <NextArrow /> : <span></span>,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section className="section-testimonial">
      <h2 className="section-heading text-center testimonial-heading">
        What student say <span className="text-golden"> About us</span>
      </h2>
      <div className="slider-container">
        <Slider {...settings}>
          {testimonial.map((item, idx) => {
            return (
              <div className="outer-testimonial-card" key={idx}>
                <div className="testimonial-card">
                  <div className="testimonial-card-top">
                    <div className="tct-l">
                      <div className="tct-icon" style={item.iconStyle}>
                        {item.name.charAt(0)}
                      </div>
                      <div className="tct-about">
                        <div className="tct-name">{item.name}</div>
                        <Star count={item.star} />
                      </div>
                    </div>
                    <div className="tct-r">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="96"
                        height="95"
                        viewBox="0 0 96 95"
                        fill="none"
                      >
                        <g opacity="0.2">
                          <path
                            d="M81.1027 24.9408C75.5643 18.9366 67.1837 15.8931 56.1977 15.8931H52.2502V27.0211L55.424 27.6567C60.8321 28.7383 64.5941 30.866 66.6073 33.9885C67.6578 35.6707 68.2536 37.5967 68.3364 39.5782H56.1977C55.1508 39.5782 54.1467 39.9941 53.4064 40.7344C52.6661 41.4747 52.2502 42.4788 52.2502 43.5257V71.1584C52.2502 75.5125 55.7911 79.0534 60.1452 79.0534H83.8304C84.8773 79.0534 85.8814 78.6375 86.6217 77.8972C87.362 77.1569 87.7779 76.1529 87.7779 75.1059V55.3683L87.7661 43.8455C87.8016 43.4073 88.5516 33.0253 81.1027 24.9408ZM16.7225 79.0534H40.4076C41.4546 79.0534 42.4586 78.6375 43.199 77.8972C43.9393 77.1569 44.3552 76.1529 44.3552 75.1059V55.3683L44.3433 43.8455C44.3788 43.4073 45.1289 33.0253 37.6799 24.9408C32.1415 18.9366 23.7609 15.8931 12.775 15.8931H8.82744V27.0211L12.0013 27.6567C17.4094 28.7383 21.1713 30.866 23.1846 33.9885C24.235 35.6707 24.8308 37.5967 24.9136 39.5782H12.775C11.728 39.5782 10.7239 39.9941 9.98363 40.7344C9.24333 41.4747 8.82744 42.4788 8.82744 43.5257V71.1584C8.82744 75.5125 12.3684 79.0534 16.7225 79.0534Z"
                            fill="#800080"
                            fillOpacity="0.87"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="testimonial-card-bottom">{item.message}</div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
