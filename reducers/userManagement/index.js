import {UPDATE_USERDATA} from "./action.js";

export default (state = null, action) => {
  console.log(action);
  switch (action.type) {
    case UPDATE_USERDATA:
      console.log(action);
      return action.userDetails;
    default:
      return state;
  }
};
