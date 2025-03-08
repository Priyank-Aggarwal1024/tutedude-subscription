import "../styles/Certificate.css";
import certificate from "../assets/certificate.svg";
import cld from "../assets/cld.jpg";
import Marquee from "react-fast-marquee";
import { courses } from "../courses";
function Certificate() {
  return (
    <>
      <div className="certificate">
        <h2 className="section-heading text-center">
          Earn professional{" "}
          <span className="text-golden fw-700">Certifications</span>
        </h2>
        <div className="certificate-main">
          <div className="certificate-circle-design"></div>
          <img src={cld} alt="CLD" className="certificate-cld" />
          <img
            src={certificate}
            alt="Certificate"
            className="certificate-image"
          />
          <img src={cld} alt="CRD" className="certificate-crd" />
        </div>
      </div>
      <div className="certificate-marquee">
        <Marquee>
          <div className="certificate-marquee-inner">
            {courses.map((item) => (
              <div className="certificate-marquee-text" key={item}>
                {item.course_name}
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
}

export default Certificate;
