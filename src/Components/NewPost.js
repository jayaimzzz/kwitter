import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import { addKweet } from '../ActionCreators/actions';

const styles = {
  NewPost: {
    margin: "auto",
    marginTop: 10,
    // background: "#ffa500",
    color: "white",
    textAlign: "center",
    width: "30vw",
    height: "10vh"
  },
  PostButton: {
    color: "white",
    background: "grey"
  }
};

// const NewPost = props => <div style={styles.NewPost}>The NewPost</div>;
class NewPost extends Component {
  state = {
    message: ''
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    });
  }

  handleSubmit = event => {
    this.props.addKweet({message: this.state.message, token: this.props.loggedInUser.token});
    this.setState({
      message: ''
    });
  }

  render() {
    return (
      <div style={styles.NewPost}>
        <TextField
          id="outlined-textarea"
          label="What are you doing?"
          placeholder="What are thoooseeeee?!?!"
          multiline
          required
          // className={classes.textField}
          margin="normal"
          variant="outlined"
          fullWidth="50px"
          inputProps={{ maxLength: 140 }}
          onChange={this.handleChange}
        />
        <Button style={styles.PostButton}>Post Sweet</Button>
      </div>
    );
  }
};

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
