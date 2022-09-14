import React, { Component } from "react";
import auth from "../services/authServices";

class LogOut extends Component {
  componentDidMount() {
    auth.logout();
    window.location = "/";
  }
  render() {
    return null;
  }
}

export default LogOut;
