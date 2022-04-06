import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/signup/sign-up.component";

import "./authentication.styles.scss";

const Authentication = ({ currentUser }) => {
  if (currentUser) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.user,
  };
};

export default connect(mapStateToProps)(Authentication);
