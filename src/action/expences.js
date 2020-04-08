import database from '../firebase/firebase'

// ADD EXPENCES
export const addExpences = (expence) => ({
    type: 'ADD_EXPENCE', 
    expence
}); 

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            description='',
            note='',
            amount=0,
            createdAt= 0
        } = expenseData;

    const expense = {description, note, amount, createdAt}
    database.ref(`users/${uid}/expenses`)
        .push(expense)
        .then((ref)=>{
            dispatch(addExpences({
                id: ref.key,
                ...expense
            }))
        })
        .catch((e) => {
            console.log('error while pushing data', e)
        })
    }
}

    // Remove EXPENCES
export const removeExpences = ({id} = {}) => ({
    type: 'REMOVE_EXPENCE', 
    id
}); 

export const startRemoveExpense = ({id}) => {
    console.log('remove id', id)
    return(dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`)
        .remove()
        .then(() =>{
            dispatch(removeExpences({id}))
        })
    }
}

// Edit EXPENCES
export const editExpences = (id, updates) => ({
    type: 'EDIT_EXPENCE', 
    expence:{
        id,
        updates
    }});

// start async edit expense
export const startEditExpenses = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`)
        .update(updates)
        .then(()=>{
            dispatch(editExpences(id, updates))
        })
    }
}

// set expenses
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

export const startSetExpenses = () => {
   return(dispatch, getState) => {
       const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses`)
    .once('value')
    .then((snapshot)=>{
        // const val  = snapshot.val();
        // console.log(val);
        const expenses = [];

        snapshot.forEach((childSnapshot)=>{
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            })
        })
        console.log('new array', expenses);
        dispatch(setExpenses(expenses))
    })
   }
}