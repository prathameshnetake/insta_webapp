export const UPDATE_USERDATA = "UPDATE_USERDATA";

export const editUserData = user => ({
  type: UPDATE_USERDATA,
  userDetails: user
});
