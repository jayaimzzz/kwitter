import React, { Component, Fragment } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import {
  Header,
  Nav,
  NewPost,
  KweetList,
  UserList,
  Profile,
  TrendingList,
  Login,
  Registration
} from "./index";
import { Grid } from "@material-ui/core";

class App extends Component {
  renderMain = () => (
    <Fragment>
      <Grid container justify="center" spacing={16}>
        <Grid item>
          <Header />
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={16}>
        <Grid item>
          <Nav />
        </Grid>
      </Grid>
      <Grid container spacing={16}>
        <Grid item xs={3}>
          <Profile />
          <TrendingList />
        </Grid>
        <Grid item xs={5}>
          <NewPost />
          <KweetList />
        </Grid>
        <Grid item xs={3}>
          <UserList />
        </Grid>
      </Grid>
      <NavLink exact to="/login">
        Login
      </NavLink>
    </Fragment>
  );

  selectPage = () => {
    if (this.props.loggedInUser) {
      return this.renderMain();
    } else {
      return <Login history={this.props.history} />
    }

  };

  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/login" render={() => <Login history={this.props.history} />} />
          <Route exact path="/register" render={() => <Registration />} />
          <Route exact path="/" render={this.selectPage} />
          <Route path="/users/:id" render={() => <p>user</p>} />
        </Switch>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedInUser: state.loggedInUser
});

export default connect(mapStateToProps)(App);