import React from 'react';
import { connect } from 'react-redux';
import ExpenceForm from '../components/ExpenceForm'
import { editExpences, removeExpences } from '../action/expences';

const EditExpensePage = (props) => {
    console.log(props);
    return(
    <div>
        <ExpenceForm 
            expense = {props.expense}
            onSubmit={(expense)=>{
                // console.log('updated', expense);
                props.dispatch(editExpences(props.expense.id, {...expense}))
                props.history.push('/');
            }}
        />

        <button onClick={()=>{
            props.dispatch(removeExpences({id:props.expense.id}))
            props.history.push('/');
        }}>Remove</button>
    
    </div>
    )
    
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