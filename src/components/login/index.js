import React, { Component } from 'react'
import { connect } from 'react-redux';
import styles from './login.module.css'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            isAuthentcated : !!this.props.authUser.id,
            currentUser:'users'
        }
    }

    render() {
        return (
            <div className={styles.container}>
                <h3>Welcome to the </h3>
                <h1>Would you rather ??</h1>
                <p className={styles.blueText}>Game</p>
                <form onSubmit={this.handleSubmit}>
                    <select
                    className={styles.input}
                    value={this.state.currentUser}
                    onChange={e => this.UpdateUser(e)}
                    >
                        <option>{this.state.currentUser}</option>
                        {this.props.users.map(user => (
                            <option key={user.id} name={user.id} value={user.name}>

                            </option>
                        ))}
                    </select>
                    <button className={styles.signInBtn}>Sign in</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = ({authUser,users}) => ({
    authUser : authUser,
    users
});

export default connect(mapStateToProps)(Login)
