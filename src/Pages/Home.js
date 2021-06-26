import React, { Component } from "react";
import Search from "../components/Search";
import Tables from "../components/Tables";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRepoSearch } from "../actions/action";
import CircularProgress from "@material-ui/core/CircularProgress";

class Home extends Component {
  state = {
    searchQuery: "",
    pageno: 1,
    dataList: [],
    laodig: false,
  };
  onsearch = (val) => {
    console.log(val);
    this.setState({
      searchQuery: val,
      laodig: true,
    });
    this.props.getRepoSearch(val, this.state.pageno);
  };
  next = (val) => {
    console.log(val);
    this.setState({
      pageno: val,
      laodig: true,
    });
    this.props.getRepoSearch(this.state.searchQuery, val);
  };
  previous = (val) => {
    this.setState({
      pageno: val,
      laodig: true,
    });
    this.props.getRepoSearch(this.state.searchQuery, val);
  };
  componentWillReceiveProps() {
    console.log(this.props);
    if (this.props.listrepo) {
      this.setState({
        laodig: false,
      });
    }
    if (this.props.listrepo.status !== 200) {
      const dataStatus = this.props.listrepo.status;
      const data =
        dataStatus === 403
          ? "Forbidden"
          : dataStatus === 422
          ? "Unprocessable Entity"
          : dataStatus === 503
          ? "Service Unavailable"
          : "Not Modified";
    } else {
      this.setState({
        dataList: this.props.listrepo,
      });
    }
  }

  render() {
    const { laodig, searchQuery } = this.state;
    return (
      <>
        {laodig && searchQuery.length ? (
          <div className="loader_css">
            <CircularProgress style={{ marginTop: "80px" }} />
          </div>
        ) : (
          ""
        )}
        <div className="App">
          <div>
            <Search searchrepo={this.onsearch} />
          </div>
          <div>
            <Tables
              nextPage={this.next}
              previousPage={this.previous}
              tableData={this.props.listrepo}
            />
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listrepo: state.home.listrepo,
  };
};
Home.propsTypes = {
  getRepoSearch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  getRepoSearch,
})(Home);
