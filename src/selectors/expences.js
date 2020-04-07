// GET VISIBLE EXPENCES
export default (expences, {text, sortBy, startDate, endDate}) =>{
    return expences.filter((expence)=>{
        const startDateMatch = typeof startDate !== 'number' || startDate < expence.createdAt;
        const endDateMatch = typeof endDate !== 'number' || endDate > expence.createdAt;
        const textMatch = typeof text !== 'string' || expence.description.includes(text);
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt?1:-1;
        } else {
            return a.amount < b.amount ? -1:1
        }
    });
}