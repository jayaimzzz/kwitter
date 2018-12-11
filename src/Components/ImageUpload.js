import React, { Component, Fragment } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Input
} from "@material-ui/core";
import { InsertPhoto } from "@material-ui/icons";

class ImageUpload extends Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  render() {
    const { open } = this.state;

    return (
      <Fragment>
        <IconButton onClick={this.handleToggle} size="small">
          <InsertPhoto />
        </IconButton>
        <Dialog open={open} onClose={this.handleToggle} fullWidth maxWidth="xs">
          <DialogTitle>User Photo</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Would you like to update your photo?
            </DialogContentText>
            <form>
              <Input type="file" />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button color="secondary">Save Changes</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

export default ImageUpload;
