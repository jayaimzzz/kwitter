import React from "react";
import Logo from "../logo.png";
import Typography from "@material-ui/core/Typography";

const styles = {
  Header: {
    margin: "auto",
    marginTop: 20,
    background: "#033c99",
    color: "white",
    textAlign: "center",
    fontSize: "50px",
    width: "60vw",
    height: "15vh"
  }
};

// const Header = props => <div style={styles.Header}>The Header</div>;

const Header = props => {
  return (
    <div style={styles.Header}>
      <img src={Logo} /> Switter
    </div>
  );
};
export default Header;
