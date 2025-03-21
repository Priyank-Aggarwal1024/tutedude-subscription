import "../styles/InternshipAssistance.css";
import ia1 from "../assets/ia1.svg";
import ia2 from "../assets/ia2.svg";
import ia3 from "../assets/ia3.svg";
// import cardoval from "../assets/card-oval.svg";

function InternshipAssistance() {
  return (
    <>
      <div className="div-circle-design internship-assistance-circle-design"></div>
      <div className="internship-assistance">
        <div className="internship-assistance-inner">
          <div className="internship-assistance-top">
            <h2 className="section-heading">
              <span className="text-golden fw-700">Internship Assistance</span>{" "}
              with Resume Building in One Place
            </h2>
          </div>
          <div className="internship-assistance-bottom">
            <div className="iab-card">
              <div className="iab-top">
                <img src={ia1} alt="Internship Assistance Icon" />
              </div>
              <div className="iab-bottom">
                <div className="iabb-head">Resume Building:</div>
                <div className="iabb-subhead">
                  Elevate your career with our personalized resume building
                  feature.
                </div>
              </div>
              <span className="internship-assistance-ovaldesign"></span>
            </div>
            <div className="iab-card">
              <div className="iab-top">
                <img src={ia2} alt="Internship Assistance Icon" />
              </div>
              <div className="iab-bottom">
                <div className="iabb-head">Job Opportunities: </div>
                <div className="iabb-subhead">
                  Access exclusive job opportunities shared directly with you.
                </div>
              </div>
              <span className="internship-assistance-ovaldesign"></span>
            </div>
            <div className="iab-card">
              <div className="iab-top">
                <img src={ia3} alt="Internship Assistance Icon" />
              </div>
              <div className="iab-bottom">
                <div className="iabb-head">Career Support: </div>
                <div className="iabb-subhead">
                  Benefit from our guidance and tips to enhance your job search
                  and career prospects.
                </div>
              </div>
              <span className="internship-assistance-ovaldesign"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InternshipAssistance;
