import React from "react";
import "../../styles/star.css";

function PrevArrow(props) {
  const { classN, style, onClick } = props;

  return (
    <div
      className={`previous-arrow ${classN}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
      >
        <path
          d="M16.6524 5.89453L9.54688 13.0001L16.6524 20.1056"
          stroke="white"
          strokeWidth="2.36851"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default PrevArrow;
