import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Header extends Component {
  render() {
    return (
      <div className="container-fluid height-header">
        <div className="row col-md-12 d-flex mx-auto ">
          <div className="col-md-6 mx-auto">
            <h3 className="logo-header">GitSearch</h3>
          </div>
          <div className="col-md-6 mx-auto py-2 d-flex justify-content-center">
            <Button variant="outlined" color="primary">
              Refresh
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
