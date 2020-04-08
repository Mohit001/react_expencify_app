import React from 'react';
import {connect} from 'react-redux'
import {startLogin} from '../action/auth'

export const LoginPage = ({startLogin}) => (
    <div className='box-layout'>
        <div className='box-layout__box'>
            <h1 className='box-layout__title'>Expencify</h1>
            <p>Its time to get your expences under control</p>
            <button className='blue-button' 
                    onClick={startLogin}
                    >Login with Google</button>
        </div>
    </div>
)

const mapDispatchToProps =  (dispatch) =>({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)