import React, { Component, Fragment } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import {
  Header,
  Nav,
  NewPost,
  KweetList,
  UserList,
  Profile,
  TrendingList,
  Login
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
      <NavLink exact to="/login" >Login</NavLink>
    </Fragment>
  );

  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/register" render={() => <p>register</p>} />
          <Route exact path="/" render={this.renderMain} />
          <Route path="/users/:id" render={() => <p>user</p>} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
