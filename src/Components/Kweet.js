import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
// import DeleteIcon from '@material-ui/icons/Delete';
// import PhotoCamera from '@material-ui/icons/PhotoCamera'
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Delete from "@material-ui/icons/Delete";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { FormHelperText } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import moment from 'moment'

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  kweet: {
    fontSize: 18,
    color: "black",
    marginLeft: 10
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
  }
};

class Kweet extends Component {
  render() {
    const { classes } = this.props;
    const unixTime = Date.parse(this.props.createdAt);
    const dateOfKweet = new Date(unixTime).getTimezoneOffset()
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const dayOfWeek = daysOfWeek[dateOfKweet.getDay()]
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const month = months[dateOfKweet.getMonth()]
    const hour = this.props.createdAt.slice(11,13)
    const minutes = this.props.createdAt.slice(13,16)
    const time = `${hour}${minutes}`
    console.log(this.props.createdAt)
    console.log(minutes)
    const formattedDate = `${time} UTC ${dayOfWeek}, ${month} ${dateOfKweet.getDate()}, ${dateOfKweet.getFullYear()}`
    let userPhotoSrc =
      "http://www.dealnetcapital.com/wp-content/blogs.dir/9/files/2014/10/blank-profile.png";

    return (
      <Card className={classes.pos}>
        <CardHeader
          avatar={<Avatar src={userPhotoSrc} className={classes.avatar} />}
          action={formattedDate}
          title={this.props.username + ":"}
          classes={{
            title: classes.title,
            action: classes.date
          }}
        />
        <Typography className={classes.kweet}>"{this.props.text}"</Typography>
        <CardActions>
          <IconButton>
            <ThumbUp />
          </IconButton>
          <Typography>{this.props.likes.length}</Typography>
          <IconButton>
            <Delete />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(Kweet);
