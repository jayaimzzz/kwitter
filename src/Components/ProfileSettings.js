import React, { Component, Fragment } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField
} from "@material-ui/core";
import { Settings } from "@material-ui/icons";

class ProfileSettings extends Component {
  state = {
    open: false,
    changePassword: false,
    displayName: this.props.user.displayName,
    about: this.props.user.about,
    password: ""
  };

  handleToggleSettings = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  handleTogglePassword = () => {
    this.setState(prevState => ({
      changePassword: !prevState.changePassword
    }));
  };

  handleChange = name => ({ target: { value } }) =>
    this.setState({
      [name]: value
    });

  handleSubmit = () => {
    this.handleToggleSettings();
    const update = { displayName: this.state.displayName };
    if (this.state.about) {
      update.about = this.state.about;
    }
    this.props.updateUser(this.props.token, update);
  };

  handlePasswordSubmit = () => {
    this.handleTogglePassword();

    const update = { password: this.state.password };
    this.props.updateUser(this.props.token, update);
  };

  render() {
    const { open, changePassword } = this.state;

    return (
      <Fragment>
        <IconButton onClick={this.handleToggleSettings} size="small">
          <Settings />
        </IconButton>
        <Dialog
          open={open}
          onClose={this.handleToggleSettings}
          fullWidth
          maxWidth="xs"
        >
          <DialogTitle>User Settings</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please adjust your profile information
            </DialogContentText>
            <form>
              <TextField
                label="DisplayName"
                value={this.state.displayName}
                onChange={this.handleChange("displayName")}
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
                multiline
                rows="4"
                label="About"
                value={this.state.about}
                onChange={this.handleChange("about")}
                margin="normal"
                fullWidth
              />
              <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  onClick={this.handleTogglePassword}
                  variant="contained"
                  color="primary"
                >
                  Change Password
                </Button>
                <Button
                  onClick={this.handleSubmit}
                  color="secondary"
                  disabled={!this.state.displayName}
                >
                  Save Changes
                </Button>
              </div>
              <Button onClick={this.props.handleDeleteUser} color="secondary">
                Delete User
              </Button>
            </form>
            <Dialog
              open={changePassword}
              onClose={this.handleTogglePassword}
              fullWidth
              maxWidth="xs"
            >
              <DialogTitle>Password</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please enter your new password
                </DialogContentText>
                <form>
                  <TextField
                    label="Password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange("password")}
                    margin="normal"
                    fullWidth
                  />
                  <Button
                    onClick={this.handlePasswordSubmit}
                    color="secondary"
                    disabled={!this.state.password}
                  >
                    Save Changes
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

export default ProfileSettings;
