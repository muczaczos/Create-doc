import React, { Component } from "react";
import ShortcutsPanel from "../layout/ShortcutsPanel";
import GonPanel from "../layout/GonPanel";
import { connect } from "react-redux";

export class CreateDocument extends Component {
  render() {
    const { newGon } = this.props.newGon;
    //console.log("dupa");
    //console.log(newGon.products[0].id);
    //console.log("dupa");

    return (
      <div className="doccreator">
        <ShortcutsPanel newGon={newGon} />
        <GonPanel />
        <p> {newGon.customer}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { gon } = state;
  return {
    newGon: gon,
  };
};

export default connect(mapStateToProps, null)(CreateDocument);
