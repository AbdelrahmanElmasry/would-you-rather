import { _getUsers } from "../utils/_DATA"
import { updateUsers } from "./users"


export const getUsers = () => (dispatch,getState) => {
   return _getUsers().then(users => dispatch(updateUsers(users)));
}