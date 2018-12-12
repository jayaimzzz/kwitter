import {
    USER_IMAGE,
    LOGOUT
  } from "../ActionCreators/actions";
  
export const UserImageReducer = (state = false, action) => {
    switch (action.type) {
      case USER_IMAGE: {
        return true
      }
      case LOGOUT: {
          return false
      }
      default:
        return state;
    }
  };