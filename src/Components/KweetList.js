import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Kweet from "./Kweet";
import { getMessages } from "../ActionCreators/actions";

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

class KweetList extends Component {
  componentDidMount() {
    this.props.getMessages();
  }

  render() {
    return (
      <Fragment>
        <h1 style={styles.KweetList}>Kweet Feed</h1>
          {this.props.messages.map(message => {
          let indexOfUser = this.props.users.findIndex(
            user => user.id === message.userId
          );
          let user = this.props.users[indexOfUser];
          let userDisplayName = user ? user.displayName : "anon";
          return (
            <Kweet
              key={message.id}
              text={message.text}
              createdAt={message.createdAt}
              likes={message.likes}
              username={userDisplayName}
            />
          );
        })}
      </Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    messages: props.id ? state.messages.filter(message => message.userId == props.id) : state.messages,
    users: state.users
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getMessages: () => {
      dispatch(getMessages());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KweetList);
