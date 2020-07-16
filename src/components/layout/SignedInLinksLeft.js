/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinksLeft = (props) => {
  //this.props <- don't work in functional componennt
  return (
    <ul className="left">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinksLeft;
