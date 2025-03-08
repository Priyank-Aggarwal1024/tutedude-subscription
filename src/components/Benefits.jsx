import "../styles/Benefits.css";
import b1 from "../assets/b1.svg";
import b2 from "../assets/b2.svg";
import b3 from "../assets/b3.svg";
import b4 from "../assets/b4.svg";
import b5 from "../assets/b5.svg";
import b6 from "../assets/b6.svg";
import b7 from "../assets/b7.svg";
import b8 from "../assets/b8.svg";
function Benefits() {
  return (
    <>
      <div className="benefits">
        <div className="div-circle-design benefits-circle-design"></div>
        <div className="benefits-inner">
          <h2 className="section-heading benefits-heading">
            <span className="text-golden fw-700">Exclusive Benefits</span>{" "}
            <span>for you</span>
          </h2>
          <div className="benefits-top">
            <div className="benefits-top-card">
              <div className="benefits-tc-icon">
                <img src={b1} alt="Benefits Card Icon" />
              </div>
              <div className="benefits-tc-text">Explore 30+ courses</div>
            </div>
            <div className="benefits-top-card">
              <div className="benefits-tc-icon">
                <img src={b2} alt="Benefits Card Icon" />
              </div>
              <div className="benefits-tc-text">
                Prepared by Industry experts
              </div>
            </div>
            <div className="benefits-top-card">
              <div className="benefits-tc-icon">
                <img src={b3} alt="Benefits Card Icon" />
              </div>
              <div className="benefits-tc-text">Learn anytime anywhere</div>
            </div>
            <div className="benefits-top-card">
              <div className="benefits-tc-icon">
                <img src={b4} alt="Benefits Card Icon" />
              </div>
              <div className="benefits-tc-text">Instant mentor support</div>
            </div>
          </div>
          <div className="benefits-bottom">
            <div className="benefits-bottom-card">
              <div className="benefits-bc-icon">
                <img src={b5} alt="Benefits Section Icon" />
              </div>
              <div className="benefits-bc-text">
                Learn from basics to advance
              </div>
            </div>
            <div className="benefits-bottom-card">
              <div className="benefits-bc-icon">
                <img src={b6} alt="Benefits Section Icon" />
              </div>
              <div className="benefits-bc-text">
                Dedicated placement support
              </div>
            </div>
            <div className="benefits-bottom-card">
              <div className="benefits-bc-icon">
                <img src={b7} alt="Benefits Section Icon" />
              </div>
              <div className="benefits-bc-text">
                Build experience with live projects
              </div>
            </div>
            <div className="benefits-bottom-card">
              <div className="benefits-bc-icon">
                <img src={b8} alt="Benefits Section Icon" />
              </div>
              <div className="benefits-bc-text">
                One-year access to All courses{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Benefits;
