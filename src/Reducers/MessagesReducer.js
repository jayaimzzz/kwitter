import {
  ADD_KWEET,
  DELETE_KWEET,
  ADD_LIKE,
  REMOVE_LIKE,
  GET_MESSAGES,
  REFRESH_MESSAGE
} from "../ActionCreators/actions";

const initState = [];

export const MessagesReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_KWEET: {
      let messages = state.slice().push(action.payload);
      return messages;
    }

    case DELETE_KWEET: {
      let messages = state.slice()
      let index = messages.findIndex(message => message.id === action.payload)
      messages.splice(index,1)
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

      let messages = Object.values(messageDict).sort((a, b) => b.id - a.id) || [];
      return messages;
    }

    //TODO
    case ADD_LIKE:
      return state;

    //TODO
    case REMOVE_LIKE: 
      return state;

    case REFRESH_MESSAGE: {
      let messages = state.slice();
      let index = messages.findIndex(message => message.id === action.payload.id)
      messages[index] = action.payload
      return messages
    }

    default:
      return state;
  }
};
