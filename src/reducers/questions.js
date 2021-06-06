import { UPDATE_QUESTIONS,ANSWER_QUESTIONS } from "../actions/questions";

const questionsReducer = (state = {},action) => {
    switch(action.type){
        case UPDATE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            }
        case ANSWER_QUESTIONS:
            return {
                ...state,
                [action.answerDetails.qid]:{
                    ...state[action.answerDetails.qid],
                    [action.answerDetails.answer]:{
                        ...state[action.answerDetails.qid][action.answerDetails.answer],
                        votes: state[action.answerDetails.qid][action.answerDetails.answer].votes.concat(
                            action.answerDetails.authedUser
                        )
                    }
                }
            }
        default:
            return state;
    }
}

export default questionsReducer;