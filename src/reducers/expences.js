const expencesReducersDefaultState = []
export default (state = expencesReducersDefaultState, action) => {
    switch(action.type){
        case 'SET_EXPENSES':
            return action.expenses;
        case 'ADD_EXPENCE':
            return [...state, action.expence]
        case 'REMOVE_EXPENCE':
            return state.filter(({id})=>{
                return id !== action.id;
            })
        case 'EDIT_EXPENCE':
            return state.map((expenceItem)=>{
                console.log('map item', expenceItem.id);
                console.log('to update id', action.expence.id);
                if(expenceItem.id === action.expence.id){
                    return {
                        ...expenceItem, ...action.expence.updates
                    }
                } else {
                    return expenceItem
                }
            })
        default:
            return state;
    }
}