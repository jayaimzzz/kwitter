import React, { Component, Fragment } from "react";
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
import { addLike } from "../ActionCreators/actions"

const styles = {
  card: {
    minWidth: 275
  },
  kweet: {
    fontSize: 18,
    color: "black"
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
    let userLikesThisMessage = this.props.likes.filter(like => like.userId === this.props.loggedInUser.id).length === 1 ? true :false;
    let userPhotoSrc =
      "http://www.dealnetcapital.com/wp-content/blogs.dir/9/files/2014/10/blank-profile.png";

    return (
      <Card className={classes.pos}>
        <CardHeader
          avatar={<Avatar src={userPhotoSrc} className={classes.avatar} />}
          action={<Typography>{moment(this.props.createdAt).fromNow()}</Typography>}
          title={this.props.username + ":"}
          classes={{
            title: classes.title,
            action: classes.date
          }}
        />
        <CardContent>
          <Typography className={classes.kweet}>"{this.props.text}"</Typography>
        </CardContent>
        <CardActions>
          <IconButton
            onClick={() => this.props.addLike(this.props.messageId,this.props.loggedInUser.token)}
            className={classes.like}
          >
            <ThumbUp />
          </IconButton>
          <Typography className={classes.like}>
            {this.props.likes.length}
          </Typography>
          <Typography className={classes.separator} />
          <IconButton
            onClick={() => console.log("Delete kweet button clicked")}
            className={classes.delete}
          >
            <Delete />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {loggedInUser: state.loggedInUser}
};

const mapDispatchToProps = dispatch => {
  return {
    addLike: (messageId, token) => {dispatch(addLike(messageId, token))}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Kweet));
