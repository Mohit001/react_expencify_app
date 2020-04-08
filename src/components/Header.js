import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../action/auth'

const Header = ({ startLogout }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" exact to="/dashboard" activeClassName="is-active">
                    <h1>Expencify</h1>
                </Link>
                <button className="blue-button blue-button--link" onClick={startLogout}>Logout</button>
            </div>
        </div>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);