import { _getUsers, _getQuestions ,_saveQuestionAnswer , _saveQuestion} from "../utils/_DATA"
import { updateUsers } from "./users"
import { updateQuestions,answerQuestion, saveQuestion } from './questions'
import { setAuthUser , logoutUser } from './authUser'


export const handleLogin= (userId) => (dispatch,getState) => {
    dispatch(setAuthUser(userId))
}

export const handleLogOut= () => (dispatch,getState) => {
    dispatch(logoutUser())
}
export const getUsers = () => (dispatch,getState) => {
   return _getUsers().then(users => dispatch(updateUsers(users)));
}

export const getQuestions = (cb) => (dispatch,getState) => {
    return _getQuestions().then(questions => {
        dispatch(updateQuestions(questions))
        if(cb)
            cb(questions)
    });
 }

 export const handleQuestionAnswer = (questionDetails,ownProps) => (dispatch,getState) => {
     return _saveQuestionAnswer(questionDetails).then(res => {         
         dispatch(answerQuestion(questionDetails));
         _getUsers().then(users => dispatch(updateUsers(users)));
     })
 }

 export const handleSaveQuestion = (question) => (dispatch,getState) => {
    return _saveQuestion(question).then(formatedQuestion => {        
        dispatch(saveQuestion(formatedQuestion))
    })
}