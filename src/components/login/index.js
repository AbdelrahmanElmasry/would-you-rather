import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Avatar } from 'antd'
import styles from './login.module.css'
import { setAuthUser } from '../../actions/authUser';
import { Redirect, withRouter } from 'react-router-dom';

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
            if(users[userId].id === currentUser){
                dispatch(setAuthUser(userId))
                this.setState({isAuthentcated:true})
                return;
            }
        })

    }
    redirectTo = this.props.location?.state ? this.props.location?.state.from :'/home';
    render() {
        return this.state.isAuthentcated ? <Redirect to={this.redirectTo} />:(
            <div className={styles.container}>
                <h3>Welcome to the </h3>
                <h1>Would you rather ??</h1>
                <p className={styles.blueText}>Game</p>
                <p className={styles.loginInfo}>Please sign in to start the game</p>
                <form onSubmit={this.handleSubmit}>
                    <select
                    className={styles.input}
                    value={this.state.currentUser}
                    onChange={e => this.updateUser(e)}
                    >
                        <option>{'users'}</option>
                        {Object.keys(this.props.users).map(user => (
                            <option key={user} name={user} value={this.props.users[user].id}>
                                       {this.props.users[user].name}
                            </option>
                        ))}
                    </select>
                    <button type='submit' onClick={this.handleSubmit} disabled={this.state.currentUser==='users'} className={styles.signInBtn}>Sign in</button>
                    {this.state.currentUser !== 'users' && (
                        <div>
                            <Avatar  size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} style={{ backgroundColor: '#f56a00',marginTop:'15px' }} src={this.props.users[this.state.currentUser].avatarURL} />
                        </div>
                    )}
                </form>
            </div>
        )
    }
}
const mapStateToProps = ({authUser,users}) => ({
    authUser : authUser,
    users:users
});

export default  withRouter(connect(mapStateToProps)(Login))
