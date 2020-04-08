import React from 'react';
import { connect } from 'react-redux';
import ExpenceForm from '../components/ExpenceForm'
import { startEditExpenses, startRemoveExpense } from '../action/expences';

export class EditExpensePage extends React.Component{

    render(){
        return(
            <div>
            <ExpenceForm 
                expense = {this.props.expense}
                onSubmit={(expense)=>{
                    // console.log('updated', expense);
                    this.props.dispatch(startEditExpenses(this.props.expense.id, {...expense}))
                    this.props.history.push('/');
                }}
            />

            <button onClick={()=>{
                this.props.dispatch(startRemoveExpense({id:this.props.expense.id}))
                this.props.history.push('/');
            }}>Remove</button>
        
        </div>
        );
    }
}

const mapStateToProps = (state, props) =>{
    // console.log("selected id",props.match.params.id)
    return{
        expense: state.expences.find((expense)=>{
            return expense.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(EditExpensePage)