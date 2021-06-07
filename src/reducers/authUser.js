import {SET_AUTH_USER,LOGOUT} from '../actions/authUser'

const authenticatedUserReducer = (state= {id:null},action)=>{
    switch(action.type){
        case SET_AUTH_USER:
            return {id:action.id};
        case LOGOUT:
            return {id:null};
        default:
            return state;
    }
}

export default authenticatedUserReducer;