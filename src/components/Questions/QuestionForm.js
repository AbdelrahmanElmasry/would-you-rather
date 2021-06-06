import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import {Card,Avatar, Row,Col, Button} from 'antd'
import { useSelector ,useDispatch,} from 'react-redux'
import styles from './question.module.css'
import { handleQuestionAnswer, } from '../../actions';

export default function QuestionForm(props) {
    const dispatch = useDispatch();
    const [selectedOption,setSelectedOption] = useState(null);
    const authUser = useSelector(state => state.authUser)
    // const questions = useSelector(state => state.questions)
    const history  = useHistory()
    const users = useSelector(state => state.users)
    const {question} = props;
    const handleSubmit = (e) => {
        if(!selectedOption) return;
        e.preventDefault();
        const answerDetails = {
            authedUser:authUser.id,
            answer:selectedOption,
            qid : question.id
        }        
        dispatch(handleQuestionAnswer(answerDetails,props))
        history.push({
            pathname:`/questions/${question.id}`,
            state:{
                question,
                author:question.author,
                isAnwered:true
            }
        })

    }
    return(
        <Card 
            className={styles.questionCard}
            title={`${users[question.author].name} asks`} 
            bordered
            headStyle={{
                backgroundColor:'#fafafa',
                color:'royalblue',
                fontWeight:"900"
                }}
            style={{width:"50%",textAlign:"center"}}
        >
        <Row style={{textAlign:"center"}}>
            <Col flex={1}>
                <Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} src={users[question.author].avatarURL}></Avatar>
            </Col>
            <Col flex={3}>
                <h2><b>Would you rather...</b></h2>
                <div className={styles.radioInput}>
                    <label htmlFor="option one">
                        <input
                            id="option one"
                            type="radio"
                            value="optionOne"
                            checked={selectedOption === "optionOne"}
                            onChange={(e) => setSelectedOption(e.target.value)}
                            />
                        {` ${question.optionOne.text}`}
                    </label>
                </div>
                <div className={styles.radioInput}>
                    <label htmlFor="option two">
                        <input
                            id="option one"
                            type="radio"
                            value="optionTwo"
                            checked={selectedOption === "optionTwo"}
                            onChange={(e) => setSelectedOption(e.target.value)}
                            />
                        {` ${question.optionTwo.text}`}
                    </label>
                </div>
                <Button size="large" type="primary" shape="round" onClick={e => handleSubmit(e)}>
                        Submit
                </Button>
            </Col>
        </Row>
        
    </Card>
    )
}
