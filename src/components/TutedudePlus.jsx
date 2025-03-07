import "../styles/TutedudePlus.css";
import tpleft from "../assets/tp-left.svg";
import tpright from "../assets/tp-right.svg";
import logo from "../assets/logo-1.svg";
function TutedudePlus() {
  return (
    <>
      <div className="tutedude-plus">
        <div className="tutedude-plus-inner">
          <img
            src={tpleft}
            alt="Tutedude Plus Design"
            className="tutedude-plus-design-left"
          />
          <div className="tp-main">
            <div className="tp-main-top">
              <img src={logo} alt="Logo" />
              <div className="tp-main-top-button">Plus</div>
            </div>
            <div className="tp-main-bottom">
              <div className="tp-mb-top">
                What are you waiting for get <b>Tutedude Plus</b>
              </div>
              <div className="tp-mb-middle">Start Subscription</div>
              <div className="tp-mb-bottom">
                <span className="tp-mbb-price">₹1200/year </span>
                <span className="tp-mbb-price-cut"> ₹10,000/year</span>
              </div>
            </div>
          </div>
          <img
            src={tpright}
            alt="Tutedude Plus Design"
            className="tutedude-plus-design-right"
          />
        </div>
      </div>
    </>
  );
}

export default TutedudePlus;
