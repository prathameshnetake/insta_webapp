import {ALL_POSTS, USER_POSTS} from "./action";

export const posts = (state = null, action) => {
  switch (action.type) {
    case ALL_POSTS:
      return action.posts;
    default:
      return state;
  }
};

export const userPosts = (state = null, action) => {
  switch (action.type) {
    case USER_POSTS:
      return action.userPosts;
    default:
      return state;
  }
};
