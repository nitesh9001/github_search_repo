import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Routes from "./Routes";
import "./Static/Styles/header.scss";
import "./Static/Styles/table.scss";
import "./Static/Styles/search.scss";
import "./Static/Styles/footer.scss";
ReactDOM.render(<Routes />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
