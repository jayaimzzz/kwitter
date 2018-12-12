import { combineReducers } from "redux";
import { LoggedInUserReducer } from './LoggedInUserReducer';
import { MessagesReducer } from './MessagesReducer';
import { UsersReducer } from './UsersReducer';
import { UserImageReducer } from './UserImageReducer';

const rootReducer = combineReducers({
    loggedInUser: LoggedInUserReducer,
    messages: MessagesReducer,
    users: UsersReducer,
    image: UserImageReducer
});

export default rootReducer;
