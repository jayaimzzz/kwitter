import React, { Component, Fragment } from "react";
import { Card, CardActions, CardContent, CardHeader, CardMedia } from "@material-ui/core";
import { connect } from "react-redux";
import ProfileSettings from "./ProfileSettings";
import ImageUpload from "./ImageUpload";
import { updateUser, deleteUser } from "../ActionCreators/actions";

class Profile extends Component {
  handleDeleteUser = () => this.props.deleteUser();

  render() {
    return (
      <Fragment>
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
                {
                  this.props.image
                  ? <CardMedia image={`https://kwitter-api.herokuapp.com/users/${this.props.user.id}/picture`} style={{height: 500}}/>
                  : <CardMedia image={`https://picsum.photos/${this.props.user.id}`} style={{height: 500}} />
                }
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
    token: state.loggedInUser.token,
    image: state.image
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
