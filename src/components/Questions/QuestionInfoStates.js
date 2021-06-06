import React from 'react'
import {Row,Col,Progress,Card} from 'antd'

export default function QuestionInfoStates(props) {
    return (
        <Row justify="center" style={{margin:'20px auto'}}>
            <Col span={12}>
                <Card >
                    {props.userAnswer === props.option&& (<h3>Your Answer ✔️</h3>)}
                    <p>{`Would you rather ${props.optionText}`}</p>
                    <Progress format={(percent)=> `${percent}%`} percent={props.percent} />
                    <p>{`${props.votes} of ${props.totalVotes}`}</p>
                </Card>
            </Col>
        </Row>
    )
}
