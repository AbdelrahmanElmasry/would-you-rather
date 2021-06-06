import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tabs, Row, Col,Skeleton } from 'antd';
import Question from './Question';

const { TabPane } = Tabs;
 class Questions extends Component {
    state={
        questions:this.props.questions,
    }
    
    getUnansweredQuestions = () =>{
        const { questions , authUser } = this.props;
        const questionsUI = this.props.questionsIds.length ? Object.keys(questions).filter(
            questionKey => 
                !questions[questionKey].optionOne.votes.includes(authUser) &&
                !questions[questionKey].optionTwo.votes.includes(authUser)
             ).map(question => questions[question])
             .sort((a,b)=> b.timestamp - a.timestamp) : [];
        return questionsUI;
    }
    
    
    getAnsweredQuestions = () =>{
        const { questions , authUser } = this.props;
        
        const questionsUI = this.props.questionsIds.length ? Object.keys(questions).filter(
            questionKey => 
                questions[questionKey].optionOne.votes.includes(authUser) ||
                questions[questionKey].optionTwo.votes.includes(authUser)
             ).map(question => questions[question])
             .sort((a,b)=> b.timestamp - a.timestamp) : [];

        return questionsUI;
    }
    render() {
        return (
            <div>
                <h2>
                    Questions
                </h2>
                <Tabs type="card" centered>
                    <TabPane tab="Unaswered" key="1">
                    <Skeleton round style={{width:'40%'}} loading={this.props.isLoading} avatar active>
                        <Row gutter={[16, 48]} wrap justify="center">
                            <Col span={9}>
                                {this.getUnansweredQuestions().map(question => <Question key={question.id} questionId={question.id}></Question>)}
                            </Col>
                        </Row>
                    </Skeleton>
                    </TabPane>
                    <TabPane tab="Answered" key="2">
                    <Skeleton round style={{width:'60%'}} loading={this.props.questionIds} avatar active>
                        <Row gutter={[16, 48]} wrap justify="center">
                            <Col span={9}>
                                {this.getAnsweredQuestions().map(question => <Question key={question.id} questionId={question.id}></Question>)}
                            </Col>
                        </Row>
                    </Skeleton>
                    </TabPane>  
                </Tabs>
            </div>
        )
    }
}

const mapStateToProps = ({questions,authUser}) => ({
    questions,
    authUser: authUser.id,
    questionsIds:Object.keys(questions)?.length ? Object.keys(questions) : [],
    isLoading: !!!Object.keys(questions)?.length

})

export default connect(mapStateToProps)(Questions)