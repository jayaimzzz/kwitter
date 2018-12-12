import React, { Component } from "react";
import PropTypes from "prop-types";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Hidden,
  Menu,
  MenuItem,
  IconButton,
  Button,
  Typography,
  Toolbar,
  AppBar,
  withStyles
} from "@material-ui/core";
import { history } from "../index";

const styles = {
  root: {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Nav extends Component {
  state = {
    anchor: null
  };

  handleMenuIconClick = event => {
    this.setState({
      anchor: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchor: null
    });
  };

  render() {
    const { classes } = this.props;
    const open = Boolean(this.state.anchor);

    return (
      <div style={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <Hidden lgUp>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={this.handleMenuIconClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                open={open}
                anchorEl={this.state.anchor}
                style={{ zIndex: 2 }}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                onClose={this.handleClose}
              >
                <MenuItem onClick={() => history.push("/me")}>
                  Your Profile
                </MenuItem>
                <MenuItem onClick={() => history.push("/users")}>
                  User List
                </MenuItem>
              </Menu>
            </Hidden>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              KWITTER
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={this.props.logout}
            >
              Sign Out
            </Button>
            <Typography variant="h6" color="inherit">
            <Button
            variant="contained"
            color="primary"
            onClick={() => history.push('/')}>
              Home
            </Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Nav);
