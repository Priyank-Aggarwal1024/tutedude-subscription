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
      ques: "What is the validity of the courses and when can I watch them?",
      ans: "You will have lifetime access to the courses and can watch the lectures anytime you want. So it is totally flexible and provides you the comfort of learning anytime anywhere. Also as the technologies progress we keep on updating our courses so you get the access to them too.",
    },
    {
      checked: false,
      ques: "Will my course validity expire after I receive the 100% Refund amount ?",
      ans: "No, you will still have the lifetime access on your courses along with mentor's support, even after you have received your 100% Refund amount.",
    },
    {
      checked: false,
      ques: "Why should I opt for Tutedude?",
      ans: "Tutedude provides you the professional curated content by Indian instructors along with live doubt solving and personal one to one mentorship which you won't find anywhere else. And amazingly, you learn for Free if you are enrolled under 100% Refund offer.",
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
          <h2 className="section-heading text-center">
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
