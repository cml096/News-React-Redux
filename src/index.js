import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import asyncMiddleware from "./reducer/thunks/async-middleware";
import { reducer as formReducer } from "redux-form";
import * as reducers from "./reducer/index";
import App from "./App";
import "./index.css";

const store = createStore(
  combineReducers({
    ...reducers,
    form: formReducer,
  }),
  applyMiddleware(thunk, asyncMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
