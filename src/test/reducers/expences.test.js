import expenseReducer from '../../reducers/expences'
import expenses from '../fixtures/expences'

test('should default state', () => {
    const state = expenseReducer(undefined, {type:'@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENCE',
        id:expenses[0].id
    };

    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[1], expenses[2], expenses[3]])
})

test('should not remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENCE',
        id:100
    };

    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], expenses[2], expenses[3]])
})

test('should add new expence', () => {
    const expence = {
        id:'838', 
        description:"petrol",
        note:'petrol of month',
        amount:50000,
        createdAt:1
    }

    const action = {
        type: 'ADD_EXPENCE',
        expence
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([...expenses, expence])
    
})

test('should edit expence', () => {
    const amount = 150
    const updates = {
        amount
    }
    const action = {
        type: 'EDIT_EXPENCE',
        expence:{
            id: expenses[1].id,
           updates
        }

    };
    const state = expenseReducer(expenses, action);
    expect(state[1].amount).toBe(amount)
    
})


