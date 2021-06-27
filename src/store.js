import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import postsReducers from "./postsReducer";

const rootReducer = combineReducers({
  posts: postsReducers
});

const store = createStore(rootReducer, compose(applyMiddleware(reduxThunk)));

export default store;
