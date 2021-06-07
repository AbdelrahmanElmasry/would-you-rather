import React from 'react'
import { connect } from 'react-redux'
import QuestionForm from './QuestionForm';
import QuestionInfo from './QuestionInfo';
import Page404 from '../404/Page404'
function QuestionDetails(props) {
    const questionId = props.match.params.id;
    console.log(props);
    
    if(!props.questions[questionId] || !props.location.state){
        return <Page404 />
    }
    const question = props.questions[questionId]
    const isAnswered = question.optionOne.votes.includes(props.authUser.id) ||
                        question.optionTwo.votes.includes(props.authUser.id);
    const questionElement = !isAnswered ? 
        <QuestionForm question={question} /> : <QuestionInfo question={question}/>;
    return (
        <div>
            {questionElement}
        </div>
    )
}
const mapStateToProps = ({questions,authUser}) => ({
    questions,
    authUser
})
export default connect(mapStateToProps)(QuestionDetails);

