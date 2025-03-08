import { useEffect, useState } from "react";
import greview1 from "../assets/review/greview1.svg";

import greview2 from "../assets/review/greview2.svg";
import greview3 from "../assets/review/greview3.svg";
import greview4 from "../assets/review/greview4.svg";
import greview5 from "../assets/review/greview5.svg";
import greview6 from "../assets/review/greview6.svg";
import greview7 from "../assets/review/greview7.svg";
import greview8 from "../assets/review/greview8.svg";
import greview9 from "../assets/review/greview9.svg";
import greview10 from "../assets/review/greview10.svg";
import greview11 from "../assets/review/greview11.svg";
function GoogleReview() {
  const [hide, setHide] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
    return window.removeEventListener("resize", () => {});
  });
  useEffect(() => {
    if (width < 768) {
      setHide(false);
    }
  }, [width]);

  return (
    <div className="tutedude-ptt-bottom-images-outer">
      <div
        className="tutedude-ptt-bottom-images"
        style={{
          height: hide ? "900px" : "fit-content",
          overflowY: hide ? "hidden" : "auto",
          gridTemplateColumns: width <= 580 ? "repeat(4,1fr)" : "repeat(3,1fr)",
        }}
      >
        <div className="tutedude-ptt-bottom-images-column">
          <img
            src={greview1}
            alt="Google Review 1"
            className="tutedude-pttbi-image"
          />
          <img
            src={greview2}
            alt="Google Review 2"
            className="tutedude-pttbi-image"
          />

          <img
            src={greview3}
            alt="Google Review 3"
            className="tutedude-pttbi-image"
          />
          {width > 580 && (
            <img
              src={greview4}
              alt="Google Review 4"
              className="tutedude-pttbi-image"
            />
          )}
        </div>
        <div className="tutedude-ptt-bottom-images-column">
          <img
            src={greview5}
            alt="Google Review 5"
            className="tutedude-pttbi-image"
          />
          <img
            src={greview6}
            alt="Google Review 6"
            className="tutedude-pttbi-image"
          />
          <img
            src={greview7}
            alt="Google Review 7"
            className="tutedude-pttbi-image"
          />
          {width > 580 && (
            <img
              src={greview8}
              alt="Google Review 8"
              className="tutedude-pttbi-image"
            />
          )}
        </div>
        <div className="tutedude-ptt-bottom-images-column">
          <img
            src={greview9}
            alt="Google Review 9"
            className="tutedude-pttbi-image"
          />
          <img
            src={greview10}
            alt="Google Review 10"
            className="tutedude-pttbi-image"
          />
          {width > 580 && (
            <img
              src={greview11}
              alt="Google Review 11"
              className="tutedude-pttbi-image"
            />
          )}
        </div>
        {width <= 580 && (
          <div className="tutedude-ptt-bottom-images-column">
            <img
              src={greview4}
              alt="Google Review 4"
              className="tutedude-pttbi-image"
            />
            <img
              src={greview8}
              alt="Google Review 8"
              className="tutedude-pttbi-image"
            />
          </div>
        )}
      </div>
      {hide && (
        <div className="tutedude-ptt-bottom-images-hide">
          <span onClick={() => setHide(!hide)}>Show More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            onClick={() => setHide(!hide)}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.16015 10.1378C8.35279 9.94525 8.61403 9.83706 8.88643 9.83706C9.15882 9.83706 9.42007 9.94525 9.61271 10.1378L12.9955 13.5206L16.3783 10.1378C16.4731 10.0397 16.5864 9.96146 16.7118 9.90762C16.8371 9.85378 16.9719 9.82544 17.1083 9.82426C17.2447 9.82307 17.38 9.84906 17.5062 9.90072C17.6325 9.95237 17.7472 10.0286 17.8436 10.1251C17.9401 10.2216 18.0164 10.3363 18.068 10.4625C18.1197 10.5887 18.1457 10.724 18.1445 10.8604C18.1433 10.9968 18.1149 11.1316 18.0611 11.2569C18.0073 11.3823 17.929 11.4956 17.8309 11.5904L13.7218 15.6995C13.5292 15.8921 13.2679 16.0003 12.9955 16.0003C12.7231 16.0003 12.4619 15.8921 12.2692 15.6995L8.16015 11.5904C7.96756 11.3978 7.85938 11.1365 7.85938 10.8641C7.85938 10.5917 7.96756 10.3305 8.16015 10.1378Z"
              fill="#fff"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

export default GoogleReview;
