import React from 'react'
import { Result ,Button} from 'antd'
import { Link } from 'react-router-dom'
export default function Page404(props) {
    return (
        <div>
             <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Link to='/home'><Button type="primary">Back Home</Button></Link>}
            />
        </div>
    )
}
