import React from 'react'
import {connect} from 'react-redux'
import ExpenceListItem from './ExpenceListItem'
import selectExpences from '../selectors/expences'

const ExpencesList = (props) => (
    <div>
    {
        props.expences.length === 0 ? (
        <p>No expenses</p>
      ) :
      (
        props.expences.map((expense) => {
            return <ExpenceListItem
                key={expense.id} 
                {...expense}
                />
        })
      )
    
    }
    </div>
);

const mapStateToprops = (state) => {
    return {
        expences: selectExpences(state.expences, state.filters)
    };
}; 
export default connect(mapStateToprops) (ExpencesList);