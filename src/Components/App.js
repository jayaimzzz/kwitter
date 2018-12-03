import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/login" render={() => <p>login</p>} />
          <Route exact path="/register" render={() => <p>register</p>} />
          <Route exact path="/" render={() => <p>index</p>} />
          <Route path="/users/:id" render={() => <p>user</p>} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
