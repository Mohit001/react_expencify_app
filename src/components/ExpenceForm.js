import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';


export default class ExpenceForm extends React.Component{


    constructor(props){
        super(props)

        this.state = {
            description : props.expense ? props.expense.description: '',
            note: props.expense?props.expense.note:'',
            amount: props.expense?(props.expense.amount/100).toString():'',
            createdAt: props.expense? moment(props.expense.createdAt): moment(),
            calenderFocused : false,
            error:undefined
        }
    }
    
    onDescriptionChagne = (e) => {
        const description = e.target.value;
        this.setState(()=> ({description}))
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(()=>({note}))
    }

    onAmountChange = (e) =>{
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amount}))
        }
    }

    onDateChanged = (createdAt) => {
        this.setState(()=>({
            createdAt
        }))
    }

    onFocusChanged = ({focused}) => {
        
    };
    
    onSubmit= (e) => {
        e.preventDefault()
        if(!this.state.description || !this.state.amount) {
            this.setState(()=>({error: 'please provide description and amount'}))
        } else {
            this.setState(()=>({error: undefined}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit = {this.onSubmit}>
                    <input 
                        type='text'
                        placeholder='Description'
                        autoFocus
                        value = {this.state.description}
                        onChange = {this.onDescriptionChagne}
                    />
                    <input
                     type='amount'
                     placeholder='Amount'
                     value = {this.state.amount}
                     onChange = {this.onAmountChange}
                     />
                     <SingleDatePicker
                        date={this.state.createdAt} // momentPropTypes.momentObj or null
                        onDateChange={this.onDateChanged} // PropTypes.func.isRequired
                        focused={this.state.calenderFocused} // PropTypes.bool
                        onFocusChange={this.onFocusChanged} // PropTypes.func.isRequired
                        numberOfMonths = {1}
                        isOutsideRange = {() => false}
                    />

                    <p>

                     <textarea 
                        placeholder = 'Add note for your expence' 
                        value = {this.state.note}
                        onChange={this.onNoteChange}></textarea>
                    </p>

                    <button>Add Expence</button>
                </form>
            </div>
        );
    }
}