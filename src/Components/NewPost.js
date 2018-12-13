import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import { addKweet } from "../ActionCreators/actions";
import { Typography } from "@material-ui/core";

const kweetMaxLength = 255;
const styles = {
  NewPost: {
    margin: "auto",
    marginTop: '10vh',
    // background: "#ffa500",
    backgroundColor: 'rgba(205, 205, 200, 0.9)',
    // backgroundColor: 'rgb(205, 210, 200)',

    color: "white",
    textAlign: "center",
    width: "45vw",
    // height: "20vh"
  },
  PostButton: {
    color: "white",
    background: "grey"
  }
};

// const NewPost = props => <div style={styles.NewPost}>The NewPost</div>;
class NewPost extends Component {
  state = {
    message: "",
    charactersRemaining: kweetMaxLength
  };

  handleChange = event => {
    this.setState({
      message: event.target.value,
      charactersRemaining: kweetMaxLength - event.target.value.length
    });
  };

  handleSubmit = event => {
    this.props.addKweet({
      message: this.state.message,
      token: this.props.loggedInUser.token
    });
    this.setState({
      message: "",
      charactersRemaining: kweetMaxLength
    });
  };

  render() {
    return (
      <div style={styles.NewPost}>
        <TextField
          value={this.state.message}
          id="outlined-textarea"
          label="What are you doing?"
          placeholder="Kweeting"
          multiline
          rows="5"
          required
          // className={classes.textField}
          margin="normal"
          variant="outlined"
          fullWidth={true}
          inputProps={{ maxLength: kweetMaxLength }}
          onChange={this.handleChange}
        />
        <Typography variant="h6" style={{backgroundColor: 'rgb(205, 205, 200)'}}>
          {this.state.charactersRemaining} Characters Remaining
        </Typography>
        <Button style={styles.PostButton} onClick={this.handleSubmit}>
          Post Kweet
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addKweet: kweet => dispatch(addKweet(kweet))
  };
};

const mapStateToProps = state => ({
  loggedInUser: state.loggedInUser
});

const styledComponent = withStyles(styles)(NewPost);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styledComponent);
