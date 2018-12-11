import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ThumbUp from "@material-ui/icons/ThumbUp";
import ThumbDown from "@material-ui/icons/ThumbDown";
import Delete from "@material-ui/icons/Delete";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import moment from "moment";
import { addLike, deleteLike } from "../ActionCreators/actions";

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
  like = this.props.likes.filter(like => like.userId === this.props.loggedInUser.id)[0] || null;
  state = {
    qtyLikes: this.props.likes.length,
    like: this.like,
    likeId: this.like ? this.like.id : null
    // userLikesThisMessage: this.props.likes.filter(like => like.userId === this.props.loggedInUser.id).length === 1? true: false
  }


thumbsUpClicked = () => {
  console.log("thumbs Up clicked")
  this.props.addLike(
    this.props.messageId,
    this.props.loggedInUser.token
  )

    this.setState({
      qtyLikes: this.state.qtyLikes + 1,
      like: this.props.likes.filter(like => like.userId === this.props.loggedInUser.id)[0] || null,
    likeId: this.like ? this.state.like.id : null,

    })

}

  thumbsDownClicked = () =>{
    console.log("thumbs Down clicked")
    console.log(this.props.messages)
    this.props.deleteLike(this.state.likeId, this.props.loggedInUser.token)
    this.setState({
      qtyLikes: this.state.qtyLikes - 1,
      like: null,
      likeId: null
      // userLikesThisMessage: false
    })
  }

  render() {
    const { classes } = this.props;
    let userPhotoSrc =
      "http://www.dealnetcapital.com/wp-content/blogs.dir/9/files/2014/10/blank-profile.png";

    return (
      <Card className={classes.pos}>
        <CardHeader
          avatar={<Avatar src={userPhotoSrc} className={classes.avatar} />}
          action={
            <Typography>{moment(this.props.createdAt).fromNow()}</Typography>
          }
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
          {this.state.like === null && (
            <Fragment>
              <IconButton
                onClick={this.thumbsUpClicked}
                className={classes.like}
              >
                <ThumbUp />
              </IconButton>
              <Typography className={classes.like}>
                {this.state.qtyLikes}
              </Typography>
            </Fragment>
          )}
          {this.state.like !== null && (
            <Fragment>
              <IconButton
                onClick={this.thumbsDownClicked}
                className={classes.like}
              >
                <ThumbDown />
              </IconButton>
              <Typography className={classes.like}>
                {this.state.qtyLikes}
              </Typography>
              <Typography> You like this Kweet</Typography>
            </Fragment>
          )}
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

const mapStateToProps = state => {
  return { loggedInUser: state.loggedInUser, messages: state.messages };
};

const mapDispatchToProps = dispatch => {
  return {
    addLike: (messageId, token) => {dispatch(addLike(messageId, token))},
    deleteLike: (likeId, token) => {dispatch(deleteLike(likeId, token))}
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Kweet));
