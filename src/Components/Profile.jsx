import React, { Component, Fragment } from "react";
import { Button, Card, CardActions, CardContent } from "@material-ui/core";
// import { connect } from 'react-redux';
// let apiURI = "https://kwitter-api.herokuapp.com"

export default class Profile extends Component {
  state = {
    user: {
      id: 8,
      username: "test8",
      displayName: "Test 8",
      about:
        "super cool test user. BA in Music History. MA in Neo Classical Music History",
      createdAt: "2018-11-30T21:52:30.932Z",
      updatedAt: "2018-11-30T21:52:30.932Z"
    }
  };
  render() {
    return (
      <Fragment>
        <Card>
          <CardContent>
            <CardHeader>{this.state.user.displayName}</CardHeader>
            <span>Logged in as: {this.state.user.username}</span>
            <span>About: {this.state.user.about}</span>
            <br />
            <span>Member since: {this.state.user.createdAt}</span>
            <br />
            <CardActions>
              <Button>Change Display Name</Button>
              <Button>Change Password</Button>
              <Button>Delete Account</Button>
            </CardActions>
          </CardContent>
        </Card>
      </Fragment>
    );
  }
}

// const maptStateToProps = (state) => {
//     // how do I get a paramarter into this for user id???
//     return { user: state.users.filter(user => user.id === )}
// }

// export default Profile;
