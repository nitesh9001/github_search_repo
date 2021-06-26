import "./App.css";
// export default App;
/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "./common/Footer";
import Header from "./common/Header";

class App extends React.Component {
  render() {
    return (
      <div id="pcoded" className="pcoded">
        <div className="pcoded-overlay-box"></div>
        <div className="pcoded-container navbar-wrapper">
          <Header />
          <div className="pcoded-content" id="admin_content">
            {this.props.children}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
