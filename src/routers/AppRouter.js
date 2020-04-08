import React from 'react';
import {Router, Route, Switch} from 'react-router-dom'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFound'
import LoginPage from '../components/LoginPage'
import createHistory from 'history/createBrowserHistory'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
    <Switch>
        <PublicRouter path="/" component={LoginPage} exact />
        <PrivateRouter path="/dashboard" component={ExpenseDashboardPage} exact/>
        <PrivateRouter path="/create" component={AddExpensePage} exact/>
        <PrivateRouter path='/edit/:id' component={EditExpensePage} />
        <Route path='/help' component={HelpPage} />
        <Route component={NotFoundPage} exact/>
    </Switch>
    </div>
</Router>
)

export default AppRouter