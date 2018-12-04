import { INITIAL_STATE } from "../Constants";
import { LOGIN_USER } from '../ActionCreators/actions';

export const LoggedInUserReducer = (state = INITIAL_STATE.loggedInUser, action)  => {
    switch(action.type) {
        case LOGIN_USER:
            return action.payload;
        default:
            return state;
    }
}