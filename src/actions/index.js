import { _getUsers, _getQuestions ,_saveQuestionAnswer} from "../utils/_DATA"
import { updateUsers } from "./users"
import { updateQuestions,answerQuestion } from './questions'


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
         console.log('OwnProps',ownProps);
         
         dispatch(answerQuestion(questionDetails))
     })
 }