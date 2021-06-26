import { Button } from "@material-ui/core";
import React, { Component } from "react";
import img from "../Static/Assests/giticon.png";
import Swal from "sweetalert2";

class search extends Component {
  state = {
    searchQuery: "",
  };
  onchangeinput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // this.props.onchange(e.target.value);
  };
  search = (e) => {
    e.preventDefault();
    if (this.state.searchQuery.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Please enter to search",
        text: "Somethig went wrong",
      });
    }
    console.log(this.state.searchQuery, "o");
    this.props.searchrepo(this.state.searchQuery);
  };
  render() {
    return (
      <div>
        <div className="conatiner-fluid conatiner-500">
          <div className="align-center-body">
            <div className="card-body">
              <div className="row mt-5">
                <div className="col-sm-9 mx-auto">
                  <img src={img} alt="icons" className="icon-size" />
                </div>
                <div className="col-md-12">
                  <div className="form-group row ">
                    <div className="col-sm-12 d-flex mx-auto">
                      <input
                        type="text"
                        className="form-control"
                        name="searchQuery"
                        id="searchQuery"
                        required={true}
                        onChange={this.onchangeinput}
                        placeholder="Search repository name"
                      />
                      <div className="">
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={this.search}
                          style={{ height: "47px", margin: "1px 15px" }}
                        >
                          Search
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default search;
