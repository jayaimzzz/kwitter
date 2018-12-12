import React, { Component, Fragment } from "react";
import { Card, CardActions, CardContent, CardHeader } from "@material-ui/core";
import { connect } from "react-redux";
import ProfileSettings from "./ProfileSettings";
import ImageUpload from "./ImageUpload";
import { Nav } from "./index";
import { updateUser, deleteUser } from "../ActionCreators/actions";

class Profile extends Component {
  handleDeleteUser = () => this.props.deleteUser();

  render() {
    const fullPage = !this.props.notFullPage;

    return (
      <Fragment>
        {fullPage && <Nav />}
        {fullPage && <div style={{ height: 70 }} />}
        <Card>
          <CardContent>
            {this.props.user ? (
              <Fragment>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <CardHeader title={this.props.user.displayName} />
                  <CardActions>
                    <ImageUpload token={this.props.token} />
                    <ProfileSettings
                      user={this.props.user}
                      updateUser={this.props.updateUser}
                      token={this.props.token}
                      handleDeleteUser={this.handleDeleteUser}
                    />
                  </CardActions>
                </div>
                <span>Logged in as: {this.props.user.username}</span>
                <br />
                <span>About: {this.props.user.about}</span>
                <br />
                <span>Member since: {this.props.user.createdAt}</span>
                <br />
              </Fragment>
            ) : null}
          </CardContent>
        </Card>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  const id = props.id ? props.id : state.loggedInUser.id;
  return {
    user: state.users.filter(user => user.id == id)[0],
    token: state.loggedInUser.token
  };
};

const mapDispatchToProps = dispatch => ({
  updateUser: (token, newInfo) => dispatch(updateUser(token, newInfo)),
  deleteUser: () => dispatch(deleteUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
