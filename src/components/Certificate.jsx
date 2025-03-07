import "../styles/Certificate.css";
import certificate from "../assets/certificate.svg";
import cld from "../assets/cld.svg";
import crd from "../assets/crd.svg";
import Marquee from "react-fast-marquee";
function Certificate() {
  const marqueeText = [
    "MERN Stack",
    "Data Science",
    "JAVA",
    "UI/UX Designer",
    "Web development",
    "Digital Marketing",
    "Python",
  ];
  return (
    <>
      <div className="certificate">
        <h2 className="section-heading text-center">
          Earn professional <span className="text-golden">Certifications</span>
        </h2>
        <div className="certificate-main">
          <img src={cld} alt="CLD" className="certificate-cld" />
          <img
            src={certificate}
            alt="Certificate"
            className="certificate-image"
          />
          <img src={crd} alt="CRD" className="certificate-crd" />
        </div>
      </div>
      <div className="certificate-marquee">
        <Marquee>
          <div className="certificate-marquee-inner">
            {marqueeText.map((item) => (
              <div className="certificate-marquee-text" key={item}>
                {item}
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
}

export default Certificate;
