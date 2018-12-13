import React, { Component, Fragment } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  Nav,
  NewPost,
  KweetList,
  UserList,
  Profile,
  Login,
  Registration
} from "./index";
import { Grid, Hidden } from "@material-ui/core";
import { getMessages } from "../ActionCreators/actions";
import { logout } from "../ActionCreators/actions";

class App extends Component {
  componentDidMount = () => {
    window.addEventListener("scroll", this.loadMoreKweets);
  };

  loadMoreKweets = () => {
    let windowRelativeBottom = document.documentElement.getBoundingClientRect()
      .bottom;
    if (windowRelativeBottom <= document.documentElement.clientHeight + 300) {
      this.props.getMessages(this.props.messageOffset);
    }
  };

  handleLogout = () => {
    this.props.logout(this.props.loggedInUser.token);
  };

  renderMain = ({ filter }) => {
    return (
      <Fragment>
        <Grid
          container
          justify="center"
          spacing={16}
          style={{ marginTop: "10vh" }}
        >
          <Nav logout={this.handleLogout}/>
        </Grid>
        <Grid container justify="center" spacing={16}>
          <Hidden mdDown>
            <Grid item md={3} sm={9}>
              <Profile id={filter} notFullPage={true} />
            </Grid>
          </Hidden>
          <Grid item lg={6} md={7} sm={9} xs={12}>
            {!filter && <NewPost />}
            <KweetList id={filter} />
          </Grid>
          <Hidden smDown>
            <Grid item lg={3} md={4} sm={9} xs={12}>
              <UserList notFullPage={true} />
            </Grid>
          </Hidden>
        </Grid>
      </Fragment>
    );
  };

  selectPage = ({ match }) => {
    if (!this.props.loggedInUser) {
      return <Redirect to="/login" />;
    } else if (match.params.id) {
      return this.renderMain({ filter: match.params.id });
    } else {
      return this.renderMain({ filter: null });
    }
  };

  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/register" render={() => <Registration />} />
          <Route exact path="/users" component={UserList} />
          <Route exact path="/me" component={Profile} />
          <Route exact path="/" render={this.selectPage} />
          <Route path="/users/:id" render={this.selectPage} />
        </Switch>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loggedInUser: state.loggedInUser,
  messageOffset: state.messages.length
});

const mapDispatchToProps = dispatch => {
  return {
    getMessages: offset => dispatch(getMessages(offset)),
    logout: token => dispatch(logout(token))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
