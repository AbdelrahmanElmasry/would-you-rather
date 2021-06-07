import React from 'react'
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css'

export default function NavItem(props) {
    return (
        <Menu.Item tabIndex={props.eventKey} eventKey={props.eventKey}>
            <NavLink
                activeClassName={styles.activeNav}
                to={props.to}
                exact={props.exact}
                key={props.to}
            >
                {props.children}
            </NavLink>
        </Menu.Item>
    )
}
