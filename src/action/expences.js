import {v4 as uuidv4} from 'uuid';

// ADD EXPENCES
export const addExpences = ({
    description='',
    note='',
    amount=0,
    createdAt= 0
} = {}) => ({
    type: 'ADD_EXPENCE', 
    expence:{
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }}); 

    // Remove EXPENCES
export const removeExpences = ({id} = {}) => ({
    type: 'REMOVE_EXPENCE', 
    id
}); 

// Edit EXPENCES
export const editExpences = (id, updates) => ({
    type: 'EDIT_EXPENCE', 
    expence:{
        id,
        updates
    }});