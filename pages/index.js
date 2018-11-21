import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import { Provider } from "react-redux";
import store from "./store";
import HtmlHead from "./HtmlHead";

export default function() {
  return (
    <div>
      <HtmlHead />
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </div>
  );
}
