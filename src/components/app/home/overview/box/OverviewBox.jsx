import React from "react";

const OverviewBox = ({ title, flowerNumber, status }) => {
  return (
    <>
      <div className="box">
        <div className="right-side">
          <div className="box-topic">{title}</div>
          <div className="number">{flowerNumber}</div>
          <div className="indicator">
            <i
              className={`bx ${
                status ? "bx-up-arrow-alt" : "bx-down-arrow-alt down"
              }`}
            ></i>
            <span className="text">
              {status ? "Up" : "Down"} from yesterday
            </span>
          </div>
        </div>
        <i className="bx bx-cart-alt cart"></i>
      </div>
    </>
  );
};

export default OverviewBox;
