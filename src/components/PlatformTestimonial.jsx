import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import "../styles/PlatformTestimonial.css";
import "swiper/css";
import LinkedinReview from "./LinkedinReview";
import google from "../assets/review/google.svg";
import reviewtext from "../assets/review/reviewtext.svg";
import star from "../assets/review/star.svg";
import halfstar from "../assets/review/halfstar.svg";
import GoogleReview from "./GoogleReview";
import OtherReview from "./OtherReview";
function PlatformTestimonial() {
  const [tab, setTab] = useState(0);
  const swiper = useRef();
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    if (width >= 580 && window.innerWidth < 580) {
      window.location.reload();
    }
    if (width < 580 && window.innerWidth >= 580) {
      window.location.reload();
    }
    setWidth(window.innerWidth);
    return window.removeEventListener("resize", () => {});
  });
  const goToSlide = (index) => {
    if (swiper.current && swiper.current.swiper) {
      swiper.current.swiper.slideTo(index);
    }
  };

  return (
    <>
      <div className="tutedude-pt">
        <div className="div-circle-design platformtestimonial-circle-design"></div>
        <div className="div-circle-design platformtestimonial-circle-design2"></div>

        <div className="tutedude-pt-top">
          <div className="tutedude-ptt-top">
            <div className="tutedude-ptt-top-head text-golden fw-700">
              Testimonials
            </div>
            <div className="tutedude-ptt-top-para">
              See what our learners say across WhatsApp, LinkedIn, Instagram,
              Google Reviews, and more – Real feedback, Real impact!
            </div>
          </div>
          <div className="tutedude-ptt-middle">
            <div
              className={`tutedude-ptt-middle-link text-white ${
                tab == 0 && "tutedude-ptt-middle-linkactive"
              } `}
              onClick={() => goToSlide(0)}
            >
              Linkedin
            </div>
            <div
              className={`tutedude-ptt-middle-link text-white ${
                tab == 1 && "tutedude-ptt-middle-linkactive"
              } `}
              onClick={() => goToSlide(1)}
            >
              Google Review{" "}
            </div>
            <div
              className={`tutedude-ptt-middle-link text-white ${
                tab == 2 && "tutedude-ptt-middle-linkactive"
              } `}
              onClick={() => goToSlide(2)}
            >
              Other
            </div>
          </div>
          <div className="tutedude-ptt-bottom">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={(swiper) => setTab(swiper.activeIndex)}
              id="tutedude-ptt-bottom-slide"
              ref={swiper}
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              allowTouchMove={false}
              breakpoints={{
                580: {
                  autoHeight: false,
                },
                0: {
                  autoHeight: true,
                },
              }}
            >
              <SwiperSlide>
                <LinkedinReview />
              </SwiperSlide>
              <SwiperSlide>
                <GoogleReview />
              </SwiperSlide>
              <SwiperSlide>
                <OtherReview />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="tutedude-ratingreview">
        <div className="div-circle-design googlereviews-circle-design"></div>

        <div className="tutedude-ratingreview-inner">
          <div className="tutedude-rri-top">
            <div className="tutedude-rri-top-head ">
              <span className="text-golden fw-700">4.8</span>{" "}
              <span className="text-white">average Ratings</span>
            </div>

            <div className="tutedude-rri-top-review-slide">
              <div className="tutedude-rri-top-review">
                <div className="tutedude-rri-top-review-top">
                  <div className="tutedude-rritrt-left">
                    <img
                      src={google}
                      alt="Google"
                      className="tutedude-rritrt-left-google"
                    />
                    <img
                      src={reviewtext}
                      alt="reviewtext"
                      className="tutedude-rritrt-left-review"
                    />
                  </div>
                  <div className="tutedude-rritrt-right">
                    <div className="tutedude-rritrtr-left">
                      <span>4.4</span>
                      <div className="tutedude-rritrtr-left-stars">
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={halfstar} alt="Half Star" />
                      </div>
                    </div>
                    <div className="tutedude-rritrtr-right">
                      {`{301 total reviews}`}
                    </div>
                  </div>
                </div>
                <div className="tutedude-rri-top-review-bottom">
                  <div className="tutedude-rritrb-head">
                    "Highly recommended for beginners and professionals"
                  </div>
                  <p className="tutedude-rritrb-para">
                    Learners appreciate the well-structured courses, expert
                    instructors, and hands-on learning. They find the lessons
                    engaging, the support helpful, and the pricing affordable,
                    making learning easy and effective.{" "}
                    <b>Practical assignments and real-world projects</b> help
                    them gain confidence and useful skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlatformTestimonial;
