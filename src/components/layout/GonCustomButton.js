import React, { Component } from "react";
import { connect } from "react-redux";

export class GonCustomButton extends Component {
  handleClick = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <button className="goncustombutton btn" onClick={this.handleClick}>
        {this.props.text}
      </button>
    );
  }
}

export default GonCustomButton;
