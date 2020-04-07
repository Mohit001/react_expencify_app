import React from 'react';
import ExpencesList from './ExpencesList'
import ExpenceListFilters from './ExpenceListFilters'

const ExpenseDashboardPage = () => (
    <div>
        <ExpenceListFilters />
        <ExpencesList />
    </div>
)

export default ExpenseDashboardPage