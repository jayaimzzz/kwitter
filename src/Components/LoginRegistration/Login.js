import React, { Component } from "react";
import { Grid, Button, TextField, Typography, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { logInUser } from "../../ActionCreators/actions";

const styles = {
  root: {
    flexGrow: 1,
    background: "pink",
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
    redirectToRegister: false,
    redirectToHome: false
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.logInUser({
      username: this.state.username,
      password: this.state.password
    });
    this.setState({
      redirectToHome: true
    });
  };

  register = () => {
    this.setState({
      redirectToRegister: true
    });
  };

  render() {
    const { classes } = this.props;

    if (this.props.loggedInUser) {
      return <Redirect to="/" />;
    }

    return (
      <Grid
        container
        className={classes.root}
        justify="center"
        alignItems="center"
      >
        <Paper className={classes.Paper}>
          <Typography variant="h1">Login</Typography>
          <form className={classes.form} noValidate autoComplete="off">
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
              Login
            </Button>
          </form>
          <Link to="/register" onClick={this.register}>
            Register as a new user
          </Link>
        </Paper>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logInUser: userLogin => dispatch(logInUser(userLogin))
  };
};

const mapStateToProps = state => ({
  loggedInUser: state.loggedInUser
});

const styledComponent = withStyles(styles)(Login);
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(styledComponent)
);
