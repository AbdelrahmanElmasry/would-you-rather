import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({Component,path,exact,authUser }) => {
    const isAuthUser = !!authUser.id;    
    return (
        <Route
            path={path}
            exact={exact}
            render={props =>
                isAuthUser ? (
                    <Component {...props} />
                ) : <Redirect
                    to={'/login'} />
            
                
            } />
    );
}

const mapStateToProps = ({ authUser }) => ({
    authUser
})

export default connect(mapStateToProps)(PrivateRoute)