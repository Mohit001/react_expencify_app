import filterReducers from '../../reducers/filters'
import moment from 'moment';

test('should setup default values', ()=>{
    const state = filterReducers(undefined, {type:'@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
})

test('sort by amount', () =>{
    const state = filterReducers(undefined, {type:'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('sort by date', ()=> {
    const state = filterReducers(undefined, {type:'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date')
})

test('filter text',()=>{
    const state = filterReducers(undefined, {type:'SET_TEXT_FILTER', text:'bill'})
    expect(state.text).toBe('bill')
})