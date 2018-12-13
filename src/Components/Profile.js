import React, { Component, Fragment } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia
} from "@material-ui/core";
import { connect } from "react-redux";
import ProfileSettings from "./ProfileSettings";
import ImageUpload from "./ImageUpload";
import { Nav } from "./index";
import { updateUser, deleteUser } from "../ActionCreators/actions";
import moment from "moment";

class Profile extends Component {
  handleDeleteUser = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      this.props.deleteUser();
    }
  };

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
                    {this.props.loggedInUsersProfile && (
                      <Fragment>
                        <ImageUpload token={this.props.token} />
                        <ProfileSettings
                          user={this.props.user}
                          updateUser={this.props.updateUser}
                          token={this.props.token}
                          handleDeleteUser={this.handleDeleteUser}
                        />
                      </Fragment>
                    )}
                  </CardActions>
                </div>
                {this.props.loggedInUsersProfile && this.props.image ? (
                  <CardMedia
                    image={`https://kwitter-api.herokuapp.com/users/${
                      this.props.user.id
                    }/picture?random=${this.props.image}`}
                    style={{ backgroundSize: "contain" }}
                  >
                    <img
                      src={`https://kwitter-api.herokuapp.com/users/${
                        this.props.user.id
                      }/picture?random=${this.props.image}`}
                      style={{ visibility: "hidden", maxWidth: "100%" }}
                      alt="hidden"
                    />
                  </CardMedia>
                ) : (
                  <CardMedia
                    image={`https://picsum.photos/${this.props.user.id}`}
                    style={{ backgroundSize: "contain" }}
                  >
                    <img
                      src={`https://picsum.photos/${this.props.user.id}`}
                      style={{ visibility: "hidden", maxWidth: "100%" }}
                      alt="hidden"
                    />
                  </CardMedia>
                )}
                <span>Logged in as: {this.props.user.username}</span>
                <br />
                <span>About: {this.props.user.about}</span>
                <br />
                <span>
                  Member since: {moment(this.props.user.createdAt).fromNow()}
                </span>
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
  const loggedInUsersProfile = id == state.loggedInUser.id ? true : false;
  return {
    user: state.users.filter(user => user.id == id)[0],
    token: state.loggedInUser.token,
    image: state.image,
    loggedInUsersProfile: loggedInUsersProfile
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
