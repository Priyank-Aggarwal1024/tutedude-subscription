import React from "react";
import "../../styles/star.css";

function Star({ count }) {
  return (
    <div className="star-div">
      {count.map((item, idx) => {
        return (
          <div className="star" key={idx}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <rect
                width="25.2642"
                height="25.2642"
                transform="translate(0.130859 0.45166)"
                fill="url(#paint0_linear_23_1545)"
              />
              <path
                d="M6.02843 23.264L7.73902 15.8689L2.00195 10.8951L9.5812 10.2371L12.5287 3.26318L15.4762 10.2371L23.0554 10.8951L17.3183 15.8689L19.0289 23.264L12.5287 19.3428L6.02843 23.264Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_23_1545"
                  x1="0"
                  y1="12.6321"
                  x2="25.2642"
                  y2="12.6321"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.0391675" stopColor="#800080" />
                  <stop offset="0.527799" stopColor="#B466C1" />
                  <stop offset="0.92416" stopColor="#800080" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        );
      })}
    </div>
  );
}

export default Star;
