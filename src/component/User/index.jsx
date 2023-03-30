import React, { Component } from "react";
import PropTypes from "prop-types";

import "./user.scss";
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    };
  }

  render() {
    return (
      <React.Fragment>
        <h4> User Data {this.props.params.number}</h4>
      </React.Fragment>
    );
  }
}

User.propTypes = {
};
export default User;
