import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import expencesReducers from '../reducers/expences'
import filterReducer from '../reducers/filters'
import authReducer from '../reducers/auth'


const composeEnhancers = window.window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export default () => {

    const store = createStore(
        combineReducers({
            expences: expencesReducers,
            filters: filterReducer,
            auth:authReducer
        }), 
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};
