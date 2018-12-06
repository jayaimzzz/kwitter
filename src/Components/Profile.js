import React, { Component, Fragment } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader
} from "@material-ui/core";
import { connect } from "react-redux";

class Profile extends Component {
  render() {
    return (
      <Fragment>
        <Card>
          <CardContent>
            {this.props.user ? (
              <Fragment>
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
              </Fragment>
            ) : null}
          </CardContent>
        </Card>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.filter(user => user.id === state.loggedInUser.id)[0]
  };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
