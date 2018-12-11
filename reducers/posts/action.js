export const ALL_POSTS = "ALL_POSTS";
export const USER_POSTS = "USER_POSTS";
// const posts = require("../../dummy.json");

export const getAllPost = () => (dispatch, store, api) => {
  console.log("Geting all posts");
  api.doPostRequest("/post/read")
    .then(res => {
      console.log(res);
      dispatch({
        type: ALL_POSTS,
        posts: res.data.posts
      });
    })
    .catch(err => console.log(err));
};


export const getPostCount = (user, cb) => (dispatch, store, api) => {
  api.doPostRequest("/post/count", {user})
    .then(data => {
      cb(data.data.count);
    })
    .catch(err => console.error(err));
};

export const getUserPosts = (user, cb) => (dispatch, store, api) => {
  api.doPostRequest("/post/userPosts", {user})
    .then(data => {
      if (cb) {
        cb(data.data.posts);
      }
      dispatch({
        type: USER_POSTS,
        userPosts: data.data.posts
      });
    })
    .catch(err => console.error(err));
};

export const addNewPost = (formData, cb) => (dispatch, store, api) => {
  api.doPostRequest("/post/create", formData)
    .then(data => {
      cb(data.data);
      dispatch(getAllPost());
      dispatch(getUserPosts(store().user.username));
    })
    .catch(err => console.error(err));
};

export const deletePost = (id, cb) => (dispatch, store, api) => {
  api.doPostRequest("/post/delete", {id})
    .then(data => {
      cb(data.data);
      dispatch(getAllPost());
      dispatch(getUserPosts(store().user.username));
    })
    .catch(err => console.error(err));
};

export const likePost = (id, cb) => (dispatch, store, api) => {
  api.doPostRequest("/post/like", {id})
    .then(data => {
      cb(data.data);
      dispatch(getAllPost());
      dispatch(getUserPosts(store().user.username));
    })
    .catch(err => console.error(err));
};
