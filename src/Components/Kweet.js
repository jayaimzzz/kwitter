import React, { Component, Fragment } from "react";

class Kweet extends Component {
  render() {
    return (
      <Fragment>
            <div>{this.props.text}</div>
            <div>Kweeted by</div>
            <div>{this.props.username}</div>
            <br></br>
      </Fragment>
    );
  }
}

export default Kweet
