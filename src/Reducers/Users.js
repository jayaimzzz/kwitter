import { ADD_USER, DELETE_USER } from '../ActionCreators/actions'

const initState = {
        "users": [
            {
                "id": 14,
                "username": "test26",
                "displayName": "test26",
                "about": "",
                "createdAt": "2018-11-30T21:52:30.932Z",
                "updatedAt": "2018-11-30T21:52:30.932Z"
            },
            {
                "id": 13,
                "username": "burt2",
                "displayName": "burt2",
                "about": "",
                "createdAt": "2018-11-30T21:50:33.268Z",
                "updatedAt": "2018-11-30T21:50:33.268Z"
            },
        ]
}

export const reducer = (state = initState, action) => {
    switch (action.type){
        case ADD_USER:
        let newUsers = state.users.slice().push(action.payload.user)
        return {"users": newUsers}
        case DELETE_USER:
        let newUsers = state.users.slice().filter(user => user.id !== action.payload.id)
        return {"users": newUsers}
        default: return state;
    }
}