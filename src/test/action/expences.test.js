import {addExpences, editExpences, removeExpences} from '../../action/expences'

test('test remvoe expence', ()=>{
    const result = removeExpences({id:'abc123'});
    expect(result).toEqual({
        type: 'REMOVE_EXPENCE',
        id: 'abc123'
    });
})

test('edit expense', ()=>{
    const result = editExpences('123abc', {descprition:'test description'});
    expect(result).toEqual({
        type: 'EDIT_EXPENCE', 
        expence: {
            id: '123abc',
            updates: {
            descprition: 'test description'
            }
        }
    })
})

test('add expences', () => {
    const result = addExpences({id:'idididndi', description:'test desc', note:'temp not', amount:7373, createdAt:99999});
    expect(result).toEqual({
        type: 'ADD_EXPENCE',
        expence: {
            id: expect.any(String),
            description: 'test desc',
            note: 'temp not',
            amount: 7373,
            createdAt: 99999
        }
    })
})

test('add default expences', () => {
    const result = addExpences();
    expect(result).toEqual({
        type: 'ADD_EXPENCE',
        expence: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})