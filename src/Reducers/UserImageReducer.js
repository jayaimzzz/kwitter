import {
    USER_IMAGE,
    LOGOUT
  } from "../ActionCreators/actions";
  
export const UserImageReducer = (state = null, action) => {
    switch (action.type) {
      case USER_IMAGE: {
        return action.payload
      }
      case LOGOUT: {
          return null
      }
      default:
        return state;
    }
  };