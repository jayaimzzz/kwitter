import { ADD_KWEET, DELETE_KWEET, ADD_LIKE, DELETE_LIKE, GET_MESSAGES } from '../ActionCreators/actions'

const initState = {
    "messages": []
}

export const MessagesReducer = (state = initState, action) => {
    switch (action.type){
        case ADD_KWEET: {
            let messages = state.messageas.slice().push(action.payload)
            return {messages}
        }

        case DELETE_KWEET: {
            let messages = state.messages.slice().filter(message => message.id !== action.payload.id)
            return {messages};
        }
        case GET_MESSAGES: {
            let messages = action.payload.messages.slice()
            return {messages}
        }

        //TODO 
        case ADD_LIKE:
        return state
        
        //TODO
        case DELETE_LIKE:
        return state
        
        default: return state
    }
}