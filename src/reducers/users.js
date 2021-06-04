import { UPDATE_USERS } from "../actions/users";

const usersReducer = (state= {},action)=>{
    switch(action.type){
        case UPDATE_USERS:
            return({
                ...state,
                ...action.users
            })
        default :
            return state
    }
}

export default usersReducer;