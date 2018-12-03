import React, { Component, Fragment } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader
} from "@material-ui/core";
// import { connect } from 'react-redux';
let apiURI = "https://kwitter-api.herokuapp.com";

export default class Profile extends Component {
  state = {
    user: {
      id: "",
      username: "",
      displayName: "",
      about: "",
      createdAt: "",
      updatedAt: ""
    }
  };
  componentDidMount() {
    fetch(apiURI + "/users/" + 8)
      .then(res => res.json())
      .then(res => {
        console.log(res.user);
        this.setState({
          user: {
            id: res.user.id,
            username: res.user.username,
            displayName: res.user.displayName,
            about: res.user.about,
            createdAt: res.user.createdAt,
            updatedAt: res.user.updatedAt
          }
        });
      });
  }
  render() {
    return (
      <Fragment>
        <Card>
          <CardContent>
            <CardHeader title={this.state.user.displayName} />
            <span>Logged in as: {this.state.user.username}</span>
            <br />
            <span>About: {this.state.user.about}</span>
            <br />
            <span>Member since: {this.state.user.createdAt}</span>
            <br />
            <CardActions>
              <Button href="">Change Display Name</Button>
              <Button href="">Change Password</Button>
              <Button href="">Delete Account</Button>
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