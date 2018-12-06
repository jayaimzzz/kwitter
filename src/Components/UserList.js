import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import User from "./User";
import { getUsers } from "../ActionCreators/actions";

const styles = {
  UserList: {
    margin: "auto",
    background: "#38a445",
    color: "white",
    textAlign: "center",
    height: "70vh"
  },
  h1: {
    background: '#38a445',
    color: 'white'
  }
};

class UserList extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <Fragment style={styles.UserList}>
        <h1 style={styles.h1}>Users</h1>
        {this.props.users.map(user => (
          <User key={user.id} displayName={user.displayName} />
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};
const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => {
      dispatch(getUsers());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
