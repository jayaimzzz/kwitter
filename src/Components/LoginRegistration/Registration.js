import React, { Component } from "react";
import { Grid, Button, TextField, Typography, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import { getUsers } from "../../ActionCreators/actions";
import { API_DOMAIN } from "../../Constants";

const styles = {
  root: {
    flexGrow: 1,
    background: "lightgreen",
    height: "100vh"
  },
  Paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 500,
    padding: "4vw"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  }
};

class Login extends Component {
  state = {
    username: "",
    password: "",
    displayName: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post(API_DOMAIN + "/auth/register", {
        username: this.state.username,
        password: this.state.password,
        displayName: this.state.displayName
      })
      .then(response => {
          console.log('new user response: ', response.data);
        if (!(response.data.success === false)) {
          this.props.getUsers();
        } else {
          console.log('unable to register new user');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        className={classes.root}
        justify="center"
        alignItems="center"
      >
        <Paper className={classes.Paper}>
          <Typography variant="h1">Register</Typography>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField
              id="displayName"
              label="DisplayName"
              value={this.state.displayName}
              onChange={this.handleChange("displayName")}
            />
            <TextField
              id="username"
              label="Username"
              value={this.state.username}
              onChange={this.handleChange("username")}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              onChange={this.handleChange("password")}
            />
            <Button label="Login" onClick={this.handleSubmit}>
              Register
            </Button>
          </form>
          <Link to="/login">Log in as an established user</Link>
        </Paper>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers())
  };
};

const styledComponent = withStyles(styles)(Login);
export default connect(
  null,
  mapDispatchToProps
)(styledComponent);
