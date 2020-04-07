import React from 'react';
import {connect} from 'react-redux'
import ExpenceForm from './ExpenceForm'
import {addExpences} from '../action/expences'

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expence form</h1>
        <ExpenceForm 
        onSubmit = {(expence) => {
            // console.log(expence)
            props.dispatch(addExpences(expence))
            props.history.push('/')
        }}/>
    </div>
)

export default connect()(AddExpensePage)