import "../styles/TutedudeLearn.css";
import learn from "../assets/learn.svg";
import learngif1 from "../assets/learngif1.gif";
import learngif2 from "../assets/learngif2.gif";
import learngif3 from "../assets/learngif3.gif";
function TutedudeLearn() {
  return (
    <>
      <div className="tutedude-learn">
        <div className="tutedude-learn-top">
          <h2 className="text-center section-heading">
            How to Learn with <b className="text-golden">Tutedude Plus</b>
          </h2>
          <div className="tutedude-learn-top-bottom">
            <div className="tutedude-learn-tb-left">60,000+ Students</div>
            <div className="tutedude-learn-tb-right">
              <span>4.9</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="23"
                viewBox="0 0 25 23"
                fill="none"
              >
                <path
                  d="M5.36756 22.5915L7.2994 14.2631L0.820312 8.6615L9.37984 7.92054L12.7085 0.0664062L16.0372 7.92054L24.5968 8.6615L18.1177 14.2631L20.0495 22.5915L12.7085 18.1754L5.36756 22.5915Z"
                  fill="#FBBB02"
                />
              </svg>
              <span>Rated</span>
            </div>
          </div>
        </div>
        <div className="tutedude-learn-main">
          <div className="tutedude-learn-main-left">
            <div className="tlml-card">
              <div className="tlml-card-gif">
                <img src={learngif1} alt="Enroll Gif" />
              </div>
              <div className="tlml-card-left">
                <div className="tlml-card-head">Enroll </div>
                <div className="tlml-card-subhead">
                  Sign up for <b>yearly subscription</b> just at Rs. 100/mo (No
                  refund available)
                </div>
              </div>
              <div className="tlml-card-right">1</div>
            </div>
            <div className="tlml-card">
              <div className="tlml-card-gif">
                <img src={learngif2} alt="Explore Courses Gif" />
              </div>
              <div className="tlml-card-left">
                <div className="tlml-card-head">Explore Courses </div>
                <div className="tlml-card-subhead">
                  30+ expert courses with <b>mentorship, Learn anytime</b>
                </div>
              </div>
              <div className="tlml-card-right">2</div>
            </div>
            <div className="tlml-card">
              <div className="tlml-card-gif">
                <img src={learngif3} alt="Complete Assignments Gif" />
              </div>
              <div className="tlml-card-left">
                <div className="tlml-card-head">Complete Assignments </div>
                <div className="tlml-card-subhead">
                  Gain experience with <b>assignments, live projects</b>
                </div>
              </div>
              <div className="tlml-card-right">3</div>
            </div>
          </div>
          <div className="tutedude-learn-main-right">
            <img src={learn} alt="Tutedude Learn" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TutedudeLearn;
