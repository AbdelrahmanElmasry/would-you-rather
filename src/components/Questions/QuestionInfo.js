import React from 'react'
import { connect } from 'react-redux'
import {Avatar} from 'antd'
import QuestionInfoStates from './QuestionInfoStates';

function QuestionInfo(props) {
    const author = props.users[props.question.author];
    const optionOneVotes = props.question.optionOne.votes?.length;
    const optionTwoVotes = props.question.optionTwo.votes?.length;
    const totalVotes = optionOneVotes + optionTwoVotes;
    const optionOnePercent = optionOneVotes === 0 ? 0 : Math.round((optionOneVotes/totalVotes)*100);
    const optionTwoPercent = optionTwoVotes === 0 ? 0 : Math.round((optionTwoVotes/totalVotes)*100);

    const userAnswer = props.question.optionOne.votes.includes(props.authUser.id) ? 'optionOne' : 'optionTwo';
    const optionsData = [
        {
            option:'optionOne',
            votes:optionOneVotes,
            totalVotes:totalVotes,
            percent:optionOnePercent,
            optionText:props.question.optionOne.text,
            userAnswer
        },
        {
            option:'optionTwo',
            votes:optionTwoVotes,
            totalVotes:totalVotes,
            percent:optionTwoPercent,
            optionText:props.question.optionTwo.text,
            userAnswer
        },
    ]
    return (
        <div>
            <h2>Asked by <Avatar   style={{ backgroundColor: '#f56a00'}} src={author.avatarURL} /> {author.name}</h2>
            {optionsData.map(option => <QuestionInfoStates key={option.option} {...option} />)}
        </div>
    )
}

const mapStateToProps = ({questions,authUser,users}) => ({
    questions,
    authUser,
    users
})

export default  connect(mapStateToProps)(QuestionInfo)