import React ,{useState} from 'react'
import {Row,Col,Input,Card, Button} from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import {handleSaveQuestion} from '../../actions'

export default function NewQuestion(props) {
    const [options,setOptions] = useState({})
    const authUser = useSelector(state => state.authUser.id)
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setOptions(currentState => ({...currentState,[e.target.name]:e.target.value}))
    }
    const handleSubmit = (e) => {
        if(options?.optionOne?.trim() && options?.optionTwo?.trim()){
            const newQuestion = {
                optionOneText : options.optionOne,
                optionTwoText : options.optionTwo,
                author:authUser
            }
            dispatch(handleSaveQuestion(newQuestion)).then(() => props.history.push('/home'));
        }
            
        // setOptions(currentState => ({...currentState,[e.target.name]:e.target.value}))
    }
    return (
        <Row justify="center" style={{margin:'20px auto'}}>
            <Col span={12}>
                <Card >
                    <p>Enter two answer options :</p>
                    <h2 className={'blueText'}>Would you rather...</h2>
                    <Row justify='center' style={{margin:'20px auto'}}>
                        <Col>
                            <Input required placeholder="option one" type='text' name='optionOne' onChange={handleChange}/>
                            or
                            <Input required placeholder="option two" type='text' name='optionTwo' onChange={handleChange} />
                        </Col>
                    </Row>
                    <Row justify='center'>
                        <Col>
                            <Button type='primary' size='large' onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}
