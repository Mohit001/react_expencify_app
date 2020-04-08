import React from 'react';
import {connect} from 'react-redux'
import ExpenceForm from './ExpenceForm'
import {startAddExpense} from '../action/expences'

export class AddExpensePage extends React.Component{
    onSubmit = (expence) => {
        // console.log(expence)
        this.props.startAddExpense(expence)
        this.props.history.push('/')
    }
    
    render(){
        return(
            <div>
            <h1>Add Expence form</h1>
            <ExpenceForm 
            onSubmit = {this.onSubmit}/>
        </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense : (expence) => dispatch(startAddExpense(expence))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)