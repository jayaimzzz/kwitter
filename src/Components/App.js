import React, { Component, Fragment } from "react";
import { Route, Switch, NavLink, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  Header,
  Nav,
  NewPost,
  KweetList,
  UserList,
  Profile,
  TrendingList,
  Login,
  Registration,
  UserPage
} from "./index";
import { Grid, Hidden } from "@material-ui/core";

class App extends Component {
  renderMain = () => (
    <Fragment>
      <Grid container justify="center" spacing={16}>
        <Grid item>
          <Header />
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={16}>
        <Nav />
      </Grid>
      <Grid container justify="center" spacing={16}>
        <Hidden mdDown>
          <Grid item md={3} sm={9}>
            <Profile />
            <TrendingList />
          </Grid>
        </Hidden>
        <Grid item lg={6} md={7} sm={9} xs={12}>
          <NewPost />
          <KweetList />
        </Grid>
        <Grid item lg={3} md={4} sm={9} xs={12}>
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
      return <Redirect to="/login" />;
    }
  };

  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/register" render={() => <Registration />} />
          <Route exact path="/" render={this.selectPage} />
          <Route path="/users/:id" component={UserPage} />
        </Switch>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loggedInUser: state.loggedInUser
});

export default withRouter(connect(mapStateToProps)(App));
