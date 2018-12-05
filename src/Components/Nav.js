import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

const styles = {
  Nav: {
    margin: "auto",
    background: "#e8703b",
    color: "white",
    textAlign: "center",
    width: "40vw",
    height: "7vh"
  }
};

// const Nav = props => <div style={styles.Nav}>The Nav</div>;
const Nav = props => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Profile</Button>
          <NavLink exact to="/login">
            <Button color="inherit">Login</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Nav;
