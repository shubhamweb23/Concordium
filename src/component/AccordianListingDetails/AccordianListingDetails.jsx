import React, { useState } from "react";

import "./AccordiaListDetails.css";
import assetImage from "../../assets";

const AccordiaListingDetails = (props) => {
  const [expand, setExpand] = useState(false);
  return (
    <div className={`list-style ${expand ? "expand" : ""}`}>
      <div className="display-flex-spacebetween">
        <span className="font-size-24px font-weight-700 list-name">
          {props.title}&nbsp;
          {expand && (
            <span
              className="unit-style"
              style={{ fontSize: 18, display: "flex", alignItems: "center" }}
            >
              10%
            </span>
          )}
        </span>
        <button
          className="list-button"
          onClick={() => {
            setExpand(!expand);
          }}
        >
          <img
            // src={expand ? {} : PlusIcon}
            src={expand ? assetImage.minusSign : assetImage.plusSign}
            height={20}
            width={20}
            alt="refresh button"
          />
        </button>
      </div>
      {expand && (
        <div>
          <div className="display-flex-spacebetween box-one">
            <span className="font-size-18px">Name</span>
            <span className="font-size-18px">Share</span>
          </div>
          <div className="display-flex-spacebetween box-two">
            <span className="font-size-18px">FinVobfi4t...X57xHcTWLfW</span>
            <span className="font-size-18px">100%</span>
          </div>
        </div>
      )}
    </div>
  );
};
export default AccordiaListingDetails;
