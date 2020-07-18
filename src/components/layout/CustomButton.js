import React, { Component } from "react";
import { addCustomer } from "../../store/actions/documentActions";
import { connect } from "react-redux";

export class CustomButton extends Component {
  handleClick = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.addCustomer(e.target.innerText);
  };

  render() {
    return (
      <button className="custombutton btn" onClick={this.handleClick}>
        {this.props.text}
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCustomer: (customer) => dispatch(addCustomer(customer)),
  };
};

export default connect(null, mapDispatchToProps)(CustomButton);
