import React from "react";
import "../../styles/star.css";

function NextArrow(props) {
  const { classN, style, onClick } = props;

  return (
    <div
      className={`next-arrow ${classN}`}
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
          d="M9.76946 20.1055L16.875 12.9999L9.76946 5.89438"
          stroke="white"
          strokeWidth="2.36851"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default NextArrow;
