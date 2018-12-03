import { ADD_KWEET, DELETE_KWEET, ADD_LIKE, DELETE_LIKE } from '../ActionCreators/actions'

const initState = {
    "messages": [
        {
            "id": 5,
            "text": "all hail burt the tortoise",
            "userId": 5,
            "createdAt": "2018-11-30T14:50:39.469Z",
            "likes": []
        },
        {
            "id": 4,
            "text": "burt the tortoise is your master",
            "userId": 5,
            "createdAt": "2018-11-30T14:50:24.698Z",
            "likes": []
        }
    ]
}

export const MessagesReducer = (state = initState, action) => {
    switch (action.type){
        case ADD_KWEET:
        let messages = state.messageas.slice().push(action.payload)
        return {messages}

        case DELETE_KWEET:
        let messages = state.messages.slice().filter(message => message.id !== action.payload.id)
        return {messages};

        //TODO 
        case ADD_LIKE:
        return state
        
        //TODO
        case DELETE_LIKE:
        return state
        
        default: return state
    }
}