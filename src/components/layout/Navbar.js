import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLInks from './SignedInLinks';
import SignedOutLInks from './SignedOutLinks';
import SignedInLInksLeft from './SignedInLinksLeft';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const { auth, profile } = props;
  //console.log(auth);

  //if auth.uid is true then display SignedInLinks if not, then
  //display SingedOutLinks
  const links = auth.uid ? (
    <SignedInLInks profile={profile} />
  ) : (
    <SignedOutLInks />
  );
  const linksLeft = auth.uid ? <SignedInLInksLeft /> : console.log('');
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo"></Link>
        {links} {linksLeft}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps, null)(Navbar);
