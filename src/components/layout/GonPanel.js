import React from "react";
import GonCustomButton from "./GonCustomButton";
import Select from "react-dropdown-select";

const GonPanel = (props) => {
  var values = ["dupa", "kupa", "zupa"];
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
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
          <Select
            options={options}
            onChange={(values) => this.setValues(values)}
          />

          {/*}  <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
  /> */}
        </div>
      </div>
    </div>
  );
};

export default GonPanel;
