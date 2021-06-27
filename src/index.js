import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { Provider } from "react-redux";
import Posts from "./Posts";
import Articles from "./Articles";

function App() {
  return (
    <div className="App">
      <Posts />
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <Articles />
    <App />
  </Provider>,
  document.getElementById("root")
);
