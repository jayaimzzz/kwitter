export const ADD_KWEET = 'ADD_KWEET';
export const ADD_USER = 'ADD_USER';
export const DELETE_KWEET = 'DELETE_KWEET';
export const DELETE_USER = 'DELETE_USER';


export const addKweet = kweet => {
    return {
        type: ADD_KWEET,
        payload: kweet
    }
}

export const addUser = user => {
    return {
        type: ADD_USER,
        payload: user
    }
}

export const deleteKweet = kweet => {
    return {
        type: DELETE_KWEET,
        payload: kweet
    }
}

export const deleteUser = user => {
    return {
        type: DELETE_USER,
        payload: user
    }
}

