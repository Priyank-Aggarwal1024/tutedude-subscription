import "../styles/courses.css";
import { courses } from "../courses";
import CourseCard from "./reusable/CourseCard";
import { useState } from "react";

function Courses() {
  const [showcourses, setShowCourses] = useState(false);
  return (
    <section className="courses-section">
      <div className={`course-div-outer ${!showcourses && "hidden"}`}>
        <div className="course-div-outer-top">
          <h2 className="section-heading courses-heading">
            Get Access to{" "}
            <span className="text-golden fw-700">All 30+ Courses</span>
          </h2>
          <p className="course-subheading">
            Instant Mentorship, internship assistance and best live projects to
            build.
          </p>
        </div>
        <div className="course-div">
          {courses.map((item, index) => (
            <CourseCard item={item} key={index} />
          ))}
        </div>
        {!showcourses && (
          <div className="course-hide-div">
            <div
              className="course-hide-div-inner"
              onClick={() => setShowCourses(!showcourses)}
            >
              <span>Show More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="40"
                viewBox="0 0 39 40"
                fill="none"
              >
                <path
                  d="M19.1154 8.05132V31.9336M19.1154 31.9336L9.5625 22.9777M19.1154 31.9336L28.6683 22.9777"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Courses;
