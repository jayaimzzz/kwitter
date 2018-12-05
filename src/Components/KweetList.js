import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Kweet from "./Kweet"
import { getMessages } from '../ActionCreators/actions'

const styles = {
  KweetList: {
    margin: "auto",
    marginTop: 10,
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
    // this.props.getMessages = 
    // console.log(this.props.messages);
    return (
      <Fragment>
        <h1 style={styles.KweetList}>Kweet Feed</h1>
        {this.props.messages.map(message => (
          <Kweet key={message.id}
            text={message.text}
            userId={message.userId}
          />
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { messages: state.messages.messages };
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
