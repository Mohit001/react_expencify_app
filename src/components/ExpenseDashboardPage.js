import React from 'react';
import ExpencesList from './ExpencesList'
import ExpenceListFilters from './ExpenceListFilters'
import ExpensesSummary from './ExpensesSummary'

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpenceListFilters />
        <ExpencesList />
    </div>
)

export default ExpenseDashboardPage