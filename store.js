import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducers";
import api from "./lib/api";

const defaultInitialState = {
  posts: [],
  userPosts: [],
  user: {
    username: "loading...",
    bio: "loading..."
  }
};

export function initializeStore (initialState = defaultInitialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware.withExtraArgument(api))));
}
