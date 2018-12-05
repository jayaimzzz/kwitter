import React, { Component, Fragment } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader
} from "@material-ui/core";
import { connect } from "react-redux";
// import { connect } from 'react-redux';
let apiURI = "https://kwitter-api.herokuapp.com";

class Profile extends Component {
  // state = {
  //   user: {
  //     id: "",
  //     username: "",
  //     displayName: "",
  //     about: "",
  //     createdAt: "",
  //     updatedAt: ""
  //   }
  // };
  // componentDidMount() {
  //   fetch(apiURI + "/users/" + 8)
  //     .then(res => res.json())
  //     .then(res => {
  //       // this.setState({
  //       //   user: {
  //       //     id: res.user.id,
  //       //     username: res.user.username,
  //       //     displayName: res.user.displayName,
  //       //     about: res.user.about,
  //       //     createdAt: res.user.createdAt,
  //       //     updatedAt: res.user.updatedAt
  //       //   }
  //       // });
  //     });
  // }
  render() {
    return (
      <Fragment>
        <Card>
          <CardContent>
            <CardHeader title={this.props.user.displayName} />
            <span>Logged in as: {this.props.user.username}</span>
            <br />
            <span>About: {this.props.user.about}</span>
            <br />
            <span>Member since: {this.props.user.createdAt}</span>
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

const mapStateToProps = (state) => {
    return { user: state.users.users.filter(user => user.id === state.loggedInUser.id || 14)[0]}
}

const mapDispatchToProps = null;

export default connect(mapStateToProps,mapDispatchToProps)(Profile);