import { INITIAL_STATE } from "../Constants";
import { LOGIN_USER, LOGOUT } from '../ActionCreators/actions';

export const LoggedInUserReducer = (state = INITIAL_STATE.loggedInUser, action)  => {
    switch(action.type) {
        case LOGIN_USER:
            return action.payload;
        case LOGOUT:
            return '';
        default:
            return state;
    }
}