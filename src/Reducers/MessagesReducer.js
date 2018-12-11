import {
  ADD_KWEET,
  DELETE_KWEET,
  ADD_LIKE,
  DELETE_LIKE,
  GET_MESSAGES,
} from "../ActionCreators/actions";

const initState = [];

export const MessagesReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_KWEET: {
      let messages = state.slice().push(action.payload);
      return messages;
    }

    case DELETE_KWEET: {
      let messages = state
        .slice()
        .filter(message => message.id !== action.payload.id);
      return messages;
    }
    case GET_MESSAGES: {
      let messageDict = state.reduce((accumulator, message) => {
        accumulator[message.id] = message;
        return accumulator;
      }, {});
      action.payload.messages.forEach(
        message => (messageDict[message.id] = message)
      );

      let messages = Object.values(messageDict) || [];
      return messages;
    }

    //TODO
    case ADD_LIKE:
      return state;

    //TODO
    case DELETE_LIKE:
      return state;

    default:
      return state;
  }
};
