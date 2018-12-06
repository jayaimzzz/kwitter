import {
  ADD_USER,
  DELETE_USER,
  REFRESH_USERS
} from "../ActionCreators/actions";

export const UsersReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USER: {
      let newUsers = state.slice().push(action.payload.user);
      return { users: newUsers };
    }
    case DELETE_USER: {
      let newUsers = state
        .slice()
        .filter(user => user.id !== action.payload.id);
      return { users: newUsers };
    }
    case REFRESH_USERS: {
      return action.payload;
    }
    default:
      return state;
  }
};
