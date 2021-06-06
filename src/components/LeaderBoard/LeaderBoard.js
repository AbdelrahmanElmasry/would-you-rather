import React from 'react'
import { useSelector } from 'react-redux'
import {Card,Avatar, Row,Col} from 'antd'

export default function LeaderBoard(props) {
    const users = useSelector(state => state.users)
    const names = users ? Object.keys(users) : null
    const usersData = names ? names.map(
        name => ({
            id:users[name].id,
            name:users[name].name,
            asked:users[name].questions.length,
            answered:Object.keys(users[name].answers).length,
            total:Object.keys(users[name].answers).length+users[name].questions.length,
            avatarPic:users[name].avatarURL
        })).sort((a,b) => b.total - a.total) : []
    
    return (
        <div>
            {usersData.map(user => (
                <Card style={{width:'50%',margin:'20px auto'}} key={user.id}>
                    <Row style={{width:'100%',textAlign:"center"}} justify='center' align='middle'>
                        <Col flex={1}>
                            <Avatar size={{ xs: 24, sm: 32, md: 40, lg: 85, xl: 80, xxl: 100 }} src={user.avatarPic}></Avatar>
                        </Col>
                        <Col flex={1}>
                            <h2 className={'blueText'}>{user.name}</h2>
                            <p>Answered questions : {user.answered}</p>
                            <p>Asked questions : {user.asked}</p>
                        </Col>
                        <Col flex={1}>
                            Score <p className='blueText' style={{fontSize:'28px'}}>{user.total}</p>
                        </Col>
                    </Row>
                </Card>
            ))}
        </div>
    )
}
