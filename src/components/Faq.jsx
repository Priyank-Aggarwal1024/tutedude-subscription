import { useState } from "react";
import "../styles/Faq.css";
import faqclose from "../assets/faq-close.svg";
import faqopen from "../assets/faq-open.svg";
function Faq() {
  const [query, setQuery] = useState([
    {
      checked: true,
      ques: "Why should I opt for Tutedude?",
      ans: "Tutedude provides you the professional curated content by Indian instructors along with live doubt solving and personal one to one mentorship which you won't find anywhere else. And amazingly, you learn for Free if you are enrolled under 100% Refund offer.",
    },
    {
      checked: false,
      ques: "Can I get a refund for my Tutedude Plus subscription?",
      ans: "Tutedude plus subscriptions are non-refundable. Once a subscription is purchased, cancellations and refunds are not allowed.",
    },
  ]);
  const handleClick = (idx) => {
    const newquery = query.map((item, id) => {
      if (id == idx) {
        item.checked = !item.checked;
        return item;
      } else {
        item.checked = false;
        return item;
      }
    });
    setQuery(newquery);
  };
  return (
    <>
      <div className="faq-section">
        <div className="faq-inner">
          <div className="div-circle-design faq-circle-design"></div>

          <h2 className="section-heading faq-heading text-center">
            Frequently Asked <b className="text-golden">Questions</b>
          </h2>
          <div className="faq-main">
            {query.map((item, idx) => (
              <div className="faq-div" key={idx}>
                <div className="faq-div-top" onClick={() => handleClick(idx)}>
                  <div className={`faq-ques ${item.checked && "open"}`}>
                    {item.ques}
                  </div>
                  <img
                    src={item.checked ? faqclose : faqopen}
                    alt="Open Close Icon"
                  />
                </div>
                {item.checked && (
                  <div className="faq-div-bottom">{item.ans}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
