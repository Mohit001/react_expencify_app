import React from 'react'
import {connect} from 'react-redux'
import ExpenceListItem from './ExpenceListItem'
import selectExpences from '../selectors/expences'

const ExpencesList = (props) => (
    <div>
        <h1>Expences List</h1>
        {props.expences.map((expence)=>{
            return <ExpenceListItem
                        key={expence.id} 
                        {...expence}
                        />
        })}
    </div>
);

const mapStateToprops = (state) => {
    return {
        expences: selectExpences(state.expences, state.filters)
    };
}; 
export default connect(mapStateToprops) (ExpencesList);