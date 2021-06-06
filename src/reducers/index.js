import { combineReducers } from 'redux'
import authenticatedUserReducer from './authUser'
import usersReducer from './users';
import questionsReducer from './questions';
const appReducer = combineReducers({
    authUser : authenticatedUserReducer,
    users:usersReducer,
    questions:questionsReducer
});
export default appReducer;