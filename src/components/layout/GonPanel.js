import React from "react";
import GonCustomButton from "./GonCustomButton";

const GonPanel = (props) => {
  return (
    <div className="gpanel">
      <div className="functions center">
        <h5>Functions Panel</h5>
        <div className="gelement">
          <GonCustomButton text="Add" />
          <GonCustomButton text="Del" />
          <GonCustomButton text="Save" />
          <GonCustomButton text="Print" />
        </div>
      </div>
      <div className="gon center">
        <h5>GON</h5>
        <div className="gelement">
          <label for="pet-select">Choose a product:</label>
        </div>
      </div>
    </div>
  );
};

export default GonPanel;
