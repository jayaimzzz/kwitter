import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

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
const NewPost = props => {
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
      />
      <Button style={styles.PostButton}>Post Sweet</Button>
    </div>
  );
};

export default NewPost;
