import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Kweet from "./Kweet";

const styles = {
  KweetList: {
    margin: "auto",
    marginTop: 50,
    background: "#493154",
    color: "white",
    textAlign: "center"
    // width: "40vw",
    // height: "60vh"
  }
};

// const KweetList = props => <div style={styles.KweetList}>The KweetList</div>;
class KweetList extends Component {
  render() {
    console.log(this.props.messages.messages);
    return (
      <Fragment>
        <h1 style={styles.KweetList}>Kweet Feed</h1>
        {this.props.messages.messages.map(message => (
          <Kweet key={message.id} text={message.text} userId={message.userId} />
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { messages: state.messages };
};
const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KweetList);
