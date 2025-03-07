import React from "react";
import "../../styles/coursecard.css";

function CourseCard({ item }) {
  return (
    <div className="course-card-div">
      <div className="ccd-left">
        <div className="ccdl-left">
          <img src={item.img} alt={item.course_name} />
        </div>
        <div className="ccdl-right">{item.course_name}</div>
      </div>
      <div className="ccd-right">
        <div className="ccdr-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
          >
            <g clipPath="url(#clip0_2037_3301)">
              <path
                d="M15.9948 6.5C9.32812 6.5 3.63479 10.6467 1.32812 16.5C3.63479 22.3533 9.32812 26.5 15.9948 26.5C22.6615 26.5 28.3548 22.3533 30.6615 16.5C28.3548 10.6467 22.6615 6.5 15.9948 6.5ZM15.9948 23.1667C12.3148 23.1667 9.32812 20.18 9.32812 16.5C9.32812 12.82 12.3148 9.83333 15.9948 9.83333C19.6748 9.83333 22.6615 12.82 22.6615 16.5C22.6615 20.18 19.6748 23.1667 15.9948 23.1667ZM15.9948 12.5C13.7815 12.5 11.9948 14.2867 11.9948 16.5C11.9948 18.7133 13.7815 20.5 15.9948 20.5C18.2081 20.5 19.9948 18.7133 19.9948 16.5C19.9948 14.2867 18.2081 12.5 15.9948 12.5Z"
                fill="#F2DEB8"
              />
            </g>
            <defs>
              <clipPath id="clip0_2037_3301">
                <rect
                  width="32"
                  height="32"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <span className="view">view</span>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
