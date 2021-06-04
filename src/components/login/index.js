import React, { Component } from 'react'
import { connect } from 'react-redux';
import styles from './login.module.css'
import { setAuthUser } from '../../actions/authUser';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    state = {
        isAuthentcated : !!this.props.authUser.id,
        currentUser:'users'
    }
    updateUser(e){
        this.setState({
            currentUser:e.target.value
        })
    }
    handleSubmit=(e) => {
        e.preventDefault();
        const {currentUser} = this.state;
        const {dispatch,users} = this.props;
        Object.keys(users).forEach(userId => {
            if(users[userId].name === currentUser){
                dispatch(setAuthUser(userId))
                this.setState({isAuthentcated:true})
                return;
            }
        })

    }
    render() {
        return this.state.isAuthentcated ? <Redirect to='/home' />:(
            <div className={styles.container}>
                <h3>Welcome to the </h3>
                <h1>Would you rather ??</h1>
                <p className={styles.blueText}>Game</p>
                <form onSubmit={this.handleSubmit}>
                    <select
                    className={styles.input}
                    value={this.state.currentUser}
                    onChange={e => this.updateUser(e)}
                    >
                        <option>{'users'}</option>
                        {Object.keys(this.props.users).map(user => (
                            <option key={user} name={user} value={this.props.users[user].name}>
                                {this.props.users[user].name}
                            </option>
                        ))}
                    </select>
                    <button type='submit' onClick={this.handleSubmit} disabled={this.state.currentUser==='users'} className={styles.signInBtn}>Sign in</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = ({authUser,users}) => ({
    authUser : authUser,
    users:users
});

export default connect(mapStateToProps)(Login)
