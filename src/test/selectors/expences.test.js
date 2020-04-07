import selectExpences from '../../selectors/expences'
import expences from '../fixtures/expences'

test('should filter by text value by date', ()=>{
    const filters = {
        text:'rent',
        sortBy:'date',
        startDate: undefined,
        endDate: undefined
    }; 
    const result = selectExpences(expences, filters)
    expect(result).toEqual([expences[2], expences[3]])
})


test('should filter by text value by amount', ()=>{
    const filters = {
        text:'rent',
        sortBy:'amount',
        startDate: undefined,
        endDate: undefined
    }; 
    const result = selectExpences(expences, filters)
    expect(result).toEqual([expences[3], expences[2]])
})