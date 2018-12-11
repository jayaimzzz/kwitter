import {
  ADD_KWEET,
  DELETE_KWEET,
  ADD_LIKE,
  DELETE_LIKE,
  GET_MESSAGES
} from "../ActionCreators/actions";

const initState = {
  messages: []
};

export const MessagesReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_KWEET: {
      let messages = state.messages.slice().push(action.payload);
      return { messages };
    }

    case DELETE_KWEET: {
      let messages = state.messages
        .slice()
        .filter(message => message.id !== action.payload.id);
      return { messages };
    }
    case GET_MESSAGES: {
      let messages = action.payload.messages.slice();
      return { messages };
    }

    //TODO
    case ADD_LIKE:
      let messages = state.messages.slice();
      let indexOfLikedMessage = messages.findIndex(
        message => message.id === action.payload.messageId
      );
      messages[indexOfLikedMessage]["likes"].push(action.payload);
      return { messages };

    //TODO
    case DELETE_LIKE:
    messages = state.messages.slice();
    let likedMessage
    messages.forEach(message => message.likes.forEach(like => {if(like.id === action.payload.id){likedMessage = message}}))
    indexOfLikedMessage = messages.findIndex(message => message.id === likedMessage.id)
    messages[indexOfLikedMessage] = likedMessage 
    return { messages };

    default:
      return state;
  }
};
