import React from "react";
import "../styles//best.css";
const imageBaseURL = "https://storage.googleapis.com/test694/Images";

const CheckPink = `${imageBaseURL}/checkbuttonpink.webp`;
const CheckGray = `${imageBaseURL}/checkbuttongray.webp`;

function Best(props) {
  return (
    <section className="best-section best-section-best">
      <h2 className="best-heading section-heading text-center">
        Why are we <span className="text-golden">the Best?</span>
      </h2>
      <table className="best-best-table">
        <thead>
          <tr className="best-best-table-header best-table-row-1">
            <td className="best-table-data best-table-data-1-1">Features</td>
            <td className="best-table-data best-table-data-1-2">
              Recorded Class
            </td>
            <td className="best-table-data best-table-data-1-3">Live Class</td>
            <td className="best-table-data best-table-data-1-4">
              Tute<span className="best-tute-dude-space"> </span>dude
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="best-table-row best-table-row-2">
            <td className="best-table-data best-table-data-2-1">
              Afford<span className="best-tute-dude-space-2"> </span>
              ability
            </td>
            <td className="best-table-data best-table-data-2-2">
              <img className="best-check-pink" src={CheckPink} alt="Checked" />
            </td>
            <td className="best-table-data best-table-data-2-3">
              <img
                className="best-check-gray"
                src={CheckGray}
                alt="UnChecked"
              />
            </td>
            <td className="best-table-data best-table-data-2-4">
              <img className="best-check-pink" src={CheckPink} alt="Checked" />
            </td>
          </tr>
          <tr className="best-table-row best-table-row-3">
            <td className="best-table-data best-table-data-3-1">
              Learning Flexibility
            </td>
            <td className="best-table-data best-table-data-3-2">
              <img className="best-check-pink" src={CheckPink} alt="Checked" />
            </td>
            <td className="best-table-data best-table-data-3-3">
              <img
                className="best-check-gray"
                src={CheckGray}
                alt="UnChecked"
              />
            </td>
            <td className="best-table-data best-table-data-3-4">
              <img className="best-check-pink" src={CheckPink} alt="Checked" />
            </td>
          </tr>
          <tr className="best-table-row best-table-row-4">
            <td className="best-table-data best-table-data-4-1">
              Instant Doubt Solving
            </td>
            <td className="best-table-data best-table-data-4-2">
              <img
                className="best-check-gray"
                src={CheckGray}
                alt="UnChecked"
              />
            </td>
            <td className="best-table-data best-table-data-4-3">
              <img className="best-check-pink" src={CheckPink} alt="Checked" />
            </td>
            <td className="best-table-data best-table-data-4-4">
              <img className="best-check-pink" src={CheckPink} alt="Checked" />
            </td>
          </tr>
          <tr className="best-table-row best-table-row-5">
            <td className="best-table-data best-table-data-5-1">
              Personal Mentorship
            </td>
            <td className="best-table-data best-table-data-5-2">
              <img
                className="best-check-gray"
                src={CheckGray}
                alt="UnChecked"
              />
            </td>
            <td className="best-table-data best-table-data-5-3">
              <img
                className="best-check-gray"
                src={CheckGray}
                alt="UnChecked"
              />
            </td>
            <td className="best-table-data best-table-data-5-4">
              <img className="best-check-pink" src={CheckPink} alt="Checked" />
            </td>
          </tr>
          <tr className="best-table-row best-table-row-6">
            <td className="best-table-data best-table-data-6-1">
              Dedicated Projects
            </td>
            <td className="best-table-data best-table-data-6-2">
              <img className="best-check-pink" src={CheckPink} alt="Checked" />
            </td>
            <td className="best-table-data best-table-data-6-3">
              <img className="best-check-pink" src={CheckPink} alt="Checked" />
            </td>
            <td className="best-table-data best-table-data-6-4">
              <img className="best-check-pink" src={CheckPink} alt="Checked" />
            </td>
          </tr>
          <tr className="best-table-row best-table-row-7">
            <td className="best-table-data best-table-data-7-1">
              Guaranteed Paid Internship Tracks
            </td>
            <td className="best-table-data best-table-data-7-2">
              <img
                className="best-check-gray"
                src={CheckGray}
                alt="UnChecked"
              />
            </td>
            <td className="best-table-data best-table-data-7-3">
              <img
                className="best-check-gray"
                src={CheckGray}
                alt="UnChecked"
              />
            </td>
            <td className="best-table-data best-table-data-7-4">
              <img className="best-check-pink" src={CheckPink} alt="Checked" />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Best;
