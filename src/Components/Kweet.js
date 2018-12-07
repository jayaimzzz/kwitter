import React, { Component, Fragment } from "react";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';
// import PhotoCamera from '@material-ui/icons/PhotoCamera'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'
import ThumbUp from '@material-ui/icons/ThumbUp'
import Delete from '@material-ui/icons/Delete'


const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  kweet: {
    fontSize: 18,
    color: 'black'
  },
  user: {
    color: 'darkgrey'
  },
  pos: {
    marginBottom: 12,
  },
};

class Kweet extends Component {
  render() {
    const { classes } = this.props
    return (
      <Card className={classes.pos}>
            <CardContent>
              <Typography className={classes.kweet}>
            {this.props.text}
              </Typography>
            </CardContent>
            <div>Kweeted by</div>
            <div>{this.props.username}</div>
            <CardActions>
              <IconButton ><ThumbUp/></IconButton>
              <IconButton ><Delete/></IconButton>
            </CardActions>
            <br></br>
      </Card>
    );
  }
}

export default withStyles(styles)(Kweet)
