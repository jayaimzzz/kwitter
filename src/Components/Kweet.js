import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class Kweet extends Component {
  render() {
    return (
      <Fragment>
            <div>{this.props.text}</div>
            <div>Kweeted by</div>
            <div>{this.props.userId}</div>
      </Fragment>
    );
  }
}

export default Kweet
