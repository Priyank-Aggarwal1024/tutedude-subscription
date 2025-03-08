import "../styles/Hero.css";
// import heroDesign from "../assets/hero-design.svg";
import hi1 from "../assets/hi1.svg";
import hi2 from "../assets/hi2.svg";
import hi3 from "../assets/hi3.svg";
import hi4 from "../assets/hi4.svg";
import hi5 from "../assets/hi5.png";
import hi6 from "../assets/hi6.svg";
import hi7 from "../assets/hi7.svg";
import hi8 from "../assets/hi8.svg";
import { useState } from "react";
import { useEffect } from "react";
const FloatingDiv = ({ classN, imag }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const getRandomPosition = (max, offset) =>
    Math.floor(Math.random() * (max - offset));

  useEffect(() => {
    const divWidth = 200;
    const divHeight = 100;

    const updatePosition = () => {
      const maxX = 2 * divWidth;
      const maxY = 2 * divHeight;

      const randomX = getRandomPosition(maxX, divWidth);
      const randomY = getRandomPosition(maxY, divHeight);

      setPosition({ x: randomX, y: randomY });
    };

    const interval = setInterval(updatePosition, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={imag}
      alt="Hero Icon Image"
      className={`${classN}`}
      style={{
        transform: `translate(${position.x - 100}px, ${position.y - 100}px)`,
        transition: "transform 1s ease-in-out",
      }}
    />
  );
};

function Hero() {
  const icons = [
    { classN: "hero-icons hero-icon1", imag: hi1 },
    { classN: "hero-icons hero-icon2", imag: hi2 },
    { classN: "hero-icons hero-icon3", imag: hi3 },
    { classN: "hero-icons hero-icon4", imag: hi4 },
    { classN: "hero-icons hero-icon5", imag: hi5 },
    { classN: "hero-icons hero-icon6", imag: hi6 },
    { classN: "hero-icons hero-icon7", imag: hi7 },
    { classN: "hero-icons hero-icon8", imag: hi8 },
  ];
  return (
    <>
      <div className="hero">
        {icons.map((item, idx) => (
          <FloatingDiv key={idx} imag={item.imag} classN={item.classN} />
        ))}
        <div className="hero-top">An IIT Delhi Alumni Initiative</div>
        <div className="hero-middle">
          Master unlimited skills with{" "}
          <span className="hero-golden fw-700">Tutedude Plus</span>
        </div>
        <div className="hero-bottom">
          <div className="hero-bottom-top">
            <div className="hero-bt-left">
              <p className="hero-btl-price">
                <b>₹100</b>/mo{" "}
              </p>
              <p className="hero-btl-disprice">₹833/mo</p>
            </div>
            <div className="hero-bt-right">Start Subscription</div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="452"
            height="2"
            viewBox="0 0 452 2"
            fill="none"
            className="hero-svg-large"
          >
            <path
              d="M0.546875 0.792969H451.456"
              stroke="url(#paint0_linear_2037_2906)"
              strokeOpacity="0.2"
              strokeWidth="1.07708"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2037_2906"
                x1="0.546875"
                y1="0.792969"
                x2="8.08417"
                y2="58.2781"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E6C689" />
                <stop offset="0.290348" stopColor="#FCE6BD" />
                <stop offset="1" stopColor="#BF9C5E" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="335"
            height="2"
            viewBox="0 0 335 2"
            fill="none"
            className="hero-svg-small"
          >
            <path
              d="M0.367188 1.17969H334.657"
              stroke="url(#paint0_linear_2037_2067)"
              strokeOpacity="0.2"
              strokeWidth="0.79851"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2037_2067"
                x1="0.367187"
                y1="1.17969"
                x2="10.395"
                y2="57.8796"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E6C689" />
                <stop offset="0.290348" stopColor="#FCE6BD" />
                <stop offset="1" stopColor="#BF9C5E" />
              </linearGradient>
            </defs>
          </svg>
          <div className="hero-bottom-bottom">
            Billed annually. Cancel anytime
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
