import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class Header extends Component {
  render() {
    return (
      <>
        <div>
          <div className="header">
            <h1>Car Rental</h1>
            <Button
              style={{position:"absolute", width:"auto", top: "25%", right:"5%"}}
              variant="contained"
              onClick={() => {}}>
              Logout
            </Button>
          </div>
        </div>
      </>
    );
  }
}
