import React from 'react'
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {addExpences, removeExpences, editExpences} from './action/expences'
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from './action/filters'
import getVisibleExpence from './selectors/expences'

const store = configureStore();


store.subscribe(()=>{
    
});

const expence1 = store.dispatch(addExpences({description:'Water bill', note:'for January month', amount:150, createdAt:-373}));
const expence2 = store.dispatch(addExpences({description:'Gas bill', note:'for December month', amount:300, createdAt: 2363}));
const expence3 = store.dispatch(addExpences({description:'Jan month rent', note:'for December month', amount:2000, createdAt: 363}));

// store.dispatch(setTextFilter('bill'))

// setTimeout(()=>{
//     store.dispatch(setTextFilter('Gas'))
// }, 3000);

const state = store.getState();
const visibleExpences = getVisibleExpence(state.expences, state.filters)
console.log(visibleExpences)

// remove expence
// store.dispatch(removeExpences({id: expenceOne.expence.id}))

// update expence
// store.dispatch(editExpences(expenceTwo.expence.id, {amount: 45}))

// filter by text
// store.dispatch(setTextFilter('coffee'))
// store.dispatch(setTextFilter(''))
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(600));
// store.dispatch(setEndDate(600))

// store.dispatch(setStartDate());
// store.dispatch(setEndDate())

const jsx = (
    <Provider store={store}>
    <AppRouter > </AppRouter>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
