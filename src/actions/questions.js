export const UPDATE_QUESTIONS = 'UPDATE_QUESTIONS';
export const SAVE_QUESTION = 'SAVE_QUESTION';
export const ANSWER_QUESTIONS = 'ANSWER_QUESTION'

export const updateQuestions = (questions) => ({
    type:UPDATE_QUESTIONS,
    questions
})

export const answerQuestion = answerDetails => ({
    type: ANSWER_QUESTIONS,
    answerDetails
})