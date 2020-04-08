import React from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {startLogout} from '../action/auth'

const Header = ({startLogout}) => (
    <header>
        <h1>Expencify</h1>
        <NavLink exact to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
        <NavLink exact to="/create" activeClassName="is-active">Create New Expence</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);