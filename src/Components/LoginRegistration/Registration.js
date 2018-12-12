import React, { Component } from "react";
import { Grid, Button, TextField, Typography, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import { getUsers } from "../../ActionCreators/actions";
import { API_DOMAIN } from "../../Constants";
import image from './Kweet.png';

const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: "pink",
    background: `url(${image}) no-repeat center center fixed`,
    backgroundSize: 'contain',
    height: "100vh",
    width: "100vw",
    margin: 0
  },
  Paper: {
    backgroundColor: 'rgba(245, 245, 245, .9)',
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

class Registration extends Component {
  state = {
    username: "",
    password: "",
    displayName: "",
    redirectToLogin: false
  };

  componentDidMount() {
    document.documentElement.addEventListener('keyup', this.handleKeyUp); 
  }

  componentWillUnmount() {
    document.documentElement.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = event => {
    if (event.keyCode === 13) {
      this.handleSubmit(event);
    }
  }

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
        if (!(response.data.success === false)) {
          this.props.getUsers();
          this.setState({
            redirectToLogin: true
          });
        } else {
          console.log('unable to register new user');
        }
      })
      .catch(error => {
        alert("Unable to register.  Username could be taken. Password may be terrible.")
        console.log(error);
      });
  };

  render() {
    const { classes } = this.props;

    if (this.state.redirectToLogin) {
      return <Redirect to="/login" />;
    }

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
              autoFocus={true}
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

const styledComponent = withStyles(styles)(Registration);
export default connect(
  null,
  mapDispatchToProps
)(styledComponent);
