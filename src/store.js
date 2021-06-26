import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootRuducer from "./reducers";

var initialState = {};
var middleware = [thunk];
var store = createStore(
  rootRuducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
