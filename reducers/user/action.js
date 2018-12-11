export const SET_USER = "SET_USER";

export const setUser = user => dispatch => {
  dispatch({
    type: SET_USER,
    user
  });
};

export const addNewUser = (data, cb) => (dispatch, store, api) => {
  api.doPostRequest("/user/create", data)
    .then(res => {
      cb(res.data);
    })
    .catch(err => console.log(err));
};
