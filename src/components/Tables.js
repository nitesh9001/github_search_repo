import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

class Tables extends Component {
  state = {
    Value: 45,
    pageno: 1,
    tableData: [],
  };
  previouspage = (e) => {
    e.preventDefault();
    this.setState({
      pageno: (this.state.pageno !== 1 ? this.state.pageno : 2) - 1,
    });
    this.props.previousPage(this.state.pageno);
  };
  nextpage = (e) => {
    e.preventDefault();
    this.setState({
      pageno: this.state.pageno + 1,
    });
    this.props.nextPage(this.state.pageno + 1);
  };
  date = (e) => {
    var today = new Date(e);
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;

    return today;
  };

  render() {
    const tableData = this.props.tableData
      ? this.props.tableData.data
        ? this.props.tableData.data.items
        : []
      : [];
    const datalength = this.props.tableData ? this.props.tableData.data : 0;
    return (
      <div className="container-fluid main-table-conatiner">
        <div className="col-md-12">
          <div className="mt-5 mx-auto">
            <h3 className="result-heading">
              Total nuber of result found :{" "}
              {datalength ? datalength.total_count : 0}
            </h3>
          </div>
          <div className="main_table_data mt-4">
            {tableData !== null &&
            tableData !== [] &&
            tableData.length !== 0 ? (
              tableData.map((data, id) => (
                <div
                  className="col-md-12 mt-4 p-3 d-flex inner_list_repo"
                  key={id}
                >
                  <div className="col-md-2 fullicon_table">
                    <svg
                      style={{ color: "#6a737d" }}
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      version="1.1"
                      data-view-component="true"
                      height="32"
                      width="32"
                      class="octicon octicon-repo mt-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                      ></path>
                    </svg>
                  </div>
                  <div className="col-md-10 full_name_conetent">
                    <div className="col-md-12  mt-1 fullname_table">
                      <Link>{data.full_name}</Link>
                    </div>
                    <div className="col-md-12  mt-1 fulldesc_table">
                      {data.description}
                    </div>
                    <div className="col-md-12 mt-1 copy_table">
                      Clone URL :{" "}
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => {
                          navigator.clipboard.writeText(data.clone_url);
                        }}
                        style={{ height: "20px" }}
                      >
                        {data.clone_url}
                      </Button>
                    </div>
                    <div className="col-md-12 mt-1 fullproperty_table d-flex">
                      <div className="col-md-2">
                        <span className="span_clasname_left">
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 16 16"
                            version="1.1"
                            data-view-component="true"
                            height="16"
                            width="16"
                            class="octicon octicon-star mr-1"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                            ></path>
                          </svg>{" "}
                          Star
                        </span>
                        <span className="span_clasname_right">
                          {data.stargazers_count}
                        </span>
                      </div>

                      <div className="col-md-2">
                        <span className="span_clasname_left">
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 16 16"
                            version="1.1"
                            data-view-component="true"
                            height="16"
                            width="16"
                            class="octicon octicon-repo-forked"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            ></path>
                          </svg>{" "}
                          Fork
                        </span>
                        <span className="span_clasname_right">
                          {data.forks}
                        </span>
                      </div>
                      <div className="col-md-2">{data.language}</div>
                      <div className="col-md-1">
                        {data.license ? data.license.name : " not"}
                      </div>
                      <div className="col-md-3" style={{ fontSize: "14px" }}>
                        Upadated at {this.date(data.updated_at)}
                      </div>
                      <div className="col-md-2">Issue:{data.open_issues}</div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1>No data found</h1>
            )}
          </div>
          <div>
            <div>
              <ul>
                <li>
                  <button
                    className="btnon-pagination"
                    onClick={this.previouspage}
                  >
                    Previous
                  </button>
                </li>
                <li>
                  <button className="btnon-pagination" onClick={this.nextpage}>
                    Next
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tables;
