import React, { Component } from "react";
import { connect } from "react-redux";

import User from "./User";
import { getUsers, getUserMessages } from "../ActionCreators/actions";
import { history } from '../index';

const styles = {
  UserList: {
    margin: "auto",
    color: "white",
    textAlign: "center",
    height: "80vh",
    width: '35vh',
    overflow: 'scroll',
    position: 'fixed'
  },
  h1: {
    background: '#38a445',
    color: 'white',
    lineHeight: '60px',
    position: 'fixed',
    width: 'inherit',
    marginTop: 0,
    zIndex: 1
  }
};

class UserList extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  handleUserClick = id => event => {
    history.push('/users/' + id);
  }

  render() {
    return (
      <div style={styles.UserList}>
        <h1 style={styles.h1}>Users</h1>
        <div style={{marginTop: '60px'}}>
        {this.props.users.map(user => (
          <User key={user.id} displayName={user.displayName} onClick={this.handleUserClick(user.id)}/>
        ))}
        </div>
      </div>
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
    },
    getUserMessages: (id) => {
      dispatch(getUserMessages(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
