import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {Card,Avatar, Row,Col, Button} from 'antd'
import styles from './question.module.css'

export default function Question(props) {
    const authUser = useSelector(state => state.authUser)
    const questions = useSelector(state => state.questions)
    const users = useSelector(state => state.users)
    const questionId = props.questionId;
    const author = users[questions[questionId].author]
    const question = questions[questionId]
    const isAnswered = question.optionOne.votes.includes(authUser) || question.optionTwo.votes.includes(authUser)

    return (
            <Card 
                  className={styles.questionCard}
                  title={`${author.name} asks`} 
                  bordered
                  headStyle={{
                        backgroundColor:'#fafafa',
                        color:'royalblue',
                        fontWeight:"900"
                      }}
                >
                <Row >
                    <Col flex={1}>
                        <Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} src={author.avatarURL}></Avatar>
                    </Col>
                    <Col flex={3}>
                        <h2 className={'blueText'}>Would you rather</h2>
                        <p>{question.optionOne.text}...{question.optionTwo.text.substring(0,10)}...</p>
                        <Link to={{
                                pathname:`/questions/${question.id}`,
                                state:{
                                    question,
                                    author,
                                    isAnswered
                                }
                            }}><Button type="primary" shape="round">
                                View Question
                            </Button>
                        </Link>
                    </Col>
                </Row>
                
            </Card>
    )
}
