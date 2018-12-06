import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Kweet from "./Kweet"
import { getMessages } from '../ActionCreators/actions'


const styles = {
  KweetList: {
    margin: "auto",
    marginTop: 50,
    background: "#493154",
    color: "white",
    textAlign: "center"
    // width: "40vw",
    // height: "60vh"
  }
};

// const KweetList = props => <div style={styles.KweetList}>The KweetList</div>;
class KweetList extends Component {
componentDidMount(){
  this.props.getMessages()
}

  render() {
    return (
      <Fragment>
        <h1 style={styles.KweetList}>Kweet Feed</h1>
        {this.props.messages.map(message => {
          let user = this.props.users.filter(user=>user.id === message.id)[0]
          let userDisplayName = user ? user.displayName : "anon";
          // userDisplayName = "" ? user.username : userDisplayName;
          return  <Kweet key={message.id}
            text={message.text}  
            username={userDisplayName}
          />
        })}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { 
    messages: state.messages.messages,
    users: state.users 
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getMessages: () => {dispatch(getMessages())}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KweetList);
