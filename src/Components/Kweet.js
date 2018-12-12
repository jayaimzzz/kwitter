import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Delete from "@material-ui/icons/Delete";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import moment from "moment";
import { deleteKweet } from "../ActionCreators/actions";

const styles = {
  card: {
    minWidth: 275
  },
  kweet: {
    fontSize: 18,
    color: "black",
    width: "100%",
    wordWrap: "break-word"
  },
  pos: {
    marginTop: 12
  },
  avatar: {
    margin: 0
  },
  title: {
    color: "darkgrey",
    fontSize: 18
  },
  date: {
    fontSize: 16
  },
  separator: {
    flexGrow: 2
  }
};

class Kweet extends Component {
  render() {
    const { classes } = this.props;
    let userPhotoSrc =
      "http://www.dealnetcapital.com/wp-content/blogs.dir/9/files/2014/10/blank-profile.png";

    return (
      <Card className={classes.pos}>
        <CardHeader
          avatar={<Avatar src={userPhotoSrc} className={classes.avatar} />}
          action={
            <Typography variant="subtitle1">
              {moment(this.props.createdAt).fromNow()}
            </Typography>
          }
          title={this.props.username + ":"}
          classes={{
            title: classes.title,
            action: classes.date
          }}
        />
        <CardContent>
          <Typography variant="body1" className={classes.kweet}>
            "{this.props.text}"
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            onClick={() => console.log("Like kweet button clicked")}
            className={classes.like}
          >
            <ThumbUp />
          </IconButton>
          <Typography variant="subtitle1" className={classes.like}>
            {this.props.likes.length}
          </Typography>
          <Typography variant="subtitle1" className={classes.separator} />
          {this.props.deleteable && (
            <IconButton
              onClick={() => {
                if (
                  window.confirm("Are you sure you want to delete this Kweet?")
                ) {
                  this.props.deleteKweet(this.props.id);
                }
              }}
              className={classes.delete}
            >
              <Delete />
            </IconButton>
          )}
        </CardActions>
      </Card>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = dispatch => {
  return {
    deleteKweet: messageId => {
      dispatch(deleteKweet(messageId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Kweet));
