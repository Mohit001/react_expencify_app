import React from 'react';
import {NavLink} from 'react-router-dom'
const Header = () => (
    <header>
        <h1>Expencify</h1>
        <NavLink exact to="/" activeClassName="is-active">Dashboard</NavLink>
        <NavLink exact to="/create" activeClassName="is-active">Create New Expence</NavLink>
        <NavLink exact to="/edit" activeClassName="is-active">Edit Expence</NavLink>
        <NavLink exact to="/help"  activeClassName="is-active">Help</NavLink>

    </header>
)

export default Header;