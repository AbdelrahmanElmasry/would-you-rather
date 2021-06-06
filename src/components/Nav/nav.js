import { Layout, Menu, Avatar,Button } from 'antd';
import React from 'react'
import NavItem from './nav-item';
import styles from './Nav.module.css'
import {  useSelector, useDispatch } from 'react-redux';
import { handleLogOut } from '../../actions/';

const Nav = (props) => {
        const {authUser,users} = useSelector(state => state)
        const currentUser = authUser.id && users[authUser.id]
        const dispatch = useDispatch();
        return (
            <Layout.Header style={{backgroundColor:'transparent',display:'flex'}}>
                <Menu theme='light' mode="horizontal" defaultSelectedKeys={['1']} style={{display:"flex",width:'75%'}}>
                    <NavItem to='/home' key={1} exact >Home</NavItem>
                    <NavItem to='/leaderboard' key={2} exact>Leaderboard</NavItem>
                    <NavItem to='/add' key={3} exact >New Question</NavItem>
                </Menu>
                {currentUser && (<div className={styles.userInfo}>
                    <Avatar   style={{ backgroundColor: '#f56a00'}} src={currentUser.avatarURL} />
                    <span className={styles.userName}>{currentUser.name}</span>
                    <Button className={styles.logoutBtn} onClick={()=>dispatch(handleLogOut())}>sign out</Button>
                </div>)}
                
            </Layout.Header>
        )
}


export default Nav;
