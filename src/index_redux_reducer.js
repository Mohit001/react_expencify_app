import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'

const incrementCount = ({incrementBy = 1}={}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
})

const decrementCount = ({decrementBy = 1}={}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
})

// reducer
const countReducer = (state = {count:0}, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };

        case 'DECREMENT':
            return {
                count: state.count- action.decrementBy
            };
        case 'RESET':
            return {
                count: 5
            };                        
        default: 
            return state;   
    }

};

const store = createStore(countReducer);

const unSubscribe = store.subscribe(()=>{
    console.log('count', store.getState());
});

// store.dispatch({
//     type:"INCREMENT",
//     incrementBy: 50
// })

store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy:10}));

// store.dispatch({
//     type:"DECREMENT",
//     decrementBy: 10
// })

store.dispatch(decrementCount())
store.dispatch(decrementCount({decrementBy:18}))

store.dispatch({
    type:"RESET"
})

unSubscribe();

store.dispatch({
    type:"ERROR"
})




ReactDOM.render('', document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
