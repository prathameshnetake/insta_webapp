import {combineReducers} from "redux";

// import all the reducers
import {posts, userPosts} from "./posts";
import user from "./user";

export default combineReducers({
  posts,
  userPosts,
  user
});
