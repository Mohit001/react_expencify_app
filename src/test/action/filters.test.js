import {setTextFilter, 
        sortByAmount, 
        sortByDate,
        setStartDate,
        setEndDate} from '../../action/filters'

test('setTextFilter', ()=>{
    const result = setTextFilter({text:'bill'});
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text: {
            text:'bill'
        }
    });
})

test('setTextFilter default', ()=>{
    const result = setTextFilter()
    expect(result).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
})

test('sortByAmount', ()=>{
    const result = sortByAmount();
    expect(result).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})

test('SORT_BY_DATE', ()=>{
    const result = sortByDate()
    expect(result).toEqual({
        type:'SORT_BY_DATE'
    })
})

test('setStartDate', ()=>{
    const result = setStartDate({startDate: 99999});
    expect(result).toEqual({
        type:'SET_START_DATE',
        startDate: {
            startDate:99999
        }
    });
})

test('setStartDate', ()=>{
    const result = setStartDate();
    expect(result).toEqual({
        type: 'SET_START_DATE',
        endDate: undefined
    })
})

test('SET_END_DATE', ()=>{
    const result = setEndDate({endDate:11111})
    expect(result).toEqual({
        type:'SET_END_DATE',
        endDate:{
            endDate:11111
        }
    })
})

test('SET_END_DATE', ()=>{
    const result = setEndDate()
    expect(result).toEqual({
        type:'SET_END_DATE',
        endDate: undefined
    })
})