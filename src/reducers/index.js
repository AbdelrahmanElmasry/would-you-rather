import { combineReducers } from 'redux'
import authenticatedUserReducer from './authUser'
import usersReducer from './users';
const appReducer = combineReducers({
    authUser : authenticatedUserReducer,
    users:usersReducer
});
export default appReducer;